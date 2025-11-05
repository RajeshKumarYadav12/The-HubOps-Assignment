export default function Newsletter() {
  return (
    <>
      {/* Trusted Partners Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8 text-gray-500">TRUSTED PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {['Capsule', 'Biosynthesis', 'Galileo', 'Spherule', 'FocalPoint', 'Galileo', 'Nietzsche'].map((partner, index) => (
              <div key={index} className="text-gray-400 opacity-50 hover:opacity-100 transition-opacity text-sm md:text-base lg:text-lg font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0A1F1A] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light mb-6 md:mb-8 leading-tight px-4">
              GET EXCLUSIVE OFFERS,<br />
              EVENT UPDATES, AND INSIDER NEWS
            </h2>
            
            <div className="mt-6 md:mt-8 max-w-md mx-auto space-y-3 md:space-y-4 px-4">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded bg-white text-primary text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="w-full bg-primary hover:bg-opacity-90 text-white px-4 md:px-6 py-3 md:py-4 rounded font-medium transition-all uppercase tracking-wider text-sm md:text-base">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
