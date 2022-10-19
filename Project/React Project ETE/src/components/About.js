import React, { useState } from 'react'

import './About.css'


import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar'

import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';



export default function About(props) {

  return (
    <>
    <Navbar/>
      <div className='HeroSection'>
        <div id="heroImage">
          <div className='heroContent'>
            <Pulse>
            <h1>About Us</h1>
            </Pulse>
          </div>
        </div>
      </div>

      <div className='About'>
        <div>
          <div className='aboutContent'>
            <h1>
              What we do ?
            </h1>
            <p className="about_paraa">
            <Pulse>
              
            </Pulse>
            </p>
          </div>

          <div className='aboutContent'>
            
            <p>

            </p>
            <p className='about_paraa'>
              <Pulse>
              Our single-minded focus on innovation that solves real problems takes on several forms. Our focus on consistently optimising efficiency in our manufacturing facilities to ensure better costs for our Customers. Our world-class manufacturing facilities (ISO 9001 and ISO 14001 accredited) and testing Labs. Our emphasis on finding solutions that align with our core values of integrity, honesty and accountability to every customers.
              </Pulse>
            </p>
          </div>
        </div>

       
      </div>

     
      
    </>
  )
}