import React, { useState, useEffect } from 'react';

const ContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.pageX, y: e.pageY });
      setVisible(true);
    };

    const handleClick = () => {
      if (visible) setVisible(false);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, [visible]);

  const menuItems = [
    { label: "Refresh", action: () => window.location.reload() },
    { label: "New Folder", action: () => alert("New Folder (demo)") },
    { label: "Open in Terminal", action: () => alert("Terminal opened (demo)") },
    { label: "Personalize", action: () => alert("Personalization panel (coming soon)") },
    { label: "View", action: () => alert("View options (demo)") },
    { separator: true },
    { label: "Shutdown", action: () => window.close(), danger: true },
  ];

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        backgroundColor: 'rgba(20, 0, 40, 0.95)',
        border: '1px solid #9d00ff',
        borderRadius: '4px',
        boxShadow: '0 10px 30px rgba(157, 0, 255, 0.3)',
        zIndex: 10000,
        minWidth: '200px',
        overflow: 'hidden',
        cursor: 'url("cursor.svg"), pointer',
      }}
    >
      {menuItems.map((item, index) => 
        item.separator ? (
          <div key={index} style={{ height: '1px', background: 'rgba(157, 0, 255, 0.3)', margin: '4px 0' }} />
        ) : (
          <div
            key={index}
            onClick={() => {
              item.action();
              setVisible(false);
            }}
            style={{
              padding: '10px 16px',
              color: item.danger ? '#ff4d4d' : '#ffffff',
              fontSize: '13.5px',
              cursor: 'url("cursor.svg"), pointer',
              transition: 'background 0.15s',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(157, 0, 255, 0.25)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {item.label}
          </div>
        )
      )}
    </div>
  );
};

export default ContextMenu;
