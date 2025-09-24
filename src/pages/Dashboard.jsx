import DashboardHero from '@/components/dashboardComponents/DashboardHero'
import TripStatusCard from '@/components/dashboardComponents/TripStatusCard'

import UserTrips from '@/components/dashboardComponents/UserTrips'
import { Button } from '@/components/ui/button'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='py-4 px-4 md:px-6 lg:px-20'>
      <DashboardHero/>
      <TripStatusCard/>

      <section>
      <div> 
      <h1 className='text-3xl font-boldmb-2'>Your Trip</h1>
      <p className='text-sm text-gray-400 mb-6'>Manage and Explore your travel Adventure with wander wise</p>
     </div>

     <div>
      <a href="/trips"><Button variant="outline">
        Show All
        </Button></a>
     </div>

        
      <UserTrips/>
      </section>
    </main>
  )
}

export default Dashboard