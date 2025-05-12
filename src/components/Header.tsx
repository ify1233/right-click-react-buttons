
import React from 'react';
import ActionButton from './ActionButton';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-end px-6 bg-white/80 backdrop-blur-sm z-10">
      <ActionButton variant="secondary">Menu</ActionButton>
    </header>
  );
};

export default Header;
