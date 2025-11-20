import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  prompt,
  setPrompt,
  onSubmit,
  isLoading,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };
  
  return (
    <div className="bg-white/80 rounded-2xl shadow-lg border-2 border-orange-200 p-2 focus-within:border-orange-400 transition-colors">
      <div className="relative flex items-center">
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="뭘 또 물어보려고? 귀찮게..."
          className="w-full p-3 pr-12 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400 resize-none text-lg"
          rows={1}
          style={{ maxHeight: '120px' }}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading || !prompt}
          className="absolute right-2 bg-orange-500 text-white rounded-xl p-2 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300 shadow-sm"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};