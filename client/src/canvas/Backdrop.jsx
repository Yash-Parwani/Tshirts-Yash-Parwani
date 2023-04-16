// this will display the color splash of the shirt color chooses

import React, { useRef } from 'react'
import {easing} from 'maath'
import {useFrame} from '@react-three/fiber'
//helps in playing with shadows
import {AccumulativeShadows,RandomizedLight} from '@react-three/drei'
const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
     position={[0,0,-0.14]}
     ref={shadows}
     temporal // smoothes out the edges of shadow over time
     frames={60} // frames will render in 60s
     alphaTest={0.85} // transperancy of shadows
     scale={10}
     rotation={[Math.PI/2,0,0]}
     >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5,5,-10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5,5,-9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop