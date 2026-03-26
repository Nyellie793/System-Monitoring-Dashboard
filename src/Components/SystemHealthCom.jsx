import React from 'react'
import Header from './Header/Header'

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
          <div className='bg-white p-6 rounded-2xl shadow-sm'></div>
          <div className='bg-white p-6 rounded-2xl shadow-sm'></div>
          <div className='bg-white p-6 rounded-2xl shadow-sm'></div>
        </section>

        {/*Charts*/}
        <section className='grid md: grid-col-3 gap-6'>

        </section>

      </section>
    </main>
  )
}

export default SystemHealthCom
