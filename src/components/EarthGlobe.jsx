import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function EarthGlobe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.6, 0.3, 1],
      glowColor: [0.3, 0.2, 0.8],
      markers: [
        { location: [28.6139, 77.209], size: 0.08 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.05 },
        { location: [48.8566, 2.3522], size: 0.05 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    const handlePointerDown = (e) => {
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
      canvasRef.current.style.cursor = 'grabbing';
    };

    const handlePointerUp = () => {
      pointerInteracting.current = null;
      canvasRef.current.style.cursor = 'grab';
    };

    const handlePointerOut = () => {
      pointerInteracting.current = null;
      canvasRef.current.style.cursor = 'grab';
    };

    const handlePointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta / 100;
      }
    };

    const canvas = canvasRef.current;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerout', handlePointerOut);
    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerout', handlePointerOut);
      canvas.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
        aspectRatio: '1',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
        }}
      />
    </div>
  );
}
