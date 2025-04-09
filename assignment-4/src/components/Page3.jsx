import { useState } from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

const Step = ({ step, title, description, isOpen, toggle }) => (
  <div
    className={`rounded-xl p-6 my-4 border shadow-md transition-all duration-300  border-b-5 ${
      isOpen ? 'bg-lime-200' : 'bg-white'
    }`}
  >
    {isOpen && (
      <p className="mt-4 text-sm text-gray-900 mb-4 border-t p-4 hidden md:block lg:block xl:block">
        {description}
      </p>
    )}
    <div className="flex items-baseline gap-4">
        <span className="text-4xl font-bold">{step}</span>
        <span className={`font-medium ${isOpen ? 'text-black' : 'text-gray-800'}`}>{title}</span>
      </div>
  </div>
);

const Page3 = () => {
  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <section className="px-8 py-12">
      <h2 className="text-xl font-bold mb-2 bg-lime-300 inline-block px-2 py-1 rounded">
        Our Working Process
      </h2>
      <p className="text-gray-700 mb-8">Step-by-step guide to achieving your business goals</p>

      <Step
        step="01"
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        isOpen={openStep === 1}
        toggle={() => toggleStep(1)}
      />
      <Step
        step="02"
        title="Research and Strategy Development"
        description="This step involves thorough research, competitor analysis, and strategy planning to align with your business objectives."
        isOpen={openStep === 2}
        toggle={() => toggleStep(2)}
      />
    </section>
  );
};

export default Page3;
