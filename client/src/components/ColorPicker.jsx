import React from 'react'
import {SketchPicker} from 'react-color' // package for colorpicker 
import { useSnapshot } from 'valtio'
import state from '../store'
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha // disables opacity from the color picker
        onChange={(color) => state.color = color.hex} //cant use snap.color since snap is readonly so to make changes directly have to use state. color.hex gives the hexadecimal color
      />


    </div>
  )
}

export default ColorPicker