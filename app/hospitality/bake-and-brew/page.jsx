import HospitalityNavbar from '@/app/HospitalityNavbar';
import HospitalityFooter from '@/app/HospitalityFooter';
import React from 'react';

const RuhunuResort = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
        <HospitalityNavbar/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/bake.jpeg" 
            alt="Luxury Resort" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a4a4a]/80"></div>
        
        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-wide">
            Bake & Brew
          </h1>
          <button className="bg-[#d4a574] hover:bg-[#c19660] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
          <a href='/hospitality' >
            Discover More
          </a>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <p className="text-[#6b6b6b] uppercase tracking-wider text-sm mb-4">
                  About Bake & Brew
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-[#4a4a4a] leading-tight mb-8">
                  A unique cafe combining  <br />
                  a bakery and dessert shop <br />
                    with a coffee shop
                </h2> 
              </div>
              
              <div className="space-y-6 text-[#6b6b6b] text-lg leading-relaxed">
                <p>
                    Bake & Brew introduces an exciting fusion of a live bakery and a café. From signature cakes and pastries to premium teas and rich coffees, everything is freshly made with quality ingredients. It's the perfect place for a casual meet-up, an afternoon snack, or simply to treat yourself.
                </p>
                
                <p>
Whether you’re here for a creamy latte or a slice of chocolate indulgence, you’ll always find warmth and comfort. Bake & Brew is a famous stop for travellers who go from the South of Sri Lanka to the East or Center to places like Yala, Arugambay, Nuwara-eliya and Ella.
                </p>
             
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="rounded-2xl h-96 md:h-[500px] shadow-2xl overflow-hidden">
                <img 
                  src="/bake5.png" 
                  alt="Premium Resort Accommodation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Cards Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#e8e0d8]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#4a4a4a] mb-6">
              Gallery
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
              Discover exceptional experiences and world-class amenities at Bake & Brew.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className=" relative overflow-hidden">
                <img 
                  src="/bake2.jpg" 
                  alt="Recreational Activities" 
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>

            {/* Experience Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className=" relative overflow-hidden">
                <img 
                  src="/bake7.jpg" 
                  alt="Cultural Experiences" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4a4a4a] mb-3">Cultural Experiences</h3>
                <p className="text-[#6b6b6b] mb-4">
                  Immerse yourself in authentic Sri Lankan culture and traditional experiences
                </p>
              </div> */}
            </div>

            {/* Experience Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className=" relative overflow-hidden">
                <img 
                  src="/bake.jpeg" 
                  alt="Wellness & Spa" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              
              {/* <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4a4a4a] mb-3">Wellness & Spa</h3>
                <p className="text-[#6b6b6b] mb-4">
                  Rejuvenate with traditional Ayurvedic treatments and modern spa facilities
                </p>
                <button className="text-[#a8c4a2] font-medium hover:text-[#8fb087] transition-colors">
                  Learn More →
                </button>
              </div> */}
            </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className=" relative overflow-hidden">
                <img 
                  src="/bake3.jpg" 
                  alt="Wellness & Spa" 
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className=" relative overflow-hidden">
                <img 
                  src="/bake5.png" 
                  alt="Wellness & Spa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className=" relative overflow-hidden">
                <img 
                  src="/bake6.png" 
                  alt="Wellness & Spa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Dining Section */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
            {/* Image placeholder */}
            {/* <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl h-96 md:h-[500px] shadow-2xl overflow-hidden">
                <img 
                  src="/resort.jpeg" 
                  alt="Global Dining Experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-80">Global Dining Experience</p>
                </div>
              </div>
            </div> */}

            {/* Text Content */}
            {/* <div className="space-y-8 order-1 lg:order-2">
              <div>
                <p className="text-[#6b6b6b] uppercase tracking-wider text-sm mb-4">
                  Culinary Experience
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-[#4a4a4a] leading-tight mb-8">
                  Global Cuisine<br />
                  Exceptional<br />
                  Service
                </h2>
              </div>
              
              <div className="space-y-6 text-[#6b6b6b] text-lg leading-relaxed">
                <p>
                  Experience culinary excellence with our diverse menu featuring international cuisines and local 
                  specialties. Our renowned chefs craft exceptional dishes that have established Ruhunu Resort as a 
                  pioneer in delivering delicious cuisine to discerning guests.
                </p>
                
                <p>
                  From intimate fine dining to casual gatherings, our restaurants offer global choices that cater to 
                  every palate. We pride ourselves on exceptional service that transforms every meal into a memorable 
                  experience, setting the standard for hospitality excellence in the region.
                </p>
              </div>

              <button className="bg-[#d4a574] hover:bg-[#c19660] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                View Menu
              </button>
            </div> */}
          {/* </div>
        </div>
      </section> */}

      {/* CTA Section */}
   
      <HospitalityFooter />

      {/* Footer */}
     
    </div>
  );
};

export default RuhunuResort;