import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full bg-cover bg-center relative" style={{backgroundImage: `url('https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dinosaur_Battle_Simulator_1732568777/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/7d15d12842ac40b1859ef5d0bf8dc9da.jpeg')`}}>
      <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay" style={{backgroundImage: `url('https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dinosaur_Battle_Simulator_1732568777/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/1cc8e9f0652242c98ee5e2e159dc1825.jpeg')`}}></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">asdf Unleash Prehistoric Fury!</h1>
          <p className="text-xl mb-6">Battle mighty dinosaurs in epic showdowns across ancient landscapes. Evolve your prehistoric warriors and become the ultimate Jurassic champion!</p>
        </div>
        <div className="md:w-1/2">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dinosaur_Battle_Simulator_1732568777/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/d1859a4351284593a8ef540d597b0159.jpeg`} alt="Dinosaur Battle" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component }
