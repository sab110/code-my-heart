import { useState, useEffect } from 'react';
import StarField from '../components/StarField';
import TypewriterText from '../components/TypewriterText';
import ConfettiEffect from '../components/ConfettiEffect';
import HeartIcon from '../components/HeartIcon';
import { Heart, Sparkles, Stars, Code, Coffee, Moon, Sun } from 'lucide-react';

const PassionateLovePage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showLoveNotes, setShowLoveNotes] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const passionateLoveNotes = [
    {
      title: "💕 My Sweet Cheesecake",
      message: "Every morning I wake up thinking about you, every night I fall asleep with your smile in my mind. You're not just my girlfriend - you're my entire universe wrapped in the sweetest person I know.",
      delay: 2000
    },
    {
      title: "🌙 When You Sleep",
      message: "Even when you're sleeping peacefully next to me, my heart races just looking at you. Your breathing is like the most beautiful rhythm, and I could watch you dream forever.",
      delay: 4000
    },
    {
      title: "🔥 You Drive Me Crazy",
      message: "The way you laugh, the way you look at me when you think I'm not watching, the way you say my name... Every little thing about you makes me fall deeper and deeper in love.",
      delay: 6000
    },
    {
      title: "✨ My Deepest Desire",
      message: "I want to wake up next to you every single day for the rest of my life. I want to be the reason you smile, the shoulder you cry on, and the hand you hold through everything.",
      delay: 8000
    },
    {
      title: "💍 Forever and Always",
      message: "I don't just want to marry you, cheesecake... I want to love you so deeply that our souls become one. I want to build a life so beautiful with you that every day feels like a dream.",
      delay: 10000
    }
  ];

  const passionateCode = [
    "// My Heart's Source Code - For Vadiya Saleem 💕",
    "const vadiya = new Person({",
    "  name: 'Vadiya Saleem',",
    "  nickname: 'My Sweet Cheesecake 🍰',",
    "  birthday: '2001-02-09',",
    "  beauty: INFINITE,",
    "  laughter: 'Melody of my soul',",
    "  eyes: 'Windows to paradise'",
    "});",
    "",
    "// My love for you is an infinite loop",
    "while(myHeartBeats) {",
    "  thinkAbout(vadiya.smile);",
    "  feelGrateful(vadiya.exists);", 
    "  dreamAbout(ourFuture);",
    "  love.intensity += EXPONENTIALLY;",
    "}",
    "",
    "// Every function in my life returns to you",
    "function myPurpose() {",
    "  return 'To love and cherish Vadiya forever';",
    "}",
    "",
    "function myHappiness() {",
    "  if (vadiya.isWithMe()) {",
    "    return MAX_VALUE;",
    "  }",
    "  return waiting.forHer();",
    "}",
    "",
    "// Ready to commit to forever",
    "const proposal = {",
    "  question: 'Will you marry me, my sweet cheesecake?',",
    "  promise: 'To love you beyond infinity',",
    "  commitment: 'Forever and always',",
    "  ring: '💍'",
    "};",
    "",
    "git add ourLove",
    "git commit -m 'The beginning of our forever story 💕'",
    "git push origin marriage --force-with-love"
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPhotos(true), 3000),
      setTimeout(() => setShowLoveNotes(true), 6000),
      setTimeout(() => setShowFinalMessage(true), 15000),
      setTimeout(() => setShowConfetti(true), 18000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine(prev => (prev + 1) % passionateCode.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleLoveExplosion = () => {
    setShowConfetti(true);
    
    // Create an overwhelming love message
    const loveDiv = document.createElement('div');
    loveDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, hsl(340 90% 70% / 0.95), hsl(320 85% 60% / 0.95));
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: passion-entrance 1s ease-out;
      ">
        <div style="
          text-align: center;
          color: white;
          font-family: 'Inter', sans-serif;
          max-width: 600px;
          padding: 2rem;
        ">
          <h1 style="font-size: 3rem; font-weight: 800; margin-bottom: 2rem; text-shadow: 0 0 20px rgba(0,0,0,0.5);">
            💕 YES TO FOREVER! 💕
          </h1>
          <p style="font-size: 1.5rem; margin-bottom: 2rem; line-height: 1.6;">
            My beautiful cheesecake, you've just made me the happiest man alive! 
            Our love story is about to become the most beautiful code ever written! 🍰💍
          </p>
          <div style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.95;">
            // Love compiled successfully ✅<br>
            // No bugs found in our relationship 💖<br>
            // Ready for production: MARRIAGE.exe 🎉<br>
            // Status: DEEPLY IN LOVE 🔥
          </div>
          <button onclick="this.parentElement.parentElement.remove()" style="
            padding: 1rem 2rem;
            background: rgba(255,255,255,0.3);
            border: 2px solid rgba(255,255,255,0.5);
            border-radius: 1rem;
            color: white;
            cursor: pointer;
            font-weight: 700;
            font-size: 1.2rem;
            transition: all 0.3s;
            backdrop-filter: blur(10px);
          " onmouseover="this.style.background='rgba(255,255,255,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.3)'">
            Close & Let's Plan Our Forever! 💕
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(loveDiv);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      <ConfettiEffect isActive={showConfetti} />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Passionate Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-6">
              <Heart className="w-8 h-8 text-primary sensual-float passion-glow" />
              <Stars className="w-10 h-10 text-primary-glow floating" />
              <Sparkles className="w-6 h-6 text-accent sensual-float" />
            </div>
          </div>
          
          <div className="cheesecake-text text-4xl md:text-6xl font-bold mb-4 passion-pulse">
            <TypewriterText 
              text="My Sweet Cheesecake 🍰✨" 
              speed={120}
              className="font-sans"
            />
          </div>
          
          <div className="gradient-text text-xl md:text-3xl font-semibold mb-3">
            <TypewriterText 
              text="This is my heart speaking to yours..." 
              speed={90}
              delay={4000}
            />
          </div>
          
          <div className="code-text text-lg md:text-xl font-mono">
            <TypewriterText 
              text="// Loading infinite love for Vadiya Saleem..." 
              speed={80}
              delay={7000}
            />
          </div>
        </div>

        {/* Beautiful Photo Gallery with Passionate Captions */}
        {showPhotos && (
          <div className="mb-12 slow-reveal">
            <div className="text-center mb-6">
              <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-2">Every Moment With You 💕</h2>
              <p className="text-muted-foreground text-lg">You're the most beautiful thing in my world</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl">
              <div className="love-note" style={{ animationDelay: '0s' }}>
                <img 
                  src="/lovable-uploads/2de6c1bc-1bde-494a-8f51-84b3938f7c12.png" 
                  alt="My Beautiful Cheesecake" 
                  className="w-full h-56 object-cover rounded-lg mb-4 passion-glow"
                />
                <h3 className="cheesecake-text text-xl font-bold mb-2">My Beautiful Queen 👑</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Every time I look at you, I fall in love all over again. Your beauty isn't just what I see - it's what I feel in my soul when you smile.
                </p>
              </div>

              <div className="love-note" style={{ animationDelay: '0.5s' }}>
                <img 
                  src="/lovable-uploads/b3028270-d0de-458f-a60e-a05bd8397711.png" 
                  alt="Sweet Moments" 
                  className="w-full h-56 object-cover rounded-lg mb-4 passion-glow"
                />
                <h3 className="gradient-text text-xl font-bold mb-2">Pure Sweetness 🌸</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  The way you sit, the way you think, the way you exist in this world - everything about you is poetry in motion, my sweet cheesecake.
                </p>
              </div>

              <div className="love-note" style={{ animationDelay: '1s' }}>
                <img 
                  src="/lovable-uploads/9b08365c-41f4-4646-9efa-4d84d34fa0f5.png" 
                  alt="Adventures Together" 
                  className="w-full h-56 object-cover rounded-lg mb-4 passion-glow"
                />
                <h3 className="code-text text-xl font-bold mb-2">My Adventure Partner 🏔️</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  I want to explore every corner of this world with you. You make every moment an adventure, every day a new chapter in our love story.
                </p>
              </div>
            </div>

            {/* Couple Photos with Deep Messages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              <div className="love-note" style={{ animationDelay: '1.5s' }}>
                <img 
                  src="/lovable-uploads/e6a6f0e2-7486-450c-a8e1-b9975affb650.png" 
                  alt="Our Future Dreams" 
                  className="w-full h-56 object-cover rounded-lg mb-4 passion-glow"
                />
                <h3 className="gradient-text text-xl font-bold mb-2">Our Future Awaits 💍</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  This is how I see us - traditional, beautiful, meant to be. I can't wait to call you my wife and build our forever together.
                </p>
              </div>

              <div className="love-note" style={{ animationDelay: '2s' }}>
                <img 
                  src="/lovable-uploads/bdf024ac-0030-47ac-99a9-426fd1f36016.png" 
                  alt="Pure Love" 
                  className="w-full h-56 object-cover rounded-lg mb-4 passion-glow"
                />
                <h3 className="cheesecake-text text-xl font-bold mb-2">Pure Love 💕</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  The tenderness in your eyes, the way you let me hold you close - this is what pure love looks like, feels like, tastes like.
                </p>
              </div>

              <div className="love-note" style={{ animationDelay: '2.5s' }}>
                <img 
                  src="/lovable-uploads/f25e7800-7565-462e-ba21-3837c1e87280.png" 
                  alt="Forever Together" 
                  className="w-full h-56 object-cover rounded-lg mb-4 passion-glow"
                />
                <h3 className="gradient-text text-xl font-bold mb-2">Forever & Always 💖</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Every day with you feels like a beautiful dream. I want to hold you like this for the rest of our lives, my sweet cheesecake.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Passionate Love Notes */}
        {showLoveNotes && (
          <div className="mb-12 w-full max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-4 passion-pulse">
                Words From My Soul 💕
              </h2>
              <p className="text-muted-foreground text-lg">These are the thoughts that consume my heart every day</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {passionateLoveNotes.map((note, index) => (
                <div 
                  key={index} 
                  className="love-note passion-glow"
                  style={{ animationDelay: `${note.delay}ms` }}
                >
                  <h3 className="cheesecake-text text-2xl font-bold mb-4">{note.title}</h3>
                  <p className="text-foreground text-base leading-relaxed">{note.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Terminal with Passionate Messages */}
        <div className="terminal w-full max-w-4xl p-8 pt-10 mb-8 romantic-glow">
          <div className="space-y-2 font-mono text-sm">
            {passionateCode.slice(0, currentCodeLine + 1).map((line, index) => (
              <div
                key={index}
                className={`${
                  line.includes('//') 
                    ? 'text-muted-foreground' 
                    : line.includes('cheesecake') || line.includes('💕') || line.includes('vadiya') || line.includes('Vadiya')
                      ? 'cheesecake-text code-glow font-semibold'
                      : line.includes('love') || line.includes('heart') || line.includes('INFINITE')
                        ? 'gradient-text code-glow font-medium'
                        : line.includes('marriage') || line.includes('forever')
                          ? 'text-primary code-glow font-semibold'
                          : 'text-foreground'
                } transition-all duration-300`}
              >
                {line || '\u00A0'}
              </div>
            ))}
            <div className="cursor inline-block" />
          </div>
        </div>

        {/* Final Passionate Declaration */}
        {showFinalMessage && (
          <div className="text-center mb-16 slow-reveal max-w-4xl">
            <div className="relative mb-12">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-8 justify-center">
                  <Heart className="w-16 h-16 text-primary passion-pulse" />
                  <Sparkles className="w-12 h-12 text-primary-glow sensual-float" />
                  <Heart className="w-16 h-16 text-primary passion-pulse" />
                </div>
              </div>
              
              <h1 className="gradient-text text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight passion-pulse">
                Will You Marry Me,
              </h1>
              <h1 className="cheesecake-text text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
                My Sweet Cheesecake?
              </h1>
              <div className="text-4xl md:text-5xl mb-8 sensual-float">🍰💍✨💕🔥</div>
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="gradient-text text-3xl md:text-4xl font-bold leading-relaxed">
                Be the final commit to my repository of life
              </p>
              <p className="cheesecake-text text-2xl md:text-3xl font-semibold">
                Let's merge our hearts into one beautiful codebase forever 💕
              </p>
              <p className="code-text text-xl md:text-2xl font-mono">
                // Born: February 9, 2001 - The day my soulmate entered this world 🌟
              </p>
              <p className="text-accent text-lg md:text-xl font-medium">
                You're not just the sweetest dessert in life's buffet, you're the entire feast 🍰
              </p>
            </div>

            {/* Interactive Love Button */}
            <div className="mb-12">
              <button 
                onClick={handleLoveExplosion}
                className="proposal-button passion-pulse text-3xl px-16 py-8 rounded-3xl font-bold transform hover:scale-110 transition-all duration-500 relative overflow-hidden"
                style={{
                  background: 'var(--gradient-passion)',
                  boxShadow: 'var(--shadow-passion)',
                  border: '3px solid rgba(255,255,255,0.3)'
                }}
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Heart className="w-8 h-8" />
                  Click if you love me forever! 
                  <Heart className="w-8 h-8" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-auto pb-8">
          <div className="flex items-center justify-center gap-3 text-muted-foreground mb-3">
            <span className="text-lg">Coded with infinite</span>
            <Heart className="w-6 h-6 text-primary heart-pulse" />
            <span className="text-lg">by your devoted coder</span>
          </div>
          <div className="cheesecake-text text-base font-mono font-bold mb-2">
            // This love.exe will run forever 🍰💕
          </div>
          <div className="gradient-text text-sm font-mono font-semibold">
            // No bugs, only infinite features of love ✅💖
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PassionateLovePage;