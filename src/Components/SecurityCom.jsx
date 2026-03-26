import React from 'react'
import Header from './Header/Header'
import Card from './Cards'
import { FiBell, FiAlertTriangle, FiShield } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const SecurityCom = () => {
  return (
    <main className='min-h-screen bg-gray-50 px-6 py-8 md:px-12'>
      <section className='max-w-7xl mx-auto space-y-4'>
        {/*hero*/}
        <section className='shadow-sm'>
          <Header />
        </section>
    
        {/*Stats cards*/}
        <section className='p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card
        icon={<FiBell />}
        iconColor="text-blue-500"
        title="Total Alerts"
        value="182"
      />

      {/* Failed Logins */}
      <Card
        icon={<FiAlertTriangle />}
        iconColor="text-red-500"
        title="Failed Logins"
        value="68"
      />

      {/* Suspicious Activity */}
      <Card
        icon={<FiShield />}
        iconColor="text-yellow-500"
        title="Suspicious Activity"
        value="15%"
        indicator={{
          icon: <FiArrowUp className="text-red-500" />,
          text: "7%",
        }}
      />
        </section>

        {/*Charts*/}
        <section className='grid md: grid-col-3 gap-6'>

        </section>

      </section>
    </main>
  )
}

export default SecurityCom
