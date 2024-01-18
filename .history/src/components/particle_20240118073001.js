import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles"; // Adjust the import based on the correct path

export const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      interactivity: {},
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
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
      },
    };
  }, []); // Properly closing the useMemo hook

  const particleInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles init={particleInit} options={options} />
  );
};

export default ParticlesComponent;
