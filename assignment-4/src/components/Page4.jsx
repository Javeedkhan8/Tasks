import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
];

const Page4 = () => {
  return (
    <section className="bg-zinc-900 text-white py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 inline-block px-3 py-1 bg-lime-300 text-black rounded">
          Testimonials
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mb-8">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>

        <div className="relative bg-zinc-800 rounded-3xl p-6 sm:p-10 shadow-lg border border-yellow-400 max-w-3xl mx-auto mb-6">
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            {testimonials[0].text}
          </p>
          <div className="text-left mt-6">
            <p className="text-lime-300 font-semibold">{testimonials[0].author}</p>
            <p className="text-sm text-gray-400">{testimonials[0].role}</p>
          </div>
        </div>

     
        <div className="flex items-center justify-center gap-4 text-white">
          <ArrowLeft className="cursor-pointer" />
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          </div>
          <ArrowRight className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Page4;
