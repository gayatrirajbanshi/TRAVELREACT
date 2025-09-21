import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import {  testimonials } from '@/lib/constants'
import { Button } from '../ui/button'
import { Quote, Star } from 'lucide-react'
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

           { testimonials.map((testi)=> (
                
                <Card key={testi.name} className="text-center ">
                <CardContent className="px-6 py-2">
                    <Quote className="h-8 w-8 text-primary mb-4"/>
                    <p className="text-gray-600 mb-4 italic">"{testi.text}"</p>
                    <div className='flex items-center'>
                        <div>
                          <h4 className="font-semibold text-sm">{testi.name}</h4>
                           <p className="text-xs text-gray-500">{testi.location}</p>
                      <div className="flex mt-1">
                        {[...Array(testi.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                        </div>
                        </div>
                        </div>
                        
                </CardContent>  
            </Card>
             

                ) )} 
        

        </div>
        </div>
    </section>
  )
}

export default Testimonials