import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function EarthGlobe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 500 * 2,
      height: 500 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1, // 1 is dark mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2], // Dark blueish base
      markerColor: [0.5, 0.2, 0.9], // Purple markers to match theme
      glowColor: [0.1, 0.1, 0.3], // Subtle glow
      markers: [
        // Delhi marker
        { location: [28.6139, 77.2090], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005; // Adjust rotation speed here
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '500px', aspectRatio: 1, margin: 'auto', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 1,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}
