'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yetiImage from "@/assets/yeti-climbing.png";

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
      onTouchStart={handleInteraction}
      style={{ pointerEvents: isRevealed ? "none" : "auto" }}
    >
      {showPlus && !isRevealed && (
        <span className="absolute bottom-1 right-1 text-[8px] text-primary-foreground/30 font-mono pointer-events-none">
          +
        </span>
      )}
    </motion.div>
  );
};

const HeroGrid = () => {
  const [revealedTiles, setRevealedTiles] = useState<Set<number>>(new Set());
  const [tiles, setTiles] = useState<Array<{ index: number; showPlus: boolean }>>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  const totalSquares = 36; // 6x6 grid for right side
  const columns = 6;

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
            index - columns,
            index + columns,
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

  const revealProgress = revealedTiles.size / totalSquares;

  // Render placeholder until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0 z-10"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${columns}, 1fr)`,
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
    <div className="relative w-full h-full">
      {/* Yeti illustration underneath */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: revealProgress > 0.1 ? Math.min(revealProgress * 1.5, 1) : 0,
          scale: revealProgress > 0.1 ? 1 : 0.9,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* <img 
          src={yetiImage} 
          alt="Yeti climbing mountain - Digital Growth" 
          className="w-full h-full object-contain max-h-[80%]"
        /> */}
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-10 cursor-crosshair"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${columns}, 1fr)`,
        }}
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
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-[10px] font-mono text-primary-foreground/50 uppercase tracking-widest">
              Hover to reveal
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroGrid;