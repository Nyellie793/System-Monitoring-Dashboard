import React from 'react'
import Header from './Header/Header';
import Card from './Cards';
import { FiActivity, FiCpu, FiHardDrive } from "react-icons/fi";

const SystemHealthCom = () => {
  return (
    <main className='min-h-screen bg-gray-50 px-6 py-8 md:px-12'>
      <section className='max-w-7xl mx-auto space-y-4'>
        {/*hero*/}
        <section className='shadow-sm'>
          <Header />
        </section>

        {/*Stats cards*/}
        <section className='grid md:grid-cols-3 gap-6'>
          <Card
        variant="stat"
        icon={<FiActivity className="text-blue-600 text-xl" />}
        bgColor="bg-blue-100"
        title="CPU"
        value="65%"
      />

      <Card
        variant="stat"
        icon={<FiCpu className="text-green-600 text-xl" />}
        bgColor="bg-green-100"
        title="Memory"
        value="72%"
      />

      <Card
        variant="stat"
        icon={<FiHardDrive className="text-purple-600 text-xl" />}
        bgColor="bg-purple-100"
        title="Disk"
        value="80%"
      />
        </section>

        {/*Charts*/}
        <section className='grid md: grid-col-3 gap-6'>

        </section>

      </section>
    </main>
  )
}

export default SystemHealthCom
