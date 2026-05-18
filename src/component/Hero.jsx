import Image from 'next/image';
import React from 'react';

const HeroPage = () => {
    return (
        <div className='bg-[linear-gradient(90deg,rgba(31,28,105,1)_0%,rgba(110,35,35,1)_50%,rgba(150,30,48,1)_100%)] py-20'>
            <div className="hero max-w-300 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
    width={300}
    height={300}
    alt='hero image'
      src="https://thumbs.dreamstime.com/b/old-book-magic-lights-vintage-table-68635545.jpg"
      className="rounded-lg shadow-2xl flex-1"
    />
    <div className='flex-1'>
      <h1 className="md:text-5xl text-3xl font-bold text-gray-300">Find Your Perfect Study Room</h1>
      <p className="py-6 text-gray-400">
       Find the perfect quiet space to focus, learn, and grow. Browse comfortable study rooms with peaceful environments, modern facilities, and everything you need for productive study sessions.
      </p>
     <div className='flex gap-4'>
         <button className="btn btn-accent">Explore more</button>
      <button className="btn btn-accent btn-outline">Get Started</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default HeroPage;