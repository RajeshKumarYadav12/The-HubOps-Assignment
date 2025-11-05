const testimonials = [
  {
    name: 'Jenny Bell',
    location: 'Miami',
    rating: 5,
    text: 'Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can\'t wait to return!',
  },
  {
    name: 'Savannah Nguyen',
    location: 'Riyadh',
    rating: 5,
    text: 'Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can\'t wait to return!',
  },
  {
    name: 'Courtney Henry',
    location: 'Monaco',
    rating: 5,
    text: 'Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can\'t wait to return!',
  },
  {
    name: 'Ronald Richards',
    location: 'Guinea',
    rating: 5,
    text: 'Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can\'t wait to return!',
  },
  {
    name: 'Arlene McCoy',
    location: 'Juan-les-Antibe',
    rating: 5,
    text: 'Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can\'t wait to return!',
  },
  {
    name: 'Eleanor Pena',
    location: 'Lakes and Prairies',
    rating: 5,
    text: 'Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can\'t wait to return!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 md:gap-12">
          {/* Left Side - 40% */}
          <div className="flex flex-col justify-center lg:pr-8 xl:pr-12">
            <p className="text-xs md:text-sm text-sage uppercase tracking-widest mb-2">TESTIMONIALS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-primary mb-4 md:mb-6">
              What Our Guests Say
            </h2>
            <p className="text-sage text-sm md:text-base font-light mb-6 md:mb-8">
              Exceptional Experiences, Shared by Those Who've Lived Them.
            </p>
            <button className="bg-primary text-white px-5 md:px-6 py-2.5 md:py-3 rounded hover:bg-opacity-90 transition-all text-xs md:text-sm w-fit">
              READ MORE TESTIMONIALS
            </button>
          </div>

          {/* Right Side - 60% with overlays */}
          <div className="relative">
            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none"></div>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none"></div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-primary text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-sage">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-sage mb-3 md:mb-4 line-clamp-4">{testimonial.text}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold text-sm md:text-base">★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
