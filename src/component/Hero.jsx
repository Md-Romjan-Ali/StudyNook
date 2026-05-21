import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const HeroPage = () => {
  return (
    <div
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,10,25,0.85), rgba(25,10,35,0.9)), url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="hero max-w-300 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">

          <Image
            width={400}
            height={400}
            alt="hero image"
            src="https://thumbs.dreamstime.com/b/old-book-magic-lights-vintage-table-68635545.jpg"
            className="rounded-3xl shadow-2xl border border-gray-700"
          />

          <div className="flex-1">
            <div className="badge badge-secondary mb-4 p-4">
              Quiet • Modern • Comfortable
            </div>

            <h1 className="md:text-6xl text-4xl font-extrabold leading-tight text-gray-200">
              <span className='text-red-900 italic'>Find</span> Your Perfect <br />
              <span className='text-blue-800 italic'> Study</span> Space
            </h1>

            <p className="py-6 text-gray-300 max-w-2xl text-lg">
              Discover peaceful and modern study rooms designed for focus,
              productivity, and creativity. Book your ideal learning space anytime.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href={"/all-rooms"}>
                <button className="btn btn-primary rounded-2xl px-8">
                  Explore Rooms
                </button>
              </Link>

              <button className="btn btn-outline btn-secondary rounded-2xl px-8">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;