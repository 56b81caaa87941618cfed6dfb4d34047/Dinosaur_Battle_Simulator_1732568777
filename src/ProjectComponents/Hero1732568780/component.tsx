import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dinosaur_Battle_Simulator_1732568777/main/src/assets/images/bec493ec86c9499797881af9b582f6b6.jpeg')"}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">asdf Unleash Prehistoric Fury!</h1>
          <p className="text-xl mb-6">Battle mighty dinosaurs in epic showdowns across ancient landscapes. Evolve your prehistoric warriors and become the ultimate Jurassic champion!</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }