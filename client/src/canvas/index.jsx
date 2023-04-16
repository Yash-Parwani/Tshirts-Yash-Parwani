import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';


const CanvasModel = () => {
  return (
    <Canvas
      shadows// turning on shadows
      camera={{ position: [0, 0, 0], fov: 25 }} // positioning camera and fov brings camera closer
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in flex justify-between"
    >
      {/* applying ambient lighting that will be shown on dark screen */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel