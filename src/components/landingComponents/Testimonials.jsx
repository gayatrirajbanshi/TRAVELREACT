import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import {  testimonials } from '@/lib/constants'
import { Button } from '../ui/button'
// import { BookmarkCheck } from 'lucide-react'

 const Testimonials = () => {
  return (
    <section className='py-20 px-10' id='features'>
        <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>What Our Travelers Say</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
               Don't just take our word for it - hear from thousands of satisfied travelers
            </p>
        </div>
        <div className=' grid  md:grid-cols-1 lg:grid-cols-4 gap-8'>

           {
            testimonials.map((testi)=> {
                return (
                <Card key={testi.name} className="text-center ">
                
                <CardHeader>
                    
                    <div className='flex gap-4 p-8  mx-4 rounded-xl'>
                    
                        <img src={testi.image} alt= '' className='h-16 w-16 rounded-full'/>
                        <p className='text-xl text-start font-bold mb-2 text-black/80'>{testi.name}</p>
                     </div>
                </CardHeader>
                <CardContent>
                    
                <CardDescription className={"flex items-start justify-between"} >
                   {/* {/* <p className='text-lg text-gray-600'>
                    {testi.day} days
                   </p> */}
                   {
                   <p className='text-lg font-bold text-black-700'>
                    {testi.review} 
                   </p> }
                
                    </CardDescription>    
                </CardContent>
                 
                <CardFooter>
                    {/* <Button className={"w-full"}> View Details</Button> */}
                    <p>⭐⭐⭐⭐⭐</p>
                </CardFooter>
                
            </Card>
             

                )
            })  
        }   

        </div>
        </div>
    </section>
  )
}

export default Testimonials