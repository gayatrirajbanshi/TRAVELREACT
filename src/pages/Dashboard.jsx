import DashboardHero from '@/components/dashboardComponents/DashboardHero'
import UserTrips from '@/components/dashboardComponents/UserTrips'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='py-4 px0-20'>
      <DashboardHero/>

      <section>
      <div> 
      <h1 className='text-3xl font-boldmb-2'>Your Trip</h1>
      <p className='text-sm text-gray-400 mb-6'>Manage and Explore your travel Adventure with wander wise</p>
     </div>

     <div>
      
     </div>

        
      <UserTrips/>
      </section>
    </main>
  )
}

export default Dashboard