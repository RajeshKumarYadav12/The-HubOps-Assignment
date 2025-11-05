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
    <section className="py-20 bg-cream relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[40%_60%] gap-12">
          {/* Left Side - 40% - Centered Vertically */}
          <div className="flex flex-col justify-center pr-12">
            <p className="text-sm text-sage uppercase tracking-widest mb-2">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-6">
              What Our Guests Say
            </h2>
            <p className="text-sage text-sm font-light mb-8">
              Exceptional Experiences, Shared by Those Who've Lived Them.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-light transition-colors text-sm w-fit">
              READ MORE TESTIMONIALS
            </button>
          </div>

          {/* Right Side - 60% with overlays */}
          <div className="relative">
            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none"></div>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none"></div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-sage"></div>
                    <div>
                      <p className="font-medium text-primary">{testimonial.name}</p>
                      <p className="text-sm text-sage">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-sage mb-4">{testimonial.text}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold">★</span>
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
