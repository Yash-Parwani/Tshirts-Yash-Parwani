//will help to point closer to the model because without rig we see the model is small

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

// if we see in index.js of this folder we have Shirt component inside center component so to display it we need to use children prop
const CameraRig = ({ children }) => {
    //to access the html node, will be used to update the state
    const group = useRef();
    const snap = useSnapshot(state);
  
     
    //the below hook allows us to execute the code on every frame
    useFrame((state, delta) => {
      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;

        //set the initial position of the model
        let targetPosition = [-0.4, 0, 2];
        if(snap.intro) {
            //if we are at homepage than we will reposition it
            if(isBreakpoint) targetPosition = [0, 0, 2];
            if(isMobile) targetPosition = [0, 0.2, 2.5];
        }
        else{
            //if we are not at homepage than we will reposition it
            if(isMobile) targetPosition = [0, 0, 2.5]
            else targetPosition = [0, 0, 2];
        }
        //set model camera position
        easing.damp3(state.camera.position,targetPosition,0.25,delta)



        // set the model rotation smoothly i.e as mouse hovers the shirt also rotates slightly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5,0],
            0.25,
            delta
        )
    })
  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig