import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen px-6 py-8 bg-black text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center mt-24 mb-16">
        {/* Glowing blob */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full z-0"></div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-cyan-400 neon-text z-10">
          Cirql<span className="text-yellow-400">.io</span>
        </h1>
      </section>

      {/* Pricing Title */}
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Choose Your Plan</h2>

      {/* Pricing Cards with Glassmorphism */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {/* Starter */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-md hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.4)] transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-cyan-400 text-2xl mb-4">{isYearly ? "$90/year" : "$9/month"}</p>
          <ul className="text-gray-300 space-y-1">
            <li>✅ 5 Projects</li>
            <li>✅ 10 Users</li>
            <li>✅ Community Support</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="bg-white/10 backdrop-blur-md border border-cyan-400 p-6 rounded-3xl shadow-md hover:shadow-[0_0_20px_4px_rgba(255,255,0,0.5)] transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-cyan-400 text-2xl mb-4">{isYearly ? "$180/year" : "$18/month"}</p>
          <ul className="text-gray-300 space-y-1">
            <li>✅ Unlimited Projects</li>
            <li>✅ Unlimited Users</li>
            <li>✅ Priority Support</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-md hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.4)] transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-cyan-400 text-2xl mb-4">Contact Us</p>
          <ul className="text-gray-300 space-y-1">
            <li>✅ Custom Features</li>
            <li>✅ Dedicated Manager</li>
            <li>✅ 24/7 Support</li>
          </ul>
        </div>
      </section>

      {/* Fancy Toggle Switch */}
<section className="text-center mb-12">
  <label className="inline-flex items-center cursor-pointer">
    <span className="mr-4 text-lg text-gray-300">Monthly</span>

    {/* Switch Container */}
    <div className="relative w-20 h-10">
      <input
        type="checkbox"
        checked={isYearly}
        onChange={() => setIsYearly(!isYearly)}
        className="sr-only peer"
      />

      {/* Track with glassmorphism */}
      <div className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition duration-300 peer-checked:bg-cyan-500/30"></div>

      {/* Glowing Knob */}
      <div className="absolute top-[3px] left-[3px] w-8 h-8 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(255,255,0,0.6)] transition-transform duration-300 transform peer-checked:translate-x-10"></div>
    </div>

    <span className="ml-4 text-lg text-gray-300">Yearly</span>
  </label>
</section>
</div>
  );
};

export default App;
