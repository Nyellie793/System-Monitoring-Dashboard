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
        <section className='grid md:grid-cols-3 gap-6'>
            <Cards
  variant="stat"
  icon={<FiUpload className="text-blue-600 text-xl" />}
  bgColor="bg-blue-100"
  title="Total Traffic"
  value="850 GB"
/>

{/* Active IPs */}
<Cards
  variant="stat"
  icon={<FiCpu className="text-green-600 text-xl" />}
  bgColor="bg-green-100"
  title="Active IPs"
  value="126"
/>

{/* Peak Usage Time */}
<Cards
  variant="stat"
  icon={<FiClock className="text-yellow-600 text-xl" />}
  bgColor="bg-yellow-100"
  title="Peak Usage Time"
  value="4:00 PM"
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
