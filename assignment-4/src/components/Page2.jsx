import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import image1 from "../assets/Illustration(2).png"
import image2 from "../assets/Illustration (1).png"

const ServiceCard = ({ title, image, color }) => (
  <div className={`rounded-xl p-6 shadow-md border ${color} flex flex-col justify-between border-b-5`}>
    <div className="mb-4 flex flex-wrap">
      <h3 className="font-semibold text-xl bg-lime-300 inline-block px-2 py-1 rounded mb-2 h-18 w-40">{title}</h3>
      <img src={image} alt={title} className="h-32 mx-auto mb-4" />
    </div>
    <button className="flex items-center gap-2 text-black font-medium">
      <ArrowUpRight size={18} className="bg-black text-white rounded-full p-1" />
      Learn more
    </button>
  </div>
);

const Page2 = () => {
  return (
    <section className="px-8 py-12">
      <h2 className="text-xl font-bold mb-2 bg-lime-300 inline-block px-2 py-1 rounded">Services</h2>
      <p className="text-gray-700 max-w-2xl mb-8">
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          title="Search engine optimization"
          image= {image1}
          color="bg-white"
        />
        <ServiceCard
          title="Pay-per-click advertising"
          image={image2}
          color="bg-lime-200"
        />
      </div>
    </section>
  );
};

export default Page2;
