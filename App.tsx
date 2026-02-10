
import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SocialButtons } from './components/SocialButtons';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-8 animate-fade-in">
      <div className="w-full max-w-[400px] flex flex-col items-center space-y-10 animate-slide-up">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center space-y-6">
          <Logo />
          <div>
            <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight">ZC.Bakery</h1>
            <p className="text-[#6b7280] font-medium text-lg mt-1">Bienvenido de nuevo</p>
          </div>
        </header>

        {/* Form Section */}
        <section className="w-full">
          <LoginForm />
        </section>

        {/* Divider */}
        <div className="w-full flex items-center space-x-4 py-2">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="text-gray-400 text-sm font-medium">O continúa con</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Social Options */}
        <section className="w-full">
          <SocialButtons />
        </section>

        {/* Footer Link */}
        <footer className="pt-4 text-center">
          <p className="text-gray-600 font-medium">
            ¿No tienes cuenta?{' '}
            <button className="text-primary font-bold hover:underline transition-all">
              Regístrate
            </button>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default App;
