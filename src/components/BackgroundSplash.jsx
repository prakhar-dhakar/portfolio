import { motion } from 'framer-motion';

const BackgroundSplash = () => {
  // Generate random positions for splashes
  const splashes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 20, // Random size between 20-50rem
    opacity: Math.random() * 0.2 + 0.2, // Random opacity between 0.2-0.4
    delay: i * 2, // Stagger the animations
    x: Math.random() * 200 - 100, // Random X position
    y: Math.random() * 200 - 100, // Random Y position
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 z-0">
        {splashes.map(splash => (
          <motion.div
            key={splash.id}
            className="absolute"
            initial={{ 
              x: splash.x + '%', 
              y: splash.y + '%',
              opacity: 0 
            }}
            animate={{ 
              x: [splash.x + '%', (splash.x + 20) + '%', splash.x + '%'],
              y: [splash.y + '%', (splash.y + 20) + '%', splash.y + '%'],
              opacity: [splash.opacity, splash.opacity * 1.2, splash.opacity]
            }}
            transition={{
              duration: 20,
              delay: splash.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              style={{
                width: `${splash.size}rem`,
                height: `${splash.size}rem`,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-conic from-teal-400/50 via-blue-400/50 to-purple-400/50 dark:from-teal-500/30 dark:via-blue-500/30 dark:to-purple-500/30 rounded-full blur-[80px] animate-float" 
                style={{ opacity: splash.opacity }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSplash;
