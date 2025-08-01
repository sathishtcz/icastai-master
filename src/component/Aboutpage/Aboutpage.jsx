import React from 'react'
import Aboutus from '../../shared/components/About/Aboutus'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/about'} />
      <Aboutus />
    </div>
  )
}
