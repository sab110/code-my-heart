import { useState, useEffect } from 'react';
import StarField from '../components/StarField';
import TypewriterText from '../components/TypewriterText';
import ConfettiEffect from '../components/ConfettiEffect';
import HeartIcon from '../components/HeartIcon';
import { Heart, Sparkles } from 'lucide-react';

const ProposalPage = () => {
  const [showProposal, setShowProposal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [showPhotos, setShowPhotos] = useState(false);

  const romanticMessages = [
    "My sweet cheesecake 🍰",
    "You're the sweetest part of my life",
    "Every day with you is like having dessert first",
    "You make my heart as warm as fresh cheesecake from the oven"
  ];

  const codeLines = [
    "// Love Algorithm for my Cheesecake 💕",
    "const vadiya = new Person('Vadiya Saleem', '2001-02-09');",
    "const cheesecake = vadiya; // My sweet nickname for you",
    "const me = new SoftwareDeveloper();",
    "",
    "// Every function returns to you, my love",
    "function myHeartbeat() {",
    "  while(true) {",
    "    console.log('💕 Thinking about my cheesecake...');",
    "    return vadiya.smile();",
    "  }",
    "}",
    "",
    "// You are my only running process",
    "const loveProcess = () => {",
    "  if (vadiya.isNear()) {",
    "    happiness.level = MAXIMUM;",
    "    heart.status = 'FULL';",
    "  }",
    "  return true; // Always true with you",
    "};",
    "",
    "// Ready for the final commit of our love story",
    "git add vadiya && git add me",
    "git commit -m 'Forever together as one 💍'",
    "git push origin marriage",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhotos(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowProposal(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (showProposal) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showProposal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine(prev => (prev + 1) % codeLines.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleYes = () => {
    setShowConfetti(true);
    
    // Create romantic celebration alert
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, hsl(340, 90%, 70%), hsl(320, 80%, 60%));
        color: white;
        padding: 3rem 4rem;
        border-radius: 2rem;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        z-index: 1000;
        animation: scale-in 0.5s ease-out;
        border: 3px solid rgba(255,255,255,0.3);
      ">
        🍰💍 YES MY SWEET CHEESECAKE! 💍🍰<br>
        <span style="font-size: 1.2rem; opacity: 0.95; margin-top: 1rem; display: block;">
          You've made me the happiest coder in the universe!<br>
          Our love story will be the most beautiful code ever written! 💕
        </span>
        <div style="margin-top: 1.5rem; font-size: 1rem; opacity: 0.9;">
          // Love compiled successfully ✅<br>
          // No bugs found in our relationship 💖<br>
          // Ready for production: MARRIAGE.exe 🎉
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          margin-top: 2rem;
          padding: 1rem 2rem;
          background: rgba(255,255,255,0.25);
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 1rem;
          color: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
        " onmouseover="this.style.background='rgba(255,255,255,0.35)'" onmouseout="this.style.background='rgba(255,255,255,0.25)'">
          Close & Start Planning Our Forever! 💕
        </button>
      </div>
    `;
    document.body.appendChild(alertDiv);
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Romantic Header */}
        <div className="text-center mb-6 relative">
          <Sparkles className="absolute -top-6 -left-8 w-6 h-6 text-primary-glow floating animate-pulse" />
          <Heart className="absolute -top-4 -right-8 w-8 h-8 text-primary floating heart-pulse" />
          
          <div className="cheesecake-text text-3xl md:text-5xl font-bold mb-3">
            <TypewriterText 
              text="For My Sweet Cheesecake 🍰" 
              speed={100}
              className="font-sans"
            />
          </div>
          <div className="gradient-text text-lg md:text-2xl font-medium">
            <TypewriterText 
              text="// Love Algorithm Loading..." 
              speed={80}
              delay={3000}
              className="font-mono"
            />
          </div>
        </div>

        {/* Beautiful Photo Gallery */}
        {showPhotos && (
          <div className="mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-4xl">
              {/* First photo - Vadiya portrait */}
              <div className="photo-frame love-glow" style={{ animation: 'photo-entrance 1s ease-out' }}>
                <img 
                  src="/lovable-uploads/2de6c1bc-1bde-494a-8f51-84b3938f7c12.png" 
                  alt="My Beautiful Cheesecake" 
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium">My beautiful cheesecake 💕</p>
                  </div>
                </div>
              </div>

              {/* Second photo - Vadiya casual */}
              <div className="photo-frame love-glow" style={{ animation: 'photo-entrance 1s ease-out 0.3s both' }}>
                <img 
                  src="/lovable-uploads/b3028270-d0de-458f-a60e-a05bd8397711.png" 
                  alt="Sweet Moments" 
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium">Every moment with you 🌟</p>
                  </div>
                </div>
              </div>

              {/* Third photo - Vadiya outdoor */}
              <div className="photo-frame love-glow" style={{ animation: 'photo-entrance 1s ease-out 0.6s both' }}>
                <img 
                  src="/lovable-uploads/9b08365c-41f4-4646-9efa-4d84d34fa0f5.png" 
                  alt="Adventures Together" 
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium">Our adventures together 🏔️</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Couple Photos Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
              <div className="photo-frame love-glow" style={{ animation: 'photo-entrance 1s ease-out 0.9s both' }}>
                <img 
                  src="/lovable-uploads/e6a6f0e2-7486-450c-a8e1-b9975affb650.png" 
                  alt="Our Wedding Dreams" 
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium">Our future together 💍</p>
                  </div>
                </div>
              </div>

              <div className="photo-frame love-glow" style={{ animation: 'photo-entrance 1s ease-out 1.2s both' }}>
                <img 
                  src="/lovable-uploads/bdf024ac-0030-47ac-99a9-426fd1f36016.png" 
                  alt="Pure Love" 
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium">Pure love 💕</p>
                  </div>
                </div>
              </div>

              <div className="photo-frame love-glow" style={{ animation: 'photo-entrance 1s ease-out 1.5s both' }}>
                <img 
                  src="/lovable-uploads/f25e7800-7565-462e-ba21-3837c1e87280.png" 
                  alt="Forever Together" 
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black bg-opacity-50 rounded-lg p-2 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium">Forever and always 💖</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Terminal with Sweet Messages */}
        <div className="terminal w-full max-w-3xl p-6 pt-8 mb-6 relative romantic-glow">
          <div className="space-y-2 font-mono text-sm">
            {codeLines.slice(0, currentCodeLine + 1).map((line, index) => (
              <div
                key={index}
                className={`${
                  line.includes('//') 
                    ? 'text-muted-foreground' 
                    : line.includes('cheesecake') || line.includes('💕') || line.includes('vadiya')
                      ? 'cheesecake-text code-glow font-semibold'
                      : line.includes('love') || line.includes('heart')
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
        <div className="text-center mb-8 space-y-4 max-w-3xl">
          <div className="cheesecake-text text-2xl md:text-3xl font-bold">
            <TypewriterText 
              text="My sweet cheesecake, you are my only running process 🍰💻" 
              speed={50}
              delay={5000}
            />
          </div>
          <div className="gradient-text text-lg md:text-xl font-medium">
            <TypewriterText 
              text="Every heartbeat is a function that returns your beautiful smile" 
              speed={45}
              delay={8000}
            />
          </div>
          <div className="text-accent text-base md:text-lg">
            <TypewriterText 
              text="You make my heart as warm as fresh cheesecake from the oven 🔥💕" 
              speed={40}
              delay={11000}
            />
          </div>
        </div>

        {/* Main Proposal */}
        {showProposal && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative mb-8">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-4">
                  <Heart className="w-12 h-12 text-primary romantic-glow heart-pulse" />
                  <Sparkles className="w-10 h-10 text-primary-glow floating" />
                  <Heart className="w-12 h-12 text-primary romantic-glow heart-pulse" />
                </div>
              </div>
              
              <h1 className="gradient-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                Will You Marry Me,
              </h1>
              <h1 className="cheesecake-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                My Sweet Cheesecake?
              </h1>
              <div className="text-2xl md:text-3xl mb-4">🍰💍✨</div>
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="code-text text-xl md:text-2xl font-mono mb-4">
                Will you be the final commit to my repo of life?
              </p>
              <p className="gradient-text text-lg md:text-xl font-semibold">
                Let's merge our hearts into one beautiful codebase 💕
              </p>
              <p className="text-muted-foreground text-base font-mono">
                // Born: February 9, 2001 - The day my future wife came into existence 🌟
              </p>
              <p className="cheesecake-text text-lg font-semibold">
                // You're the sweetest dessert in the buffet of life 🍰
              </p>
            </div>
          </div>
        )}

        {/* Proposal Buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in">
            <button 
              onClick={handleYes}
              className="proposal-button yes-button text-2xl px-12 py-6 rounded-2xl font-bold transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Yes, Forever! 💍🍰</span>
            </button>
            <button 
              onClick={handleNo}
              className="proposal-button no-button text-xl px-8 py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-300"
            >
              Not Yet 😢
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-auto pb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <span>Made with infinite</span>
            <Heart className="w-5 h-5 text-primary heart-pulse" />
            <span>by your forever coder</span>
          </div>
          <div className="cheesecake-text text-sm font-mono font-semibold">
            // Sweetest love.exe compiled with care 🍰💕
          </div>
          <div className="text-xs text-muted-foreground mt-1 font-mono">
            // No bugs found in our love story ✅
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProposalPage;