import React, { useState, useEffect } from 'react';

// --- CSS SECTION (The "Half CSS" part) ---
const menuStyles = {
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(20, 0, 40, 0.95)', // Deep violet
    border: '1px solid #9d00ff', // Neon Violet
    width: '200px',
    zIndex: 10000,
    borderRadius: '0px', // Sharp industrial corners
    boxShadow: '0 0 15px rgba(157, 0, 255, 0.3)',
    transition: 'opacity 0.15s ease-out',
    cursor: 'url("cursor.svg"), auto' // Rodless Moga Cursor
  },
  item: {
    padding: '10px 15px',
    color: '#ffffff',
    fontSize: '13px',
    fontFamily: 'sans-serif',
    cursor: 'url("cursor.svg"), pointer' //
  }
};

// --- JS SECTION (The Interaction Logic) ---
const ContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setVisible(true);
    };

    const handleClick = () => setVisible(false);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{ ...menuStyles.container, top: position.y, left: position.x }}>
      <div style={menuStyles.item} onClick={() => window.location.reload()}>Refresh</div>
      <div style={{ ...menuStyles.item, borderTop: '1px solid rgba(157, 0, 255, 0.4)' }}>Personalize</div>
      <div style={menuStyles.item}>Open in Terminal</div>
      <div style={{ ...menuStyles.item, color: '#ff0055' }} onClick={() => window.close()}>Shutdown</div>
    </div>
  );
};

export default ContextMenu;