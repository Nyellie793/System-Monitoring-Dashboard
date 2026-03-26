import React from 'react'
import Navbar from './Header/Navbar'
import Header from './Header/Header'
import Cards from './Cards'
import { FiUpload, FiCpu, FiClock } from "react-icons/fi";

const NetworkCom = () => {
  return (
    <main className='min-h-screen bg-gray-50 px-6 py-8 md:px-12'>
      <section className='max-w-7xl mx-auto space-y-4'>
        {/*hero*/}
        <section className='shadow-sm'>
          <Header />
        </section>

        {/*Stats cards*/}
        <section className='p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Cards
        icon={<FiUpload />}
        iconColor="text-blue-500"
        title="Total Traffic"
        value="850"
        unit="GB"
      />

      {/* Active IPs */}
      <Cards
        icon={<FiCpu />}
        iconColor="text-green-500"
        title="Active IPs"
        value="126"
      />

      {/* Peak Usage Time */}
      <Cards
        icon={<FiClock />}
        iconColor="text-yellow-500"
        title="Peak Usage Time"
        value="4:00"
        unit="PM"
      />
        </section>

        {/*Charts*/}
        <section className='grid md: grid-col-3 gap-6'>
        </section>

      </section>
    </main>
  )
}

export default NetworkCom
