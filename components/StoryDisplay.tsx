import React, { useEffect, useRef } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { Message } from '../types';

interface StoryDisplayProps {
  messages: Message[];
}

const Placeholder: React.FC = () => (
    <div className="text-center text-gray-400 flex flex-col items-center justify-center h-full opacity-60">
      <span className="text-8xl mb-4 grayscale">😒</span>
      <h3 className="text-2xl font-bold text-gray-500 mb-2">질문 안 해?</h3>
      <p className="text-lg">심심해 죽겠네. 뭐라도 물어보든가.</p>
    </div>
);

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.author === 'user';

  const formattedContent = message.content.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-2 last:mb-0">
      {paragraph}
    </p>
  ));
  
  return (
    <div className={`flex items-end gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
        {!isUser && (
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center text-2xl shadow-sm overflow-hidden">
                😤
            </div>
        )}
        <div className={`max-w-[85%] sm:max-w-xl rounded-2xl p-4 shadow-sm text-lg ${
            isUser 
            ? 'bg-orange-500 text-white rounded-br-none' 
            : 'bg-white text-gray-800 border border-orange-100 rounded-bl-none'
        }`}>
          {message.isLoading ? (
            <div className="flex items-center justify-center p-2">
                <LoadingSpinner />
            </div>
          ) : message.error ? (
            <div className="text-red-500">
                <p className="font-bold">망했어.</p>
                <p>{message.error}</p>
            </div>
          ) : (
            <div className="leading-relaxed whitespace-pre-wrap">
              {formattedContent}
            </div>
          )}
        </div>
    </div>
  );
};


export const StoryDisplay: React.FC<StoryDisplayProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) {
    return <Placeholder />;
  }

  return (
    <div className="h-full">
        {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
    </div>
  );
};