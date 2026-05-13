'use client';

import { motion } from 'framer-motion';
import styles from './InfiniteMenu.module.css';

const items = [
  'Proyectos',
  'Sobre Mí',
  'Servicios',
  'Contacto',
  'Blog',
  'Portfolio',
];

const InfiniteMenu = () => {
  // We double the items to ensure a seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.menuContainer}>
      <motion.div
        className={styles.menuTrack}
        animate={{
          x: [0, -1000], // Adjust based on item width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className={styles.menuItem}>
            <span>{item}</span>
            <span className={styles.separator} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMenu;
