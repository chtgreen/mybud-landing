import { useState, type FC } from 'react';

export const VoiceNoteDemo: FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMouseDown = () => {
    setIsRecording(true);
    setHasRecorded(false);
  };

  const handleMouseUp = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsProcessing(true);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        setHasRecorded(true);
        
        // Reset after showing result
        setTimeout(() => {
          setHasRecorded(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl p-8 md:p-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Microphone Button */}
        <div className="relative">
          {/* Animated pulse rings */}
          {isRecording && (
            <>
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20" style={{ animationDuration: '1s' }} />
              <div className="absolute inset-[-8px] bg-emerald-400 rounded-full animate-ping opacity-20" style={{ animationDuration: '1.5s' }} />
              <div className="absolute inset-[-16px] bg-emerald-400 rounded-full animate-ping opacity-10" style={{ animationDuration: '2s' }} />
            </>
          )}
          
          {/* Main button */}
          <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => {
              if (isRecording) handleMouseUp();
            }}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              isRecording 
                ? 'bg-red-500 scale-110' 
                : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-105'
            }`}
          >
            {/* Microphone Icon */}
            <svg 
              className="w-12 h-12 md:w-14 md:h-14 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
              />
            </svg>
          </button>
        </div>

        {/* Status Text */}
        <div className="text-center min-h-[60px] flex flex-col items-center justify-center">
          {!isRecording && !isProcessing && !hasRecorded && (
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-emerald-900">
                Hold to Record
              </p>
              <p className="text-sm md:text-base text-emerald-700">
                Try saying: "I watered my plants with 500ml"
              </p>
            </div>
          )}
          
          {isRecording && (
            <div className="space-y-2 animate-pulse">
              <p className="text-lg md:text-xl font-semibold text-red-600">
                🎤 Recording...
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Release to stop
              </p>
            </div>
          )}
          
          {isProcessing && (
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-blue-600 flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AI Processing...
              </p>
              <p className="text-sm text-gray-600">
                Transcribing and classifying
              </p>
            </div>
          )}
          
          {hasRecorded && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-lg md:text-xl font-semibold text-green-600 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Activity Created!
              </p>
              <div className="bg-white rounded-xl p-4 shadow-lg max-w-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💧</span>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900">Watered</p>
                    <p className="text-sm text-emerald-600">🌿 All plants</p>
                    <p className="text-sm text-gray-600 mt-1">500ml • Just now</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        {!isRecording && !isProcessing && !hasRecorded && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs md:text-sm rounded-full">
              No typing needed
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs md:text-sm rounded-full">
              AI understands context
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs md:text-sm rounded-full">
              Instant activity creation
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceNoteDemo;

