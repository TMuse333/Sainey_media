import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";

export const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      interactivity: {},
      particles: {
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: { min: 5, max: 10 },
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.7,
          },
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
        shape: {
          type: "star",
        },
        stroke: {
          width: 1,
          color: "#ffffff",
        },
      },
    };
  }, []);

  const particleInit = useCallback((engine) => {
    // You can add any additional initialization logic here if needed
  }, []);

  return <Particles init={particleInit} options={options} />;
};

export default ParticlesComponent;
