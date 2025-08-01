import React from 'react'
import Keydates from '../../shared/components/Keydates/Keydates'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Keydatepage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/key-dates'} />
      <Keydates />
    </div>
  )
}
