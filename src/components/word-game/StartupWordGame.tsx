import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Trophy, Rocket } from 'lucide-react';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlayModal = ({ isOpen, onClose }: HowToPlayModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-50 bg-white rounded-xl p-8 max-w-md w-full shadow-2xl transform transition-all">
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="text-blue-500 w-6 h-6" />
          <h3 className="text-2xl font-bold text-gray-800">How to Play</h3>
        </div>
        <ul className="space-y-4 mb-6">
          <li className="flex items-center gap-2">
            <div className="bg-blue-100 rounded-full p-2 text-blue-500 font-bold">1</div>
            <span>Each word is related to startups and business</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-blue-100 rounded-full p-2 text-blue-500 font-bold">2</div>
            <span>Unscramble the letters to find the word</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-blue-100 rounded-full p-2 text-blue-500 font-bold">3</div>
            <span>Type your answer and submit to check</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-blue-100 rounded-full p-2 text-blue-500 font-bold">4</div>
            <span>Score points for each correct word</span>
          </li>
        </ul>
        <button 
          onClick={onClose}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 w-full font-semibold shadow-lg transform transition-all hover:scale-105"
        >
          Let's Play!
        </button>
      </div>
    </div>
  );
};

const StartupWordGame = () => {
  const words = [
    'STARTUP',
    'INVESTOR',
    'FUNDING',
    'VENTURE',
    'PITCH',
    'GROWTH',
    'MARKET',
    'SCALE',
    'UNICORN',
    'SERIES',
    'PROFIT'
  ];

  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(true);

  const scrambleWord = (word: string) => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  };

  const selectNewWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setUserInput('');
    setMessage('');
    setShowSuccess(false);
  };

  useEffect(() => {
    selectNewWord();
  }, []);

  const handleSubmit = () => {
    if (userInput.toUpperCase() === currentWord) {
      setScore(score + 1);
      setMessage('Excellent! 🎯');
      setShowSuccess(true);
      setTimeout(selectNewWord, 1500);
    } else {
      setMessage('Try again! 💪');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl">
      <HowToPlayModal isOpen={showHowToPlay} onClose={() => setShowHowToPlay(false)} />
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Rocket className="text-blue-500 w-6 h-6" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Startup Word Blossom
          </h2>
        </div>
        <button
          onClick={() => setShowHowToPlay(true)}
          className="text-blue-500 hover:text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all"
        >
          How to Play
        </button>
      </div>
      
      <div className="text-center mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <div className="text-5xl font-bold mb-4 tracking-wider bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text animate-pulse">
            {scrambledWord}
          </div>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border-2 border-blue-200 rounded-lg mb-4 text-center text-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            placeholder="Type your answer"
          />
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 font-semibold shadow-lg transform transition-all hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="text-center">
        {message && (
          <div className="flex items-center justify-center gap-2 mb-6 animate-bounce">
            {showSuccess ? (
              <CheckCircle className="text-green-500 w-6 h-6" />
            ) : (
              <AlertCircle className="text-blue-500 w-6 h-6" />
            )}
            <span className={`text-lg font-semibold ${showSuccess ? 'text-green-500' : 'text-blue-500'}`}>
              {message}
            </span>
          </div>
        )}
        <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-md">
          <Trophy className="text-yellow-500 w-6 h-6" />
          <div className="text-xl font-bold text-gray-800">Score: {score}</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={selectNewWord}
          className="text-blue-500 hover:text-blue-600 font-medium hover:underline transition-all"
        >
          Skip this word →
        </button>
      </div>
    </div>
  );
};

export default StartupWordGame;