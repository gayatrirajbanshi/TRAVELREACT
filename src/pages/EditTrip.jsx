import Loading from '@/components/shared/Loading';
import { TripForm } from '@/components/trips/TripForm';
import useApi from '@/hooks/useApi';
import React from 'react'
import { useParams } from 'react-router-dom'

const EditTrip = () => {

    const {id} = useParams();

    const {data, loading, error}=useApi(`/trips/${id}`)

    if(loading) return <Loading />

    const newData = {
      ...data,
      startdata: data.startDate.split("T")[0],
      endDate: data.endDate.split("T")[0],                                                                  
    }

  return (
    <main className='px-20 py-20 bg-gray-50'>
      <section className='border roundede-md p-6 max-w-2xl mx-auto bg-white'>
    <div>
      <h1 className='text-2xl font-bold'>Edit This Trip</h1>
      <p className='text-sm text-gray-400'>plan your next adventure with wnaderwise!</p>
    </div>
    <section className='mt-6'>
      <TripForm initialData={newData} />
    </section>
    </section>
    </main>
  )
}

export default EditTrip