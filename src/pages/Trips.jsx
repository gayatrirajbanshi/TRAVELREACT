import UserTrips from '@/components/dashboardComponents/UserTrips'
import React from 'react'

const Trips = () => {
  return (
    <main className='py-4 px-20'>

    <div> 
      <h1 className='text-3xl font-boldmb-2'>Your Trip</h1>
      <p className='text-sm text-gray-400 mb-6'>Manage and Explore your travel Adventure with wander wise</p>
    </div>
    <div>Trips</div>
    <UserTrips/>
    </main>
  )
}

export default Trips