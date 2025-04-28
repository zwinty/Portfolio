import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Card.css';

const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        className="card"
        style={{
          backgroundImage: `url(${color})`, // Use the color as an SVG background image
          backgroundSize: 'cover', // Ensure the image covers the card's area
          backgroundPosition: 'center', // Center the image
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            <span>
              <a href={url} target="_blank" rel="noopener noreferrer">See more</a>
            </span>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <img src={src} alt="project image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
