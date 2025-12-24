import Image from "next/image";

export default function NGOImpactSection() {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            On-Ground Impact
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600 text-base md:text-lg">
            Real-world exposure that goes beyond classrooms. Our students work
            on-ground with NGOs, gaining practical insight into social impact,
            governance, sustainability, and community-driven initiatives.
          </p>
        </div>

        {/* NGO Visit Gallery */}
        <div className="mb-14">
          <h3 className="text-xl font-medium text-gray-800 mb-6">
            On-Ground Experience Gallery
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Replace src with your images */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/ccn.png"
                alt="Student NGO Visit"
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/ccn2.png"
                alt="NGO Field Experience"
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/gos.png"
                alt="Students at NGO"
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/gos1.png"
                alt="NGO Learning Session"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/oneworld.jpg"
                alt="NGO Learning Session"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/oneworld1.png"
                alt="NGO Learning Session"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/ngo.png"
                alt="NGO Learning Session"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/launchpad/ngo/ngo1.png"
                alt="NGO Learning Session"
                className="object-cover"
              />
            </div>
         
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-6">
            Certificates & Recognition
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Replace src with certificate images */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden border bg-gray-50">
              <Image
                src="/launchpad/cert/img1.png"
                alt="NGO Certificate"
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="relative w-full h-96 rounded-lg overflow-hidden border bg-gray-50">
              <Image
                src="/launchpad/cert/img2.png"
                alt="Student Recognition Certificate"
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="relative w-full h-96 rounded-lg overflow-hidden border bg-gray-50">
              <Image
                src="/launchpad/cert/img3.png"
                alt="NGO Program Certificate"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden border bg-gray-50">
              <Image
                src="/launchpad/cert/img4.png"
                alt="NGO Program Certificate"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
