import React from 'react'
import Breadcrumb from '../component/layout/Breadcrumb'
import Button from '../component/layout/Button'
import Container from '../component/layout/Container'
import InputBox from '../component/layout/InputBox'

const Contact = () => {
  return (
    <Container>
        <Breadcrumb/>
        <div className="w-2/4">
            <h2 className='font-dm font-bold text-4xl mb-10'>Fill up a Form</h2>
            <InputBox as="input" placeholder="Your name here" title="Name" />
            <InputBox as="input" placeholder="Your email here" title="Email" />
            <InputBox as="textarea" placeholder="Your message here"  title="Message"/>
           <Button title="Post"/>
        </div>
    </Container>
  )
}

export default Contact