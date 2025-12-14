'use client'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GridTileProps {
  index: number;
  onReveal: () => void;
  showPlus: boolean;
  isRevealed: boolean;
}

const GridTile = ({ index, onReveal, showPlus, isRevealed }: GridTileProps) => {
  const handleInteraction = () => {
    if (!isRevealed) {
      onReveal();
    }
  };

  return (
    <motion.div
      className={`bg-primary w-full h-full border border-background/20 cursor-crosshair relative flex items-center justify-center`}
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isRevealed ? 0 : 1,
        scale: isRevealed ? 0.8 : 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={handleInteraction}
      style={{ pointerEvents: isRevealed ? "none" : "auto" }}
    >
      {showPlus && !isRevealed && (
        <span className="absolute bottom-0.5 right-0.5 text-[6px] sm:text-[8px] text-primary-foreground/30 font-mono pointer-events-none">
          +
        </span>
      )}
    </motion.div>
  );
};

// Terminal Component
const YetiTerminal = ({ revealProgress }: { revealProgress: number }) => {
  const [lines, setLines] = useState<Array<{
    type: string;
    text?: string;
    prompt?: string;
    command?: string;
  }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [interactive, setInteractive] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isTerminalFocused, setIsTerminalFocused] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const cmds = [
    {
      prompt: "yeti@growth:~$ ",
      command: "rm -r procrastination",
      output: "while you are scratching,\nyour competitor optimized, launched,\nand captured your customers."
    }
  ];

  // Blinking cursor effect
  useEffect(() => {
    if (!interactive) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, [interactive]);

  useEffect(() => {
    // Only initialize once when reveal progress reaches threshold
    if (revealProgress > 0.2 && !hasInitialized) {
      setHasInitialized(true);
      
      // Initial animation sequence
      const initSequence = async () => {
        await delay(500);
        addLine({ type: 'comment', text: '# Welcome to yetiGrowth' });
        await delay(100);
        addLine({ type: 'comment', text: '# From site valley to search summit' });
        await delay(800);
        
        // Execute command
        await executeCommand(0);
        
        // Enable interactive mode
        await delay(800);
        setInteractive(true);
        addLine({ type: 'info', text: '' });
        addLine({ type: 'info', text: '// Interactive mode enabled.' });
        addLine({ type: 'info', text: '// Type /help for commands.' });
      };

      initSequence();
    }
  }, [revealProgress, hasInitialized]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (interactive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [interactive, lines]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const addLine = (line: any) => {
    setLines(prev => [...prev, line]);
  };

  const executeCommand = async (idx: number) => {
    if (idx >= cmds.length) return;
    
    const c = cmds[idx];
    
    // Add prompt
    addLine({ type: 'prompt-only', prompt: c.prompt });
    await delay(200);
    
    // Type command character by character
    for (let i = 0; i <= c.command.length; i++) {
      setLines(prev => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = {
          type: 'prompt-command',
          prompt: c.prompt,
          command: c.command.substring(0, i)
        };
        return newLines;
      });
      await delay(50);
    }
    
    await delay(600);
    
    if (c.output) {
      const outputLines = c.output.split('\n');
      for (const outputLine of outputLines) {
        // Add empty output line first
        addLine({ type: 'output', text: '' });
        
        // Type output character by character
        for (let i = 0; i <= outputLine.length; i++) {
          setLines(prev => {
            const newLines = [...prev];
            newLines[newLines.length - 1] = {
              type: 'output',
              text: outputLine.substring(0, i)
            };
            return newLines;
          });
          await delay(30);
        }
        await delay(100);
      }
    }
  };

  const processCommand = async (cmd: string) => {
    const lc = cmd.toLowerCase();
    
    if (lc === '/help') {
      const helpLines = [
        '',
        '📧 Email: yetiGrowth@gmail.com',
        '🌐 Website: www.yetigrowth.com',
        '',
        'Commands: /help, /contact, /services, /tips, /clear'
      ];
      for (const line of helpLines) {
        addLine({ type: 'info', text: line });
        await delay(50);
      }
    } else if (lc === '/contact') {
      const contactLines = [
        '',
        '📧 yetiGrowth@gmail.com',
        '🌐 www.yetigrowth.com',
        '📱 +1 (555) 123-4567'
      ];
      for (const line of contactLines) {
        addLine({ type: 'info', text: line });
        await delay(50);
      }
    } else if (lc === '/services') {
      const serviceLines = [
        '',
        '🔧 IT Consultation',
        '🌐 Web & App Development',
        '🔍 SEO',
        '🎨 Graphic Design',
        '📱 Social Media Marketing',
        '⭐ Influencer Marketing'
      ];
      for (const line of serviceLines) {
        addLine({ type: 'info', text: line });
        await delay(50);
      }
    } else if (lc === '/tips') {
      const tips = [
        'SEO: Mobile-first indexing is crucial',
        'Social: Post 3-5 times/week consistently',
        'Content: Solve problems, build trust',
        'Speed: 1s delay = 7% conversion loss'
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      addLine({ type: 'info', text: '' });
      addLine({ type: 'info', text: randomTip });
      addLine({ type: 'info', text: '' });
      addLine({ type: 'info', text: 'Type /tips for more!' });
    } else if (lc === '/clear') {
      setLines([]);
      return;
    } else if (cmd === '') {
      // Just show new prompt
    } else {
      addLine({ type: 'error', text: `Command not found: ${cmd}` });
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const cmd = inputValue.trim();
      addLine({ type: 'user-input', prompt: 'yeti@growth:~$ ', command: cmd });
      setInputValue('');
      await delay(100);
      await processCommand(cmd);
    }
  };

  // Global keyboard listener - captures typing anywhere on the page (desktop only)
  useEffect(() => {
    if (!interactive) return;
    
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Skip global listener on touch devices

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in another input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        if (e.target !== inputRef.current) {
          return;
        }
      }

      // Focus our input and let it handle the key
      if (inputRef.current) {
        inputRef.current.focus();
        
        // If it's a character key, manually add it
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          setInputValue(prev => prev + e.key);
        } else if (e.key === 'Backspace') {
          e.preventDefault();
          setInputValue(prev => prev.slice(0, -1));
        } else if (e.key === 'Enter' && inputValue.trim()) {
          e.preventDefault();
          const cmd = inputValue.trim();
          addLine({ type: 'user-input', prompt: 'yeti@growth:~$ ', command: cmd });
          setInputValue('');
          delay(100).then(() => processCommand(cmd));
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [interactive, inputValue]);

  // Handle terminal click/tap to focus input (especially for mobile)
  const focusInput = (e?: React.MouseEvent | React.TouchEvent) => {
    if (!interactive || !inputRef.current) return;
    
    // Don't focus if currently scrolling
    if (isScrollingRef.current) {
      console.log('📜 Ignoring tap during scroll');
      return;
    }
    
    console.log('🔍 Terminal tapped - attempting to open keyboard');
    
    // Prevent any default behavior that might cause scrolling
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    setIsTerminalFocused(true);
    
    // Immediate focus
    inputRef.current.focus();
    console.log('✅ Input focused');
    
    // iOS often requires a slight delay and click
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.click();
        console.log('✅ Input clicked (iOS fix)');
      }
    });
    
    // Final attempt with longer delay for stubborn devices
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
        console.log('✅ Final focus attempt');
      }
    }, 100);
  };

  const handleTerminalClick = (e: React.MouseEvent) => {
    console.log('🖱️ Terminal clicked (mouse)');
    focusInput(e);
  };

  const handleTerminalTouch = (e: React.TouchEvent) => {
    console.log('👆 Terminal touched');
    focusInput(e);
  };

  const handleInputBlur = () => {
    // Keep terminal focused state if on mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      setIsTerminalFocused(false);
    }
  };

  // Auto-close keyboard when scrolling past terminal
  useEffect(() => {
    if (!interactive) return;
    
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!terminalContainerRef.current || !inputRef.current) return;
      
      // Set scrolling flag
      isScrollingRef.current = true;
      clearTimeout(scrollTimeout);
      
      // Check if terminal is in viewport
      const rect = terminalContainerRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      // If terminal is out of view and keyboard is open, blur input
      if (!isInViewport && isTerminalFocused) {
        console.log('📜 Terminal out of view - closing keyboard');
        inputRef.current.blur();
        setIsTerminalFocused(false);
      }
      
      // Reset scrolling flag after scroll ends
      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen to parent scroll if in a scrollable container
    if (terminalRef.current) {
      terminalRef.current.addEventListener('scroll', handleScroll, { passive: true } as any);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (terminalRef.current) {
        terminalRef.current.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [interactive, isTerminalFocused]);

  return (
    <div 
      ref={terminalContainerRef}
      className="w-full h-full bg-black/95 backdrop-blur-sm border border-zinc-700 rounded-lg flex flex-col overflow-hidden shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-2 sm:px-3 py-1.5 sm:py-2 flex-shrink-0">
        <div className="inline-block bg-zinc-800 border border-zinc-700 rounded px-2 sm:px-3 py-0.5 sm:py-1 text-green-400 text-[10px] sm:text-xs font-medium">
          yeti@growth {isTerminalFocused && <span className="text-green-500">●</span>}
        </div>
      </div>

      {/* Terminal Body - Responsive height */}
      <div 
        ref={terminalRef}
        onClick={handleTerminalClick}
        onTouchEnd={(e) => {
          console.log('👆 Touch end on terminal');
          handleTerminalTouch(e);
        }}
        className="flex-1 overflow-y-auto p-2 sm:p-3 md:p-4 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed cursor-text touch-manipulation select-none relative"
        style={{ 
          fontFamily: 'Consolas, "Courier New", monospace', 
          WebkitTapHighlightColor: 'transparent',
          minHeight: '200px',
          maxHeight: 'calc(100vh - 100px)'
        }}
      >
        {lines.map((line, idx) => (
          <div key={idx} className="mb-0.5 sm:mb-1 min-h-[14px] sm:min-h-[16px] md:min-h-[20px] break-words">
            {line.type === 'comment' && (
              <span className="text-zinc-500">{line.text}</span>
            )}
            {line.type === 'info' && (
              <span className="text-white">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-white ml-1 sm:ml-2">{line.text}</span>
            )}
            {line.type === 'error' && (
              <span className="text-red-500">{line.text}</span>
            )}
            {line.type === 'prompt-only' && (
              <span className="text-green-400 font-semibold">{line.prompt}</span>
            )}
            {line.type === 'prompt-command' && (
              <>
                <span className="text-green-400 font-semibold">{line.prompt}</span>
                <span className="text-yellow-300">{line.command}</span>
              </>
            )}
            {line.type === 'user-input' && (
              <>
                <span className="text-green-400 font-semibold">{line.prompt}</span>
                <span className="text-yellow-300">{line.command}</span>
              </>
            )}
          </div>
        ))}

        {/* Input Line */}
        {interactive && (
          <div className="flex items-center mt-0.5 sm:mt-1 relative">
            <span className="text-green-400 font-semibold text-[10px] sm:text-xs md:text-sm">yeti@growth:~$ </span>
            <span className="text-yellow-300 text-[10px] sm:text-xs md:text-sm" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {inputValue}
            </span>
            <span 
              className={`inline-block w-1 sm:w-1.5 md:w-2 h-2.5 sm:h-3 md:h-4 lg:h-5 bg-green-400 ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.1s' }}
            />
          </div>
        )}
        
        {/* Hidden input that covers entire terminal for easy tapping */}
        {interactive && (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              console.log('⌨️ Input changed:', e.target.value);
              setInputValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            onFocus={() => {
              console.log('✅ Input focused!');
              setIsTerminalFocused(true);
            }}
            onClick={(e) => {
              console.log('🖱️ Input clicked directly');
              e.stopPropagation();
            }}
            onTouchStart={(e) => {
              console.log('👆 Input touched directly');
              e.stopPropagation();
              // Prevent double-tap zoom on iOS
              if (e.touches.length > 1) {
                e.preventDefault();
              }
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-text"
            style={{ 
              fontSize: '16px',
              color: 'transparent',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              pointerEvents: 'auto',
              zIndex: 100,
              caretColor: 'transparent',
              WebkitUserSelect: 'text',
              userSelect: 'text'
            }}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            inputMode="text"
            enterKeyHint="send"
            aria-label="Terminal command input"
          />
        )}
      </div>
    </div>
  );
};

const HeroGrid = () => {
  const [revealedTiles, setRevealedTiles] = useState<Set<number>>(new Set());
  const [tiles, setTiles] = useState<Array<{ index: number; showPlus: boolean }>>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [gridSize, setGridSize] = useState({ columns: 10, rows: 10 });
  const [isTouching, setIsTouching] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const lastRevealTimeRef = useRef<number>(0);
  
  // Responsive grid sizing
  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: 6x8 grid
        setGridSize({ columns: 6, rows: 8 });
      } else if (width < 1024) {
        // Tablet: 8x10 grid
        setGridSize({ columns: 8, rows: 10 });
      } else {
        // Desktop: 10x10 grid
        setGridSize({ columns: 10, rows: 10 });
      }
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const totalSquares = gridSize.columns * gridSize.rows;

  // Initialize tiles only on client side
  useEffect(() => {
    setTiles(
      Array.from({ length: totalSquares }, (_, index) => ({
        index,
        showPlus: Math.random() > 0.85,
      }))
    );
    setIsMounted(true);
  }, [totalSquares]);

  const handleReveal = (index: number) => {
    setRevealedTiles((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);

      // Chain reaction for neighbors
      setTimeout(() => {
        setRevealedTiles((current) => {
          const updated = new Set(current);
          const neighbors = [
            index - 1,
            index + 1,
            index - gridSize.columns,
            index + gridSize.columns,
          ];
          neighbors.forEach((neighborIndex) => {
            if (
              neighborIndex >= 0 &&
              neighborIndex < totalSquares &&
              Math.random() > 0.5
            ) {
              updated.add(neighborIndex);
            }
          });
          return updated;
        });
      }, 100);

      return newSet;
    });
  };

  // Convert touch/mouse position to tile index
  const getTileIndexFromPosition = (clientX: number, clientY: number): number | null => {
    if (!gridRef.current) return null;
    
    const rect = gridRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    // Check if touch is within bounds
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      return null;
    }
    
    const tileWidth = rect.width / gridSize.columns;
    const tileHeight = rect.height / gridSize.rows;
    
    const col = Math.floor(x / tileWidth);
    const row = Math.floor(y / tileHeight);
    
    const index = row * gridSize.columns + col;
    
    return index >= 0 && index < totalSquares ? index : null;
  };

  // Touch event handlers for mobile scratching
  const handleTouchStart = (e: React.TouchEvent) => {
    // Only lock scroll if there are still tiles to reveal
    if (revealedTiles.size >= totalSquares * 0.95) {
      return; // Let normal scrolling work when grid is mostly revealed
    }
    
    setIsTouching(true);
    // Save current scroll position
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentScroll);
    
    // Lock body scroll when touching grid
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${currentScroll}px`;
    document.body.style.width = '100%';
    
    const touch = e.touches[0];
    const tileIndex = getTileIndexFromPosition(touch.clientX, touch.clientY);
    if (tileIndex !== null && !revealedTiles.has(tileIndex)) {
      handleReveal(tileIndex);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Only prevent scrolling if grid is not fully revealed
    if (revealedTiles.size >= totalSquares * 0.95) {
      return; // Allow normal scrolling
    }
    
    e.preventDefault(); // Prevent scrolling while scratching
    if (!isTouching) return;
    
    // Throttle reveals to improve performance
    const now = Date.now();
    if (now - lastRevealTimeRef.current < 16) { // ~60fps throttle
      return;
    }
    lastRevealTimeRef.current = now;
    
    const touch = e.touches[0];
    const tileIndex = getTileIndexFromPosition(touch.clientX, touch.clientY);
    if (tileIndex !== null && !revealedTiles.has(tileIndex)) {
      handleReveal(tileIndex);
    }
  };

  const handleTouchEnd = () => {
    if (!isTouching) return;
    
    setIsTouching(false);
    // Unlock body scroll and restore scroll position
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  };

  // Cleanup effect for body scroll lock
  useEffect(() => {
    // Cleanup function to ensure scroll is always restored
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  const revealProgress = revealedTiles.size / totalSquares;

  // Render placeholder until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px]">
        <div
          className="absolute inset-0 z-10"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
          }}
        >
          {Array.from({ length: totalSquares }, (_, index) => (
            <div
              key={index}
              className="bg-primary w-full h-full border border-background/20"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px]">
      {/* Terminal underneath - revealed as tiles disappear */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: revealProgress > 0.2 ? Math.min(revealProgress * 1.5, 1) : 0,
          scale: revealProgress > 0.2 ? 1 : 0.9,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full max-w-4xl" style={{ maxHeight: 'min(600px, 90vh)' }}>
          <YetiTerminal revealProgress={revealProgress} />
        </div>
      </motion.div>

      {/* Grid overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 z-10 cursor-crosshair"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
          touchAction: revealedTiles.size >= totalSquares * 0.95 ? 'auto' : 'none',
          pointerEvents: revealedTiles.size >= totalSquares * 0.95 ? 'none' : 'auto',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {tiles.map((tile) => (
          <GridTile
            key={tile.index}
            index={tile.index}
            onReveal={() => handleReveal(tile.index)}
            showPlus={tile.showPlus}
            isRevealed={revealedTiles.has(tile.index)}
          />
        ))}
      </div>

      {/* Hint text */}
      <AnimatePresence>
        {revealedTiles.size === 0 && (
          <motion.div
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-[9px] sm:text-[10px] font-mono text-primary-foreground/50 uppercase tracking-widest">
              Swipe/Hover to reveal
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroGrid;