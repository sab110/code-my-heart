import { useState, useEffect } from 'react';
import StarField from '../components/StarField';
import TypewriterText from '../components/TypewriterText';
import ConfettiEffect from '../components/ConfettiEffect';
import HeartIcon from '../components/HeartIcon';

const ProposalPage = () => {
  const [showProposal, setShowProposal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  const codeLines = [
    "// Initializing love.js...",
    "const vadiya = new Person('Vadiya Saleem', '2001-02-09');",
    "const me = new SoftwareDeveloper();",
    "",
    "// You are my only running process",
    "while(true) {",
    "  console.log('Thinking about Vadiya...');",
    "  heartbeat.return(vadiya.name);",
    "}",
    "",
    "// Every function returns to you",
    "function myLife() {",
    "  return vadiya.love();",
    "}",
    "",
    "// Ready to commit...",
    "git commit -m 'Will you marry me?'",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProposal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showProposal) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showProposal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine(prev => (prev + 1) % codeLines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleYes = () => {
    setShowConfetti(true);
    
    // Create custom alert with beautiful styling
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, hsl(320, 60%, 60%), hsl(280, 60%, 50%));
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: scale-in 0.3s ease-out;
      ">
        🎉 YES! I knew you'd say yes! 🎉<br>
        <span style="font-size: 1rem; opacity: 0.9; margin-top: 0.5rem; display: block;">
          You've made me the happiest coder alive! 💍❤️
        </span>
        <button onclick="this.parentElement.parentElement.remove()" style="
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.2);
          border: none;
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-weight: 500;
        ">Close</button>
      </div>
    `;
    document.body.appendChild(alertDiv);

    // Play celebration sound (if you want to add audio)
    // const audio = new Audio('/celebration.mp3');
    // audio.play().catch(() => {});
  };

  const handleNo = () => {
    // Create sad alert
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, hsl(240, 20%, 20%), hsl(240, 30%, 15%));
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: scale-in 0.3s ease-out;
        border: 1px solid hsl(240, 20%, 30%);
      ">
        😢 I'll keep trying to debug this error... 😢<br>
        <span style="font-size: 1rem; opacity: 0.9; margin-top: 0.5rem; display: block;">
          Maybe I need to refactor my approach? 💔
        </span>
        <button onclick="this.parentElement.parentElement.remove()" style="
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          font-weight: 500;
        ">Close</button>
      </div>
    `;
    document.body.appendChild(alertDiv);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      <ConfettiEffect isActive={showConfetti} />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Header with floating hearts */}
        <div className="text-center mb-8 relative">
          <HeartIcon className="absolute -top-4 -left-4 w-6 h-6 text-primary floating" animated />
          <HeartIcon className="absolute -top-2 -right-6 w-4 h-4 text-primary-glow floating" animated />
          <div className="gradient-text text-2xl md:text-4xl font-bold mb-2">
            <TypewriterText 
              text="// Love Algorithm Initialized" 
              speed={80}
              className="font-mono"
            />
          </div>
          <div className="text-muted-foreground text-lg">
            <TypewriterText 
              text="Running romantic.exe..." 
              speed={60}
              delay={3000}
              className="font-mono"
            />
          </div>
        </div>

        {/* Code Terminal */}
        <div className="terminal w-full max-w-2xl p-6 pt-8 mb-8 relative">
          <div className="space-y-2 font-mono text-sm">
            {codeLines.slice(0, currentCodeLine + 1).map((line, index) => (
              <div
                key={index}
                className={`${
                  line.includes('//') 
                    ? 'text-muted-foreground' 
                    : line.includes('vadiya') || line.includes('love')
                      ? 'text-primary code-glow'
                      : 'text-foreground'
                } transition-all duration-300`}
              >
                {line || '\u00A0'}
              </div>
            ))}
            <div className="cursor inline-block" />
          </div>
        </div>

        {/* Romantic Messages */}
        <div className="text-center mb-8 space-y-4 max-w-2xl">
          <div className="text-xl md:text-2xl text-accent font-medium">
            <TypewriterText 
              text="You are my only running process" 
              speed={60}
              delay={4000}
            />
          </div>
          <div className="text-lg md:text-xl text-muted-foreground">
            <TypewriterText 
              text="Every heartbeat is a function returning your name" 
              speed={50}
              delay={6000}
            />
          </div>
        </div>

        {/* Main Proposal */}
        {showProposal && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative mb-8">
              <HeartIcon className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 text-primary romantic-glow" animated />
              <h1 className="gradient-text text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Will You Marry Me,
              </h1>
              <h1 className="gradient-text text-4xl md:text-6xl lg:text-7xl font-bold">
                Vadiya?
              </h1>
            </div>
            <p className="code-text text-lg md:text-xl font-mono mb-2">
              Will you be the final commit to my repo of life?
            </p>
            <p className="text-muted-foreground text-sm">
              // Born: February 9, 2001 - The day my future wife came into existence
            </p>
          </div>
        )}

        {/* Proposal Buttons */}
        {showButtons && (
          <div className="flex gap-6 mb-16 animate-fade-in">
            <button 
              onClick={handleYes}
              className="proposal-button yes-button text-xl px-8 py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-300"
            >
              Yes! 💍
            </button>
            <button 
              onClick={handleNo}
              className="proposal-button no-button text-xl px-8 py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-300"
            >
              No 😢
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-auto pb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <HeartIcon className="w-5 h-5 text-primary" animated />
            <span>by your forever coder</span>
          </div>
          <div className="text-sm text-muted-foreground mt-2 font-mono">
            // Committed with infinite love loops
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProposalPage;