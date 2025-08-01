import React from 'react'
import Organizingcommittee from '../../shared/components/Organizingcommittee/Organizingcommittee'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

function Committeepage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/organizing-committee'} />
      <Organizingcommittee />
    </div>
  )
}

export default Committeepage