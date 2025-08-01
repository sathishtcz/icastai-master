import React from 'react'
import Scope from '../../shared/components/Scope/Scope'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/scope'} />
      <Scope />
    </div>
  )
}
