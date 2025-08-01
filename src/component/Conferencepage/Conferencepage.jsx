import React from 'react'
import ConferenceTracks from '../../shared/components/ConferenceTracks/ConferenceTracks'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Conferencepage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/conference-tracks'} />
      <ConferenceTracks />
    </div>
  )
}
