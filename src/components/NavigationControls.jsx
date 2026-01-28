import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const NavigationControls = ({
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
  currentStep,
  totalSteps,
  progress,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50 p-6 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-slate-300 text-sm font-medium tracking-wide">
              Step <span className="text-white font-semibold">{currentStep + 1}</span> of <span className="text-slate-400">{totalSteps}</span>
            </span>
            <span className="text-slate-300 text-sm font-medium">
              <span className="text-white font-semibold">{Math.round(progress)}</span><span className="text-slate-500">%</span>
            </span>
          </div>
          <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden border border-slate-700/30">
            <motion.div
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 h-full rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={isFirstStep}
            className={`
              flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
              transition-all duration-300 transform
              ${isFirstStep
                ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700/30'
                : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 hover:scale-105 active:scale-95 shadow-xl border border-slate-600/50 hover:border-slate-500/50'
              }
            `}
          >
            <FaChevronLeft className="text-xs" />
            Previous
          </button>

          <div className="text-slate-400 text-xs font-medium tracking-wide">
            Use <kbd className="px-2.5 py-1 bg-slate-800/70 border border-slate-700/50 rounded-md text-slate-300 font-mono text-xs">←</kbd> / <kbd className="px-2.5 py-1 bg-slate-800/70 border border-slate-700/50 rounded-md text-slate-300 font-mono text-xs">→</kbd> arrows or <kbd className="px-2.5 py-1 bg-slate-800/70 border border-slate-700/50 rounded-md text-slate-300 font-mono text-xs">Space</kbd> to navigate
          </div>

          {isLastStep ? (
            <a
              href="https://www.canva.com/design/DAG91fG060E/6ZLej6c8dZr8hvIpTwhh6g/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 hover:scale-105 active:scale-95 shadow-xl border border-blue-500/50 hover:border-blue-400/50 transition-all duration-300 transform"
            >
              Back to Presentation
              <FaExternalLinkAlt className="text-xs" />
            </a>
          ) : (
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-500 hover:to-amber-400 hover:scale-105 active:scale-95 shadow-xl border border-amber-500/50 hover:border-amber-400/50 transition-all duration-300 transform"
            >
              Next
              <FaChevronRight className="text-xs" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationControls;
