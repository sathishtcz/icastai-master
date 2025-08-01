import React from 'react'
import Contactus from '../../shared/components/Contactus/Contactus'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Contactpage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/contactus'} />
      <Contactus />
    </div>
  )
}
