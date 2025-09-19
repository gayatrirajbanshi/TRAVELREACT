import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='relative flex items-center justify-center text-white'>

        <div className='absolute top-0 left-0 w-full h-full -z-20'>
            <img src="https://www.bugbog.com/wp-content/uploads/2024/11/48a8e990c7e3a541/budget-travel-destinations.jpeg" alt="background" className='w-full h-full'/>
        </div>

        <div className='absolute h-full w-full top-0 left-0 bg-black/60 -z-10'>
        </div>

        <div className='flex flex-col items-center justify-center text-center gap-6 min-h-[80vh] px-4 max-w-2/3'>
            <h1 className='text-4xl md:text-6xl fomt-bold'> 
                Explore the world with wander wise
            </h1>

            <p className='text-white'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aliquam ea! Facilis veritatis ea et harum assumenda mollitia, voluptatem eaque exercitationem ducimus, fugit eveniet aliquam repudiandae vel, sed quam vitae.

            </p>
            <div className='flex items-center gap-4'>
              <a href='/trips'><Button size={"lg"}> Explore Trips </Button></a>
              <a href='/signup'><Button size="lg" variant={"outline"} className="bg-transparent">Register</Button></a>
            </div>
        </div>
    </section>
  )
}

export default Hero