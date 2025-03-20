import React from 'react'
import { Container } from 'react-bootstrap'
import "./Abstract.css"
import Items from './Items.jsx'

const Abstract = () => {
  return (
    <div className='abs'>
      <section className='w-100 hh'>
        <Items/>
      </section>
    </div>
  )
}

export default Abstract