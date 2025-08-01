import React from 'react'
import PaperSub from '../../shared/components/PaperSub/PaperSub'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Papersubpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Advanced Smart Technologies and AI Innovations'} canonical={'https://icastai.com/paper-submission'} />
      <PaperSub />
    </div>
  )
}
