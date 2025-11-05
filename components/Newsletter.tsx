export default function Newsletter() {
  return (
    <>
      {/* Trusted Partners Section - Outside green box */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm uppercase tracking-widest mb-8 text-gray-500">TRUSTED PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Capsule', 'Biosynthesis', 'Galileo', 'Spherule', 'FocalPoint', 'Galileo', 'Nietzsche'].map((partner, index) => (
              <div key={index} className="text-gray-400 opacity-50 hover:opacity-100 transition-opacity text-lg font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Newsletter Section - Figma green-gray background */}
  <section className="py-20 bg-[#0A1F1A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 leading-tight">
              GET EXCLUSIVE OFFERS,<br />
              EVENT UPDATES, AND INSIDER NEWS
            </h2>
            
            <div className="mt-8 max-w-md mx-auto space-y-4">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full px-6 py-4 rounded bg-white text-primary focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded font-medium transition-colors uppercase tracking-wider">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
