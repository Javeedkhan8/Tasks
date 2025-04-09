import heroImage from '../assets/Illustration.png';
import amazon from "../assets/Company logo.png"
import dribble from "../assets/Vector.png"
import hubspot from "../assets/Company logo (4).png"
import Notion from "../assets/Company logo (1).png"
import netflix from "../assets/Company logo (2).png"
import zoom from "../assets/Company logo (3).png"

const clients = [amazon,dribble,hubspot,Notion,netflix,zoom];

const Page1 = () => {
  return (
    <div>
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-6">
          Navigating the digital landscape for success
        </h1>
        <p className="text-gray-600 mb-6">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Book a consultation
        </button>
      </div>
      <div>
        <img src={heroImage} alt="Megaphone illustration" className="w-[300px] md:w-[400px]" />
      </div>
    </section>
    <section className="flex flex-wrap justify-center items-center gap-20 px-8 py-10 ">
      {clients.map((client) => (
        <img
          key={client}
          src={client}
          alt={client}
          className="h-6 grayscale hover:grayscale-0 transition"
        />
      ))}
    </section>
    </div>
    
  );
};

export default Page1;
