import React, {useRef, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

/**
 * WebGL page demontrating my WebGL experience.
 *
 * @return {JSX.Element} - Returns the rendered WebGL skills page.
 */
function WebGL() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Write WebGL initialization code here
    // For example, set the clear color
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Additional WebGL code to draw shapes, etc.

    // Cleanup function
    return () => {
      // Release WebGL resources, if necessary
    };
  }, []);

  return (
    <div>
      <Header />
      <canvas ref={canvasRef} width="800" height="600"></canvas>
      <Footer />
    </div>
  );
}

export default WebGL;
