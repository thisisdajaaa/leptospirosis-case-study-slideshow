import { useEffect, useMemo, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import ReactFlow, { 
  Background, 
  Controls, 
  useReactFlow,
  Panel,
  Handle,
  Position,
  BaseEdge,
  getSmoothStepPath
} from 'reactflow';
import useSlideshow from '../hooks/useSlideshow';
import { nodes as nodeData, connections } from '../data/conceptMap';
import NavigationControls from './NavigationControls';

const ConceptMapSlideshow = () => {
  const {
    currentStep,
    totalSteps,
    progress,
    revealedNodes,
    revealedConnections,
    activeNodeIds,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  } = useSlideshow();

  // State to track node positions for dragging
  const [nodePositions, setNodePositions] = useState({});

  // Color mapping for node types
  const colorMap = {
    patient: '#3B82F6',      // blue-500
    history: '#B45309',      // amber-700 (brown/khaki)
    pathogen: '#EC4899',     // pink-500
    mechanism: '#EF4444',    // red-500
    symptom: '#22C55E',      // green-500
    treatment: '#FFFFFF',    // white
    lab: '#FFB380',          // peach/light orange for ORGAN SYSTEM EFFECTS, orange-400 for others
    organ: '#EC4899',        // pink-500 (same as pathogen)
    outcome: '#9CA3AF',      // gray-400
    condition: '#DB2777',    // pink-600
    plain: 'transparent',    // no background for nodes without colors
  };

  // Calculate center of all revealed nodes for better centering
  const revealedNodeData = nodeData.filter(node => revealedNodes.has(node.id));
  const centerX = revealedNodeData.length > 0 
    ? revealedNodeData.reduce((sum, node) => sum + node.x, 0) / revealedNodeData.length 
    : 500;
  const centerY = revealedNodeData.length > 0 
    ? revealedNodeData.reduce((sum, node) => sum + node.y, 0) / revealedNodeData.length 
    : 600;

  // Convert our node data to React Flow format
  const reactFlowNodes = useMemo(() => {
    return nodeData
      .filter(node => revealedNodes.has(node.id))
      .map(node => {
        const isActive = activeNodeIds.includes(node.id);
        // Special handling for organEffects - needs peach color
        let bgColor = colorMap[node.type] || '#6B7280';
        if (node.id === 'organEffects') {
          bgColor = '#FFB380'; // peach/light orange
        }
        const isLightBg = node.type === 'treatment' || (node.type === 'lab' && node.id !== 'organEffects') || node.type === 'outcome';
        const isPlain = node.type === 'plain';
        const textColor = isPlain ? 'white' : (isLightBg ? '#111827' : 'white');
        
        // Use saved position if available, otherwise use calculated position
        const savedPosition = nodePositions[node.id];
        const position = savedPosition 
          ? { x: savedPosition.x - centerX, y: savedPosition.y - centerY }
          : { x: node.x - centerX, y: node.y - centerY };
        
        return {
          id: node.id,
          position,
          data: { 
            label: node.text,
            type: node.type,
            isActive,
            isPlain,
          },
          type: 'custom',
          style: {
            background: isPlain ? 'transparent' : bgColor,
            color: textColor,
            border: isPlain 
              ? 'none' 
              : (isActive 
                ? '2px solid rgba(251, 191, 36, 0.8)' 
                : '1px solid rgba(255, 255, 255, 0.1)'),
            borderRadius: '12px',
            padding: '12px 16px',
            minWidth: '110px',
            maxWidth: '240px',
            fontSize: '12px',
            fontWeight: '600',
            boxShadow: isPlain 
              ? 'none' 
              : (isActive
                ? '0 0 30px rgba(251, 191, 36, 0.4)'
                : '0 4px 12px rgba(0, 0, 0, 0.3)'),
            opacity: isActive ? 1 : 0.7,
          },
        };
      });
  }, [nodeData, revealedNodes, activeNodeIds, centerX, centerY, colorMap, nodePositions]);

  // Custom edge component for bordering line effect
  const BorderingLineEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, markerEnd }) => {
    // Calculate the Y position for the horizontal line (above SEVERE LEPTOSPIROSIS)
    // All three mechanisms should connect to the same horizontal line
    const horizontalLineY = targetY - 30;
    
    // Create waypoints: down from source, then horizontal to target X, then down to target
    const waypoints = [
      { x: sourceX, y: horizontalLineY },
      { x: targetX, y: horizontalLineY },
    ];
    
    // Create path using step path
    const [path] = getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
    });
    
    // Override with custom path for horizontal line effect
    const customPath = `M ${sourceX} ${sourceY} L ${sourceX} ${horizontalLineY} L ${targetX} ${horizontalLineY} L ${targetX} ${targetY}`;
    
    return (
      <BaseEdge
        id={id}
        path={customPath}
        style={style}
        markerEnd={markerEnd}
      />
    );
  };

  // Convert connections to React Flow edges
  // Show edges between all revealed nodes
  const reactFlowEdges = useMemo(() => {
    if (reactFlowNodes.length === 0) {
      return [];
    }
    
    const nodeIds = reactFlowNodes.map(n => n.id);
    const nodeIdSet = new Set(nodeIds);
    
    // Find SEVERE LEPTOSPIROSIS node position for bordering line calculation
    const severeLeptNode = reactFlowNodes.find(n => n.id === 'severeLeptospirosis');
    
    const edges = connections
      .filter(conn => {
        // Both nodes must exist in reactFlowNodes
        const bothExist = nodeIdSet.has(conn.from) && nodeIdSet.has(conn.to);
        return bothExist;
      })
      .map(conn => {
        // Check if this is one of the three mechanisms connecting to severe leptospirosis
        const isBorderingLine = (conn.from === 'hematogenous' || conn.from === 'endothelial' || conn.from === 'immune') && conn.to === 'severeLeptospirosis';
        
        return {
          id: `edge-${conn.from}-${conn.to}`,
          source: conn.from,
          target: conn.to,
          type: isBorderingLine ? 'borderingLine' : 'smoothstep',
          animated: false,
          style: {
            stroke: '#FFFFFF',
            strokeWidth: isBorderingLine ? 2.5 : 2,
            opacity: 0.8,
          },
          markerEnd: {
            type: 'arrowclosed',
            color: '#FFFFFF',
            width: 20,
            height: 20,
          },
          sourceHandle: 'bottom',
          targetHandle: 'top',
        };
      });
    
    return edges;
  }, [connections, reactFlowNodes]);

  const edgeTypes = {
    borderingLine: BorderingLineEdge,
  };

  // Custom node component with handles for edge connections
  const CustomNode = ({ data, selected }) => {
    const isActive = data.isActive || selected;
    const isPlain = data.isPlain;
    
    return (
      <motion.div
        className={`rounded-xl px-4 py-3 text-xs font-semibold ${isPlain ? '' : 'border backdrop-blur-sm'} relative flex items-center justify-center text-center`}
        style={{
          minWidth: '110px',
          maxWidth: '240px',
          wordBreak: 'break-word',
          lineHeight: '1.5',
          whiteSpace: 'normal',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isActive ? 1 : 0.7,
          scale: isActive ? 1.05 : 1,
        }}
        transition={{
          duration: 0.4,
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Source handle (bottom center) - for outgoing edges */}
        {!isPlain && (
          <Handle
            type="source"
            position={Position.Bottom}
            id="bottom"
            style={{ 
              background: '#FFFFFF',
              width: '10px',
              height: '10px',
              border: '2px solid #FFFFFF',
              borderRadius: '50%',
            }}
          />
        )}
        {/* Target handle (top center) - for incoming edges */}
        {!isPlain && (
          <Handle
            type="target"
            position={Position.Top}
            id="top"
            style={{ 
              background: '#FFFFFF',
              width: '10px',
              height: '10px',
              border: '2px solid #FFFFFF',
              borderRadius: '50%',
            }}
          />
        )}
        <div style={{ textAlign: 'center', width: '100%', whiteSpace: 'pre-line' }}>
          {data.label}
        </div>
      </motion.div>
    );
  };

  const nodeTypes = {
    custom: CustomNode,
  };

  // Handle nodes change (required for React Flow)
  const onNodesChange = useCallback((changes) => {
    // Update node positions when dragged
    const updatedPositions = { ...nodePositions };
    let hasChanges = false;
    
    changes.forEach(change => {
      if (change.type === 'position' && change.position) {
        const node = reactFlowNodes.find(n => n.id === change.id);
        if (node) {
          // Calculate absolute position (add back center offset)
          const absoluteX = change.position.x + centerX;
          const absoluteY = change.position.y + centerY;
          
          updatedPositions[change.id] = { x: absoluteX, y: absoluteY };
          hasChanges = true;
          
          console.log(`📍 Node "${node.data.label}" (${change.id}) moved to:`, {
            absoluteX: Math.round(absoluteX),
            absoluteY: Math.round(absoluteY),
            relativeX: Math.round(change.position.x),
            relativeY: Math.round(change.position.y),
          });
        }
      }
    });
    
    if (hasChanges) {
      setNodePositions(updatedPositions);
      
      // Log all positions in a copy-paste ready format
      const allPositions = reactFlowNodes.map(node => {
        const savedPos = updatedPositions[node.id];
        const absX = savedPos ? savedPos.x : (node.position.x + centerX);
        const absY = savedPos ? savedPos.y : (node.position.y + centerY);
        return {
          id: node.id,
          text: node.data.label,
          x: Math.round(absX),
          y: Math.round(absY),
        };
      });
      
      console.log('📊 All Node Positions:', allPositions);
      console.log('📋 JSON Format:', JSON.stringify(allPositions, null, 2));
      console.log('📝 Data File Format:');
      allPositions.forEach(node => {
        const originalNode = nodeData.find(n => n.id === node.id);
        const nodeType = originalNode ? originalNode.type : 'UNKNOWN';
        console.log(`  { id: '${node.id}', text: '${node.text}', type: nodeTypes.${nodeType.toUpperCase()}, x: ${node.x}, y: ${node.y} },`);
      });
    }
  }, [reactFlowNodes, centerX, centerY, nodePositions]);

  // Handle edges change (required for React Flow)
  const onEdgesChange = useCallback((changes) => {
    // Edges are controlled, so we don't need to update state
    // This handler is required for React Flow to render edges properly
    console.log('🔄 Edges changed:', changes);
  }, []);

  // Debug: Log node positions
  useEffect(() => {
    const nodePositions = reactFlowNodes.map(node => ({
      id: node.id,
      text: node.data.label,
      // Calculate absolute positions (add back center offset)
      x: node.position.x + centerX,
      y: node.position.y + centerY,
      // Relative positions (as stored in React Flow)
      relativeX: node.position.x,
      relativeY: node.position.y,
    }));
    
    console.log('📊 Node Positions:', nodePositions);
    console.log('📋 Copy-paste ready format:', JSON.stringify(nodePositions, null, 2));
    
    // Also log in a format that's easy to copy for the data file
    console.log('📝 Data file format:');
    nodePositions.forEach(node => {
      console.log(`{ id: '${node.id}', text: '${node.text}', type: nodeTypes.XXX, x: ${Math.round(node.x)}, y: ${Math.round(node.y)} },`);
    });
  }, [reactFlowNodes, centerX, centerY]);

  // Auto-fit view to active nodes - properly centered
  const FitViewOnActiveNodes = () => {
    const { fitView } = useReactFlow();
    
    useEffect(() => {
      if (activeNodeIds.length > 0) {
        const nodeIds = activeNodeIds.filter(id => revealedNodes.has(id));
        if (nodeIds.length > 0) {
          setTimeout(() => {
            fitView({ 
              nodes: nodeIds.map(id => ({ id })),
              padding: 0.4,
              duration: 800,
              includeHiddenNodes: false,
              minZoom: 0.3,
              maxZoom: 2,
            });
          }, 150);
        } else if (revealedNodes.size > 0) {
          // If no active nodes but we have revealed nodes, fit to all revealed nodes
          setTimeout(() => {
            fitView({ 
              padding: 0.3,
              duration: 800,
              includeHiddenNodes: false,
            });
          }, 150);
        }
      }
    }, [activeNodeIds, revealedNodes, fitView]);
    
    return null;
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* React Flow Container */}
      <div className="w-full h-full" style={{ paddingBottom: '140px' }}>
        <ReactFlow
          nodes={reactFlowNodes}
          edges={reactFlowEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onlyRenderVisibleElements={false}
          fitView={reactFlowNodes.length > 0}
          fitViewOptions={{ 
            padding: 0.3,
            includeHiddenNodes: false,
            minZoom: 0.3,
            maxZoom: 2,
          }}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          minZoom={0.3}
          maxZoom={2}
          nodesDraggable={true}
          nodesConnectable={false}
          elementsSelectable={true}
          panOnDrag={true}
          zoomOnScroll={true}
          zoomOnPinch={true}
          zoomOnDoubleClick={true}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#64748B" gap={20} opacity={0.1} />
          <Controls 
            showInteractive={false}
            style={{
              button: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                borderColor: 'rgba(148, 163, 184, 0.3)',
                color: 'white',
              },
            }}
          />
          <FitViewOnActiveNodes />
          
          {/* Step Indicator */}
          <Panel position="top-left" className="bg-slate-900/90 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700/50">
            <div className="text-sm font-semibold tracking-wide">
              <span className="text-slate-400">Step</span>{' '}
              <span className="text-white text-lg">{currentStep + 1}</span>
              <span className="text-slate-500"> / {totalSteps}</span>
            </div>
          </Panel>
        </ReactFlow>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        onPrevious={previousStep}
        onNext={nextStep}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        currentStep={currentStep}
        totalSteps={totalSteps}
        progress={progress}
      />
    </div>
  );
};

export default ConceptMapSlideshow;
