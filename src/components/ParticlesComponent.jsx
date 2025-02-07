import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = (engine) => {
    loadSlim(engine);
  };

  const options = {
    background: {
      color: "#000",
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      links: {
        enable: true,
        color: "#ffffff",
      },
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      move: {
        enable: true,
        out_mode: "out",
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
      },
    },
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0">
      <Particles init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesComponent;
