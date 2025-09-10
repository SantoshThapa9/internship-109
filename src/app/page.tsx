import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero";
import { OfferingsSection } from "@/app/components/offering";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      <HeroSection />
      <OfferingsSection />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get the tech career you deserve.{" "}
              <span className="text-orange-600">Faster.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Restricted by opportunities? Transform your career with our
              industry-leading courses and placement assistance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">128%</div>
                <div className="text-gray-600">
                  average hike via our placement cell
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">1.5 Lac+</div>
                <div className="text-gray-600">
                  learners cracked top tech companies
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900">1,400+</div>
                <div className="text-gray-600">
                  alumni in MAANG & 103 unicorn startups
                </div>
              </div>
            </div>

            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
              Find Your Course
            </button>
          </div>
        </div>
      </section>
      {/* Course Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Lets find the right course for you
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ">
                  <option>Working Professional - Technical Roles</option>
                  <option>Working Professional - Non Technical</option>
                  <option>College Student - Final Year</option>
                  <option>College Student - 1st to Pre-final Year</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic of Interest
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Full Stack Web Development</option>
                  <option>Data Analytics</option>
                  <option>Data Science</option>
                  <option>Machine Learning</option>
                  <option>Competitive Programming</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-orange-700 transition-colors">
              Find your course
            </button>
          </div>
        </div>
      </section>
      {/* Course Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              OUR OFFERINGS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Job Bootcamp */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-600">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-orange-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  Job Bootcamp
                </h3>
              </div>
              <p className="text-gray-600 mb-6">For graduates</p>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-200 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Full Stack Web Development with GenAI
                  </h4>
                  <p className="text-sm text-gray-600">
                    140+ Hrs of content • 600+ Problems • 10k+ Learners
                  </p>
                </div>
                <div className="border-l-4 border-orange-200 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Data Analytics with GenAI
                  </h4>
                  <p className="text-sm text-gray-600">
                    100+ Hrs of content • 300+ Problems • 2000+ Learners
                  </p>
                </div>
              </div>
            </div>

            {/* IIT Certifications */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  IIT Certifications
                </h3>
              </div>
              <p className="text-gray-600 mb-6">For graduates & students</p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    PG Certification in Data Analytics
                  </h4>
                  <p className="text-sm text-gray-600">
                    E&ICT Academy, IIT Guwahati • 6 months
                  </p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Advanced Certification in GenAI
                  </h4>
                  <p className="text-sm text-gray-600">
                    IITM Pravartak, TIH IIT Madras • 6 months
                  </p>
                </div>
              </div>
            </div>

            {/* New Launches */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-green-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">
                  New Launches
                </h3>
              </div>
              <p className="text-gray-600 mb-6">For graduates</p>
              <div className="space-y-4">
                <div className="border-l-4 border-green-200 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    GenAI & Multi Agent Systems
                  </h4>
                  <p className="text-sm text-gray-600">
                    100+ Hrs of content • 300+ Problems • 576+ Learners
                  </p>
                </div>
                <div className="border-l-4 border-green-200 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Data Science with GenAI
                  </h4>
                  <p className="text-sm text-gray-600">
                    140+ Hrs of content • 600+ Problems • 780+ Learners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Success Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              9 years of transforming tech careers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                1.5 Lac+
              </div>
              <div className="text-gray-600">
                learners cracked dream roles at top tech companies
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                1,400
              </div>
              <div className="text-gray-600">
                Alumni in MAANG & more in 103/111 Unicorns
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                1 Cr+
              </div>
              <div className="text-gray-600">
                highest CTC after completing the course
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                128%
              </div>
              <div className="text-gray-600">
                average hike via our placement cell
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Coding Ninjas advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Structured + problem solving based
              </h3>
              <p className="text-gray-600 text-sm">
                Learn through hands-on problem solving
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fastest 1:1 doubt support
              </h3>
              <p className="text-gray-600 text-sm">
                Get instant help when youre stuck
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Integrated prep platform
              </h3>
              <p className="text-gray-600 text-sm">
                All-in-one learning experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Profiles highlighted on Naukri
              </h3>
              <p className="text-gray-600 text-sm">
                Enhanced visibility to recruiters
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Coding Ninjas
              </h3>
              <p className="text-gray-300 mb-4">
                Transform your tech career with industry-leading courses and
                placement assistance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Offerings</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Job Bootcamp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    IIT Certifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    New Launches
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li>1800-123-3598</li>
                <li>contact@codingninjas.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Important Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Pricing & Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>
              &copy; created by{" "}
              <a
                className="hover:text-blue-600 underline"
                href="https://www.santoshthapa.xyz/home"
              >
                santosh thapa
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
