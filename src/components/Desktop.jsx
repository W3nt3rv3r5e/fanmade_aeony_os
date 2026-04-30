import React, { useRef } from 'react';

// --- CSS SECTION ---
const styles = {
  desktop: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0a0015', // Deep background
    margin: 0,
    overflow: 'hidden',
    cursor: 'url("cursor.svg"), auto', // Rodless Moga Cursor
    display: 'flex',
    flexDirection: 'column'
  },
  taskbar: {
    marginTop: 'auto',
    width: '100%',
    height: '40px',
    background: 'rgba(20, 0, 40, 0.9)',
    borderTop: '1px solid #9d00ff' // Neon Violet
  }
};

const AeonyOS = () => {
  const audioRef = useRef(null);

  // Auto-trigger startup sound on load
  const handleLoad = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {}); 
    }
  };

  return (
    <div style={styles.desktop} onLoad={handleLoad}>
      <audio ref={audioRef} src="sounds/startup.mp3" autoPlay /> {/* */}
      
      {/* OS Content Loads Immediately */}
      <div style={{ flex: 1 }}>
          {/* Your Desktop Icons/Apps Go Here */}
      </div>

      <div style={styles.taskbar}>
          {/* Taskbar Content */}
      </div>
    </div>
  );
};

export default AeonyOS;
