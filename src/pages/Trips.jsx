import UserTrips from '@/components/dashboardComponents/UserTrips'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const Trips = () => {
  return (  
    <main className='py-4 px-4 md:mx-6 lg:px-20'>

    <div> 
      <h1 className='text-3xl font-boldmb-2'>Your Trip</h1>
      <p className='text-sm text-gray-400 mb-6'>Manage and Explore your travel Adventure with wander wise</p>
    </div>
    <div>
      <a href="/trips/add">
      <Button>
        <Plus className='mr-2 h-4 w-4'/>
        Add new Trip
      </Button>
      
      </a>
      </div>
    <UserTrips/>
    </main>
  )
}

export default Trips