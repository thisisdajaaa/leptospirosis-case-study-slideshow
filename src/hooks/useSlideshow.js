import { useState, useEffect, useCallback } from 'react';
import { flowSequence } from '../data/conceptMap';

const useSlideshow = () => {
  const [currentStep, setCurrentStep] = useState(flowSequence.length - 1);
  const [revealedNodes, setRevealedNodes] = useState(new Set());
  const [revealedConnections, setRevealedConnections] = useState(new Set());
  const [activeNodeIds, setActiveNodeIds] = useState([]);

  // Initialize with all nodes revealed
  useEffect(() => {
    if (flowSequence.length > 0) {
      const allNodes = new Set();
      const allConnections = new Set();
      flowSequence.forEach(step => {
        step.nodes.forEach(id => allNodes.add(id));
        step.connections.forEach(([from, to]) => allConnections.add(`${from}-${to}`));
      });
      setRevealedNodes(allNodes);
      setRevealedConnections(allConnections);
      setActiveNodeIds(flowSequence[flowSequence.length - 1].nodes);
    }
  }, []);

  // Update revealed nodes and connections when step changes
  useEffect(() => {
    if (currentStep < 0 || currentStep >= flowSequence.length) return;

    // Build revealed nodes and connections up to current step
    const newRevealedNodes = new Set();
    const newRevealedConnections = new Set();

    for (let i = 0; i <= currentStep; i++) {
      const step = flowSequence[i];
      step.nodes.forEach(nodeId => {
        newRevealedNodes.add(nodeId);
      });
      step.connections.forEach(([from, to]) => {
        newRevealedConnections.add(`${from}-${to}`);
      });
    }

    setRevealedNodes(newRevealedNodes);
    setRevealedConnections(newRevealedConnections);
    setActiveNodeIds(flowSequence[currentStep].nodes);
  }, [currentStep]);

  const nextStep = useCallback(() => {
    if (currentStep < flowSequence.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  const previousStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((stepIndex) => {
    if (stepIndex >= 0 && stepIndex < flowSequence.length) {
      // Build revealed nodes and connections up to this step
      const newRevealedNodes = new Set();
      const newRevealedConnections = new Set();

      for (let i = 0; i <= stepIndex; i++) {
        const step = flowSequence[i];
        step.nodes.forEach(nodeId => {
          newRevealedNodes.add(nodeId);
        });
        step.connections.forEach(([from, to]) => {
          newRevealedConnections.add(`${from}-${to}`);
        });
      }

      setRevealedNodes(newRevealedNodes);
      setRevealedConnections(newRevealedConnections);
      setCurrentStep(stepIndex);
      setActiveNodeIds(flowSequence[stepIndex].nodes);
    }
  }, []);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === flowSequence.length - 1;
  const totalSteps = flowSequence.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return {
    currentStep,
    totalSteps,
    progress,
    revealedNodes,
    revealedConnections,
    activeNodeIds,
    nextStep,
    previousStep,
    goToStep,
    isFirstStep,
    isLastStep,
  };
};

export default useSlideshow;
