// import React, { useCallback } from 'react';
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const options = {
//     fullScreen: { enable: false }, 
//     particles: {
//       number: { value: 50 },
//       color: { value: "#0000FF" },
//       shape: { type: "circle" },
//       opacity: { value: 0.5 },
//       size: { value: 3 },
//       move: { enable: true, speed: 1 }
//     }
//   };

//   const initParticlesEngine = useCallback(async (engine) => {
//     console.log("Initializing Particles...");
//     await loadFull(engine);
//     console.log("Particles successfully initialized");
//   }, []);

//   return (
//     <div className="particles-container">
//       <Particles options={options} init={initParticlesEngine} />
//     </div>
//   );
// }

// export default ParticlesBackground;
