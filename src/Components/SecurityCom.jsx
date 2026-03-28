import React from "react";
import Header from "./Header/Header";
import Card from "./Cards";
import { FiBell, FiAlertTriangle, FiShield, FiArrowUp } from "react-icons/fi";

const SecurityCom = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 md:px-12">
      <section className="max-w-7xl mx-auto space-y-4">
        
        {/* Hero */}
        <section className="shadow-sm">
          <Header />
        </section>

        {/* Stats Cards */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card
            variant="stat"
            icon={<FiBell className="text-blue-600 text-xl" />}
            bgColor="bg-blue-100"
            title="Total Alerts"
            value="182"
          />

          <Card
            variant="stat"
            icon={<FiAlertTriangle className="text-red-600 text-xl" />}
            bgColor="bg-red-100"
            title="Failed Logins"
            value="68"
          />

          <Card
            variant="stat"
            icon={<FiShield className="text-yellow-600 text-xl" />}
            bgColor="bg-yellow-100"
            title="Suspicious Activity"
            value="15"
            unit="%"
            indicator={{
              icon: <FiArrowUp />,
              text: "7%",
              type: "increase",
            }}
          />
        </section>

        {/* Charts */}
        <section className="grid md:grid-cols-3 gap-6">
          {/* Charts will go here */}
        </section>

      </section>
    </main>
  );
};

export default SecurityCom;