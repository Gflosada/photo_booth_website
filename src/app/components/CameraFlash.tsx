import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function CameraFlash() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    // Trigger random flashes for ambiance
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setFlash(true);
        setTimeout(() => setFlash(false), 200);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-white pointer-events-none z-50"
        />
      )}
    </AnimatePresence>
  );
}
