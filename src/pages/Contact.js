import React from 'react'
import Breadcrumb from '../component/layout/Breadcrumb'
import Container from '../component/layout/Container'
import InputBox from '../component/layout/InputBox'

const Contact = () => {
  return (
    <Container>
        <Breadcrumb/>
        <div className="">
            <h2 className='font-dm font-bold text-4xl'>Fill up a Form</h2>
            <InputBox as="input" placeholder="Your name here" />
        </div>
    </Container>
  )
}

export default Contact