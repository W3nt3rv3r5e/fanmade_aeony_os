import React, { useState, useEffect, useRef } from 'react';

// --- CSS SECTION (The "Half CSS" part) ---
const styles = {
  desktop: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0a0015', // Deep background
    margin: 0,
    overflow: 'hidden',
    cursor: 'url("cursor.svg"), auto', // Rodless Moga Cursor
    display: 'flex',
    justify-content: 'center',
    align-items: 'center'
  },
  splash: {
    textAlign: 'center',
    transition: 'opacity 0.8s ease-out',
    zIndex: 9999
  },
  logo: {
    color: '#9d00ff', // Neon Violet
    fontSize: '48px',
    letterSpacing: '10px',
    textShadow: '0 0 20px rgba(157, 0, 255, 0.6)'
  },
  loadingBar: {
    width: '300px',
    height: '2px',
    background: 'rgba(157, 0, 255, 0.2)',
    marginTop: '20px'
  }
};

// --- JS SECTION (The System Logic) ---
const AeonyOS = () => {
  const [booting, setBooting] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Play startup sound from the designated sounds directory
    if (audioRef.current) {
      audioRef.current.play();
    }

    const timer = setTimeout(() => {
      setBooting(false);
    }, 3000); // Zenith boot sequence duration
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.desktop}>
      <audio ref={audioRef} src="sounds/startup.mp3" /> {/* */}
      
      {booting && (
        <div style={styles.splash}>
          <h1 style={styles.logo}>ZENITH</h1>
          <div style={styles.loadingBar}>
            <div style={{
              width: '100%', 
              height: '100%', 
              background: '#9d00ff',
              transition: 'width 2.5s linear'
            }} />
          </div>
          <p style={{color: '#9d00ff', fontSize: '10px', marginTop: '15px'}}>INITIALIZING...</p>
        </div>
      )}
    </div>
  );
};

export default AeonyOS;