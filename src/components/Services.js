import React from 'react'
import Title from './Title'
import Article from './Article'
import {services} from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
     
     <Title title="our" subTitle="services" />
  
      <div className="section-center services-center">

        {services.map((service) => {
          const {id, icon, title, text} = service
          return <Article key={id} iconClass={icon} title={title} text={text} />
        })}
         
      </div>

    </section>
  )
}

export default Services
