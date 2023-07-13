// 3d model of shirt

import React from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal,useGLTF,useTexture } from '@react-three/drei'

import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state);

    //importing 3d models
    const {nodes,materials} = useGLTF('/shirt_baked.glb');

    //creating logo texture that we will be applying on the shirt
    const logoTexture = useTexture(snap.logoDecal);
    //creating full texture that will go on the entire tshirt
    const fullTexture = useTexture(snap.fullDecal);


    //applying color to the shirt smoothly
    useFrame((state,delta) => easing.dampC(materials.lambert1.color,snap.color,0.25,delta));

 const stateString = JSON.stringify(snap)
//  sometimes the shirt wont update , so we add key attribute to group with stateString that ensures that the shrit updates on every renderd
  return (
    <group
      key={stateString}
    >
        {/* mesh used to render the 3d object and has properties */}
        <mesh
        castShadow // this property means the object will cast shadow
        geometry={nodes.T_Shirt_male.geometry} // geometry of t shirt
        material={materials.lambert1} // material for the shrit
        material-roughness = {1}
        dispose={null}
        
        >
         {/* check if we are showing logo or not
         
         check if we are showing texture on shirt or not 
         
         */}
         {snap.isFullTexture && (
            <Decal 
               position={[0,0,0]}
               rotation={[0,0,0]}
               scale={1}
               map={fullTexture}
            />
         )}
         {snap.isLogoTexture && (
            <Decal 
               position={[0,0.04,0.15]}
               rotation={[0,0,0]}
               scale={0.15}
               map={logoTexture}
               // changing quality of the texture
               depthTest={false}
               depthWrite={true}
            />
         )}
        </mesh>
    </group>
  )
}

export default Shirt