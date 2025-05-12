
import React from 'react';
import Header from '@/components/Header';
import ButtonGroup from '@/components/ButtonGroup';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Welcome</h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto">
            A simple and elegant interface with one button at the top and three at the center.
          </p>
          
          <ButtonGroup />
        </div>
      </main>
      
      <footer className="py-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} My Clean Interface
      </footer>
    </div>
  );
};

export default Index;
