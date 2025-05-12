
import React from 'react';
import ActionButton from './ActionButton';

const ButtonGroup = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <ActionButton>Get Started</ActionButton>
      <ActionButton variant="outline">Learn More</ActionButton>
      <ActionButton variant="secondary">Contact Us</ActionButton>
    </div>
  );
};

export default ButtonGroup;
