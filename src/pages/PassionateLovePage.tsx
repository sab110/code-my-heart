import { useState, useEffect } from 'react';
import StarField from '../components/StarField';
import TypewriterText from '../components/TypewriterText';
import ConfettiEffect from '../components/ConfettiEffect';
import HeartIcon from '../components/HeartIcon';
import { Heart, Sparkles, Stars, Code, Coffee, Moon, Sun, Zap, Flame, Eye } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PassionateLovePage = () => {
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState(0);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showLoveNotes, setShowLoveNotes] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [showFutureDreams, setShowFutureDreams] = useState(false);
  const [clickedHearts, setClickedHearts] = useState(0);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  const seductiveToasts = [
    { title: "🔥 Heart Racing!", message: "Your touch makes my soul burn with desire, my sweet cheesecake! 💕" },
    { title: "✨ Breathless!", message: "Every glance from you steals my breath and ignites my passion! 🌙" },
    { title: "💋 Intoxicated!", message: "I'm drunk on your love, addicted to your kiss, lost in your eyes! 🍰" },
    { title: "🌹 Obsessed!", message: "You're my beautiful obsession, my sweetest addiction! 💖" },
    { title: "🔥 Consumed!", message: "Your love consumes every fiber of my being, my gorgeous queen! 👑" },
    { title: "💕 Enchanted!", message: "You've cast a spell on my heart that I never want broken! ✨" },
    { title: "🌙 Dreaming!", message: "Every dream I have is filled with your beautiful face! 💫" },
    { title: "💍 Forever!", message: "I want to worship you for all eternity, my sweet cheesecake! 🍰" }
  ];

  const showSeductiveToast = () => {
    const randomToast = seductiveToasts[Math.floor(Math.random() * seductiveToasts.length)];
    toast({
      title: randomToast.title,
      description: randomToast.message,
      duration: 4000,
      className: "bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-foreground"
    });
  };

  const passionateLoveNotes = [
    {
      title: "💕 My Sweet Cheesecake",
      message: "Every morning I wake up thinking about you, every night I fall asleep with your smile in my mind. You're not just my girlfriend - you're my entire universe wrapped in the sweetest person I know. The way you move, the way you breathe, everything about you is intoxicating.",
      delay: 2000
    },
    {
      title: "🌙 When You Sleep",
      message: "Even when you're sleeping peacefully next to me, my heart races just looking at you. Your breathing is like the most beautiful rhythm, and I could watch you dream forever. I love how you curl up against me, how safe you feel in my arms.",
      delay: 4000
    },
    {
      title: "🔥 You Drive Me Crazy",
      message: "The way you laugh, the way you look at me when you think I'm not watching, the way you say my name... Every little thing about you makes me fall deeper and deeper in love. Your touch sends electricity through my soul, your kiss is my favorite addiction.",
      delay: 6000
    },
    {
      title: "✨ My Deepest Desire",
      message: "I want to wake up next to you every single day for the rest of my life. I want to be the reason you smile, the shoulder you cry on, and the hand you hold through everything. I want to love you so passionately that time stops when we're together.",
      delay: 8000
    },
    {
      title: "💍 Forever and Always",
      message: "I don't just want to marry you, cheesecake... I want to love you so deeply that our souls become one. I want to build a life so beautiful with you that every day feels like a dream. You're my addiction, my obsession, my everything.",
      delay: 10000
    },
    {
      title: "🍰 My Sweet Addiction",
      message: "You taste sweeter than any dessert, my beautiful cheesecake. Every kiss from you is like tasting heaven. I'm completely addicted to your love, your touch, your everything. You're the sweetest temptation I never want to resist.",
      delay: 12000
    },
    {
      title: "🔥 Burning Passion",
      message: "The fire you ignite in my heart burns hotter than a thousand suns. When you look at me with those gorgeous eyes, I melt completely. You're my flame, my passion, my burning desire that never dies.",
      delay: 14000
    },
    {
      title: "💖 Heartbeat Symphony",
      message: "My heart beats only for you, creating a symphony of love that echoes through my entire being. Every pulse whispers your name, every breath is a prayer of gratitude for having you in my life, my sweet cheesecake.",
      delay: 16000
    }
  ];

  const passionateCode = [
    "// My Heart's Source Code - For Vadiya Saleem 💕",
    "// WARNING: Contains extremely high levels of love",
    "const vadiya = new Person({",
    "  name: 'Vadiya Saleem',",
    "  nickname: 'My Sweet Cheesecake 🍰',",
    "  birthday: '2001-02-09',",
    "  beauty: INFINITE,",
    "  sweetness: 'Sweeter than all desserts combined',",
    "  laughter: 'Melody that heals my soul',",
    "  eyes: 'Windows to paradise',",
    "  touch: 'Electric fire that ignites my being',",
    "  kiss: 'Taste of heaven on earth',",
    "  presence: 'My favorite addiction'",
    "});",
    "",
    "// My love for you is an infinite loop",
    "while(myHeartBeats) {",
    "  thinkAbout(vadiya.smile);",
    "  crave(vadiya.touch);",
    "  remember(vadiya.laugh);",
    "  feelGrateful(vadiya.exists);", 
    "  dreamAbout(ourFuture);",
    "  love.intensity += EXPONENTIALLY;",
    "  passion.burn(HOTTER);",
    "}",
    "",
    "// Every function in my life returns to you",
    "function myPurpose() {",
    "  return 'To love, protect and worship Vadiya forever';",
    "}",
    "",
    "function myDesire() {",
    "  return 'Wake up next to my cheesecake every day';",
    "}",
    "",
    "function myHappiness() {",
    "  if (vadiya.isWithMe()) {",
    "    return MAX_VALUE;",
    "  }",
    "  return waiting.forHer() && missing.herKiss();",
    "}",
    "",
    "function myObsession() {",
    "  return [",
    "    'Her morning voice',",
    "    'The way she says my name',", 
    "    'How she curls up in my arms',",
    "    'Her sleepy smile',",
    "    'Every little thing about her'",
    "  ];",
    "}",
    "",
    "// Ready to commit to forever",
    "const proposal = {",
    "  question: 'Will you marry me, my sweet cheesecake?',",
    "  promise: 'To love you beyond infinity and time',",
    "  commitment: 'Forever and always, through everything',",
    "  ring: '💍',",
    "  vows: 'You are my heart, my soul, my everything'",
    "};",
    "",
    "// Creating our love repository",
    "git init ourLoveStory",
    "git add vadiya.heart",
    "git add myDevotion.eternal", 
    "git add ourDreams.together",
    "git commit -m 'The beginning of our forever story 💕'",
    "git branch marriage",
    "git checkout marriage", 
    "git merge hearts --allow-unrelated-histories",
    "git push origin marriage --force-with-love",
    "// Repository status: DEEPLY_IN_LOVE ✅"
  ];

  const ourMemories = [
    {
      title: "🏢 First JBS Interaction",
      memory: "I was so nervous around you that I called you just to fake a conversation, desperate for any excuse to be near you and breathe in your intoxicating scent. Sitting alone in that room, my heart racing, knowing you were close.",
      emoji: "💼"
    },
    {
      title: "💼 First LinkedIn Message",
      memory: "That nervous professional message I sent you that turned into the most beautiful conversation of my life. Who knew LinkedIn could lead to love?",
      emoji: "💻"
    },
    {
      title: "🍝 First Date at Bella Vita",
      memory: "Your pasta scent mixed with your perfume created the most intoxicating aroma. I knew right then I wanted to share every meal with you forever.",
      emoji: "🍝"
    },
    {
      title: "🎵 Our YouTube Playlist",
      memory: "Every time I'm stressed, I put on our playlist and your voice singing along echoes in my mind, instantly calming my soul and filling me with love.",
      emoji: "🎶"
    },
    {
      title: "🌙 Our Late Night Intimacy",
      memory: "Those passionate late-night conversations where we shared our deepest desires and dreams. Your words ignite fires in my heart that burn eternal.",
      emoji: "💕"
    }
  ];

  const futureDreams = [
    {
      title: "🏡 Our Dream Home",
      dream: "A cozy house with a big kitchen where you can bake all the cheesecakes you want, and a garden where we'll grow old together.",
      icon: "🏠"
    },
    {
      title: "🐕 Our Fur Babies",
      dream: "Two dogs who will love you almost as much as I do (but not quite), and maybe a cat who thinks they own the place.",
      icon: "🐾"
    },
    {
      title: "✈️ Adventures Await",
      dream: "Paris sunsets, Tokyo cherry blossoms, Italian pasta tours... I want to collect memories with you in every corner of the world.",
      icon: "🌍"
    },
    {
      title: "👶 Little Cheesecakes",
      dream: "Someday, little versions of us running around, with your beautiful smile and hopefully my coding skills to fix their toys.",
      icon: "💕"
    }
  ];

  const handleHeartClick = () => {
    setClickedHearts(prev => prev + 1);
    if (clickedHearts >= 4) {
      setShowSecretMessage(true);
    }
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPhotos(true), 3000),
      setTimeout(() => setShowMemories(true), 9000),
      setTimeout(() => setShowLoveNotes(true), 12000),
      setTimeout(() => setShowFutureDreams(true), 18000),
      setTimeout(() => setShowFinalMessage(true), 24000),
      setTimeout(() => setShowConfetti(true), 27000),
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
        
        {/* Passionate Header - Fixed spacing */}
        <div className="text-center mb-8 relative pt-20">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-8 justify-center relative">
              <Heart className="w-12 h-12 text-primary intoxicating-glow" />
              <Stars className="w-16 h-16 text-primary-glow desire-pulse" />
              <Sparkles className="w-10 h-10 text-accent love-intoxication" />
              <Heart className="w-12 h-12 text-primary intoxicating-glow" style={{ animationDelay: '1s' }} />
              
              {/* Orbiting Love Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent hypnotic-orbit" style={{ animationDelay: '0s' }} />
                <Flame className="w-5 h-5 text-primary hypnotic-orbit" style={{ animationDelay: '2s' }} />
                <Eye className="w-4 h-4 text-primary-glow hypnotic-orbit" style={{ animationDelay: '4s' }} />
              </div>
            </div>
          </div>
          
          <div className="cheesecake-text text-4xl md:text-6xl font-bold mb-4 seductive-glow">
            <TypewriterText 
              text="My Sweet Cheesecake 🍰✨" 
              speed={120}
              className="font-sans"
            />
          </div>
          
          <div className="gradient-text text-xl md:text-3xl font-semibold mb-3 romantic-breathe">
            <TypewriterText 
              text="This is my heart speaking to yours..." 
              speed={90}
              delay={4000}
            />
          </div>
          
          <div className="code-text text-lg md:text-xl font-mono love-whisper">
            <TypewriterText 
              text="// Loading infinite love for Vadiya Saleem..." 
              speed={80}
              delay={7000}
            />
          </div>

          {/* Floating Love Elements */}
          <div className="absolute -bottom-8 left-0 right-0">
            <div className="flex justify-center gap-12">
              <Coffee className="w-6 h-6 text-accent magnetic-pull" style={{ animationDelay: '0.5s' }} />
              <Code className="w-8 h-8 text-primary-glow hypnotic-sway" style={{ animationDelay: '1s' }} />
              <Moon className="w-7 h-7 text-muted-foreground dreamy-drift" style={{ animationDelay: '1.5s' }} />
            </div>
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
              <div 
                className="love-note intimate-pulse group cursor-pointer" 
                style={{ animationDelay: '0s' }}
                onClick={showSeductiveToast}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 rounded-lg"></div>
                </div>
                <img 
                  src="/lovable-uploads/2de6c1bc-1bde-494a-8f51-84b3938f7c12.png" 
                  alt="My Beautiful Cheesecake" 
                  className="w-full h-56 object-cover rounded-lg mb-4 seductive-glow group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="cheesecake-text text-xl font-bold mb-2 relative z-10">My Beautiful Queen 👑</h3>
                <p className="text-foreground text-sm leading-relaxed relative z-10 group-hover:text-primary-glow transition-colors duration-500">
                  Every time I look at you, I fall in love all over again. Your beauty isn't just what I see - it's what I feel in my soul when you smile.
                </p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <Heart className="w-6 h-6 text-primary romantic-breathe" />
                </div>
              </div>

              <div 
                className="love-note magnetic-pull group cursor-pointer" 
                style={{ animationDelay: '0.5s' }}
                onClick={showSeductiveToast}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-25 transition-opacity duration-700">
                  <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-primary/30 rounded-lg"></div>
                </div>
                <img 
                  src="/lovable-uploads/b3028270-d0de-458f-a60e-a05bd8397711.png" 
                  alt="Sweet Moments" 
                  className="w-full h-56 object-cover rounded-lg mb-4 romantic-breathe group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="gradient-text text-xl font-bold mb-2 relative z-10">Pure Sweetness 🌸</h3>
                <p className="text-foreground text-sm leading-relaxed relative z-10 group-hover:text-accent transition-colors duration-500">
                  The way you sit, the way you think, the way you exist in this world - everything about you is poetry in motion, my sweet cheesecake.
                </p>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                  <Sparkles className="w-6 h-6 text-accent dreamy-drift" />
                </div>
              </div>

              <div 
                className="love-note hypnotic-sway group cursor-pointer" 
                style={{ animationDelay: '1s' }}
                onClick={showSeductiveToast}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                  <div className="w-full h-full bg-gradient-to-bl from-primary/25 to-primary-glow/20 rounded-lg"></div>
                </div>
                <img 
                  src="/lovable-uploads/9b08365c-41f4-4646-9efa-4d84d34fa0f5.png" 
                  alt="Adventures Together" 
                  className="w-full h-56 object-cover rounded-lg mb-4 love-whisper group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="code-text text-xl font-bold mb-2 relative z-10">My Adventure Partner 🏔️</h3>
                <p className="text-foreground text-sm leading-relaxed relative z-10 group-hover:text-primary-glow transition-colors duration-500">
                  I want to explore every corner of this world with you. You make every moment an adventure, every day a new chapter in our love story.
                </p>
                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                  <Heart className="w-6 h-6 text-primary intimate-pulse" />
                </div>
              </div>
            </div>

            {/* Couple Photos with Deep Messages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              <div 
                className="love-note seductive-glow group cursor-pointer" 
                style={{ animationDelay: '1.5s' }}
                onClick={showSeductiveToast}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-35 transition-opacity duration-700">
                  <div className="w-full h-full bg-gradient-to-t from-primary/30 to-accent/25 rounded-lg"></div>
                </div>
                <img 
                  src="/lovable-uploads/e6a6f0e2-7486-450c-a8e1-b9975affb650.png" 
                  alt="Our Future Dreams" 
                  className="w-full h-56 object-cover rounded-lg mb-4 intimate-pulse group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="gradient-text text-xl font-bold mb-2 relative z-10">Our Future Awaits 💍</h3>
                <p className="text-foreground text-sm leading-relaxed relative z-10 group-hover:text-primary transition-colors duration-500">
                  This is how I see us - traditional, beautiful, meant to be. I can't wait to call you my wife and build our forever together.
                </p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <Stars className="w-6 h-6 text-accent sensual-float" />
                </div>
              </div>

              <div 
                className="love-note romantic-breathe group cursor-pointer" 
                style={{ animationDelay: '2s' }}
                onClick={showSeductiveToast}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-accent/35 to-primary/25 rounded-lg"></div>
                </div>
                <img 
                  src="/lovable-uploads/bdf024ac-0030-47ac-99a9-426fd1f36016.png" 
                  alt="Pure Love" 
                  className="w-full h-56 object-cover rounded-lg mb-4 magnetic-pull group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="cheesecake-text text-xl font-bold mb-2 relative z-10">Pure Love 💕</h3>
                <p className="text-foreground text-sm leading-relaxed relative z-10 group-hover:text-primary-glow transition-colors duration-500">
                  The tenderness in your eyes, the way you let me hold you close - this is what pure love looks like, feels like, tastes like.
                </p>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                  <Heart className="w-8 h-8 text-primary passion-pulse" />
                </div>
              </div>

              <div 
                className="love-note dreamy-drift group cursor-pointer" 
                style={{ animationDelay: '2.5s' }}
                onClick={showSeductiveToast}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-45 transition-opacity duration-700">
                  <div className="w-full h-full bg-gradient-to-tl from-primary/40 to-primary-glow/30 rounded-lg"></div>
                </div>
                <img 
                  src="/lovable-uploads/f25e7800-7565-462e-ba21-3837c1e87280.png" 
                  alt="Forever Together" 
                  className="w-full h-56 object-cover rounded-lg mb-4 hypnotic-sway group-hover:scale-105 transition-transform duration-700"
                />
                <h3 className="gradient-text text-xl font-bold mb-2 relative z-10">Forever & Always 💖</h3>
                <p className="text-foreground text-sm leading-relaxed relative z-10 group-hover:text-accent transition-colors duration-500">
                  Every day with you feels like a beautiful dream. I want to hold you like this for the rest of our lives, my sweet cheesecake.
                </p>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-55 transition-opacity duration-500">
                  <Moon className="w-6 h-6 text-muted-foreground floating" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sweet Memories Section */}
        {showMemories && (
          <div className="mb-12 w-full max-w-5xl slow-reveal">
            <div className="text-center mb-8">
              <h2 className="cheesecake-text text-4xl md:text-5xl font-bold mb-4 seductive-glow">
                Our Sweet Memories 🌟
              </h2>
              <p className="text-muted-foreground text-lg">Every moment with you is a treasure I keep in my heart</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ourMemories.map((memory, index) => (
                <div 
                  key={index} 
                  className="love-note romantic-breathe group cursor-pointer"
                  style={{ animationDelay: `${index * 500}ms` }}
                  onClick={handleHeartClick}
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-500 intoxicating-glow">
                      {memory.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="gradient-text text-2xl font-bold mb-3">{memory.title}</h3>
                      <p className="text-foreground text-base leading-relaxed group-hover:text-primary-glow transition-colors duration-500">
                        {memory.memory}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                    <Heart className="w-6 h-6 text-primary romantic-breathe" />
                  </div>
                </div>
              ))}
            </div>
            
            {showSecretMessage && (
              <div className="mt-8 text-center love-intoxication">
                <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 border border-primary/30">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3 heart-pulse" />
                  <p className="cheesecake-text text-xl font-bold">
                    You found my secret! 💕 You clicked {clickedHearts + 1} hearts just like how you've captured my heart completely! 
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Future Dreams Section */}
        {showFutureDreams && (
          <div className="mb-12 w-full max-w-5xl slow-reveal">
            <div className="text-center mb-8">
              <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-4 desire-pulse">
                Our Future Together 🌈
              </h2>
              <p className="text-muted-foreground text-lg">All the beautiful tomorrows I dream of with you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {futureDreams.map((dream, index) => (
                <div 
                  key={index} 
                  className="love-note hypnotic-sway group cursor-pointer"
                  style={{ animationDelay: `${index * 600}ms` }}
                  onClick={showSeductiveToast}
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-700 seductive-bounce">
                      {dream.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="cheesecake-text text-2xl font-bold mb-3">{dream.title}</h3>
                      <p className="text-foreground text-base leading-relaxed group-hover:text-accent transition-colors duration-500">
                        {dream.dream}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                    <Stars className="w-6 h-6 text-accent dreamy-drift" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating Love Poem */}
        <div className="fixed top-4 right-4 z-30 max-w-xs">
          <div className="love-note hypnotic-sway p-4 cursor-pointer group" onClick={handleHeartClick}>
            <div className="text-center">
              <Heart className="w-6 h-6 text-primary mx-auto mb-2 romantic-breathe" />
              <p className="cheesecake-text text-sm font-medium leading-relaxed">
                "In every line of code I write,<br/>
                Your name appears in soft moonlight.<br/>
                You're my syntax, my perfect flow,<br/>
                The only love I'll ever know." 💕
              </p>
              <div className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Click me! ✨
              </div>
            </div>
          </div>
        </div>

        {/* Floating Navigation Hearts */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
          <div className="love-note p-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Heart className="w-6 h-6 text-primary group-hover:scale-125 transition-transform intoxicating-glow" />
          </div>
          <div className="love-note p-3 cursor-pointer group" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
            <Sparkles className="w-6 h-6 text-accent group-hover:scale-125 transition-transform seductive-glow" />
          </div>
          <div className="love-note p-3 cursor-pointer group" onClick={handleHeartClick}>
            <Stars className="w-6 h-6 text-primary-glow group-hover:scale-125 transition-transform desire-pulse" />
          </div>
        </div>

        {/* Interactive Quote Bubbles */}
        <div className="absolute top-20 left-8 animate-pulse">
          <div className="love-note p-3 max-w-xs romantic-breathe group cursor-pointer" onClick={handleHeartClick}>
            <div className="text-xs cheesecake-text font-medium text-center">
              "You're my favorite notification" 📱💕
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-8 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="love-note p-3 max-w-xs sensual-float group cursor-pointer" onClick={handleHeartClick}>
            <div className="text-xs gradient-text font-medium text-center">
              "My heart.exe stopped working when I met you" 💻❤️
            </div>
          </div>
        </div>

        {/* Passionate Love Notes */}
        {showLoveNotes && (
          <div className="mb-12 w-full max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-4 passion-pulse">
                Words From My Soul 💕
              </h2>
              <p className="text-muted-foreground text-lg">These are the thoughts that consume my heart every day</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {passionateLoveNotes.map((note, index) => (
                <div 
                  key={index} 
                  className="love-note passion-glow group"
                  style={{ animationDelay: `${note.delay}ms` }}
                >
                  <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <Heart className="w-12 h-12 text-primary sensual-float" />
                  </div>
                  <h3 className="cheesecake-text text-2xl md:text-3xl font-bold mb-6 relative z-10">{note.title}</h3>
                  <p className="text-foreground text-lg leading-relaxed relative z-10 group-hover:text-primary-glow transition-colors duration-500">{note.message}</p>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                    <Sparkles className="w-8 h-8 text-accent floating" />
                  </div>
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
                <div className="flex gap-8 justify-center relative">
                  <Heart className="w-16 h-16 text-primary desire-pulse" />
                  <Sparkles className="w-12 h-12 text-primary-glow seductive-bounce" />
                  <Heart className="w-16 h-16 text-primary desire-pulse" style={{ animationDelay: '2s' }} />
                  
                  {/* More Orbiting Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-accent hypnotic-orbit" style={{ animationDelay: '1s' }} />
                    <Zap className="w-5 h-5 text-primary hypnotic-orbit" style={{ animationDelay: '3s' }} />
                    <Eye className="w-4 h-4 text-primary-glow hypnotic-orbit" style={{ animationDelay: '5s' }} />
                  </div>
                </div>
              </div>
              
              <h1 className="gradient-text text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight love-intoxication">
                Will You Marry Me,
              </h1>
              <h1 className="cheesecake-text text-6xl md:text-8xl lg:text-9xl font-bold mb-8 sensual-tremble">
                My Sweet Cheesecake?
              </h1>
              <div className="text-4xl md:text-5xl mb-8 seductive-bounce">🍰💍✨💕🔥</div>
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="gradient-text text-3xl md:text-4xl font-bold leading-relaxed intoxicating-glow">
                Be the final commit to my repository of life
              </p>
              <p className="cheesecake-text text-2xl md:text-3xl font-semibold romantic-breathe">
                Let's merge our hearts into one beautiful codebase forever 💕
              </p>
              <p className="code-text text-xl md:text-2xl font-mono love-whisper">
                // Born: February 9, 2001 - The day my soulmate entered this world 🌟
              </p>
              <p className="text-accent text-lg md:text-xl font-medium magnetic-pull">
                You're not just the sweetest dessert in life's buffet, you're the entire feast 🍰
              </p>
            </div>

            {/* Interactive Love Button */}
            <div className="mb-12 relative">
              {/* Surrounding Hearts */}
              <div className="absolute -top-8 -left-8">
                <Heart className="w-8 h-8 text-primary hypnotic-orbit opacity-60" />
              </div>
              <div className="absolute -top-12 -right-6">
                <Sparkles className="w-6 h-6 text-accent seductive-bounce opacity-70" />
              </div>
              <div className="absolute -bottom-6 -left-10">
                <Flame className="w-7 h-7 text-primary-glow dreamy-drift opacity-50" />
              </div>
              <div className="absolute -bottom-8 -right-8">
                <Heart className="w-9 h-9 text-primary sensual-tremble opacity-65" />
              </div>
              
              <button 
                onClick={handleLoveExplosion}
                className="proposal-button desire-pulse text-3xl px-16 py-8 rounded-3xl font-bold transform hover:scale-110 transition-all duration-500 relative overflow-hidden group"
                style={{
                  background: 'var(--gradient-passion)',
                  boxShadow: 'var(--shadow-seductive)',
                  border: '3px solid rgba(255,255,255,0.3)'
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
                <span className="relative z-10 flex items-center gap-4 sensual-tremble">
                  <Heart className="w-8 h-8 intoxicating-glow" />
                  Click if you love me forever! 
                  <Heart className="w-8 h-8 intoxicating-glow" />
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