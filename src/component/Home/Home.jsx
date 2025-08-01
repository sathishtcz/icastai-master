import React from 'react'
import Homepage from '../../shared/components/Homepage/Homepage'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Home() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/'} />
      <Homepage />
    </div>
  )
}
