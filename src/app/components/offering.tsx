import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";

export function OfferingsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 bg-gray-50 w-full max-w-screen">
      {/* Vertical line for desktop, hidden on small screens */}
      <div className="hidden md:block w-[3px] h-auto bg-gray-800 ml-5" />

      <section className="py-10 md:py-16 px-2 md:px-4 w-full">
        <div className="max-w-7xl mx-auto text-gray-900">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-8xl font-bold text-gray-300 mb-4 md:mb-8 pr-0 md:pr-4">
              OUR OFFERINGS
            </h2>
          </div>

          {/* Bootcamp Offerings */}
          <div className="grid gap-6 md:gap-8 mb-12 md:mb-16 mt-6 md:mt-30 grid-cols-1 md:grid-cols-2">
            <div className="relative space-y-4">
              {/* Bootcamp badge: repositioned for small screens */}
              <div className="flex  xs:flex-row items-start xs:items-center mb-2 md:absolute md:-left-5 md:-top-20">
                <Image
                  src="/assets/offering1.svg"
                  alt="logo"
                  width={60}
                  height={60}
                />
                <div className="flex items-center xs:ml-2 pt-3">
                  <span className="text-base md:text-lg font-bold mb-1">
                    Job Bootcamp
                  </span>
                  <span className="text-xs md:text-sm ml-2 bg-slate-200 text-black px-2 pt-1 rounded-r-3xl">
                    For graduates
                  </span>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl shadow">
                {/* Top Section */}
                <div className="flex items-center space-x-2 md:space-x-4 p-3 md:p-5">
                  <Image
                    src={"/assets/job1.svg"}
                    alt="logo"
                    width={60}
                    height={60}
                    className="bg-white rounded-full p-1 md:p-2"
                  />
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">
                    Full Stack Web Development with GenAI
                  </h2>
                </div>
                {/* Bottom Features */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6 text-center text-xs md:text-sm bg-white text-gray-600 p-2 md:p-3 rounded-b-2xl">
                  <div>
                    <span className="font-bold text-gray-900">140+</span>
                    <br />
                    Hrs of content
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">600+</span>
                    <br />
                    Problems
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">10k+</span>
                    <br />
                    Learners
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-100 rounded-2xl shadow">
                <div className="flex items-center space-x-2 md:space-x-4 p-3 md:p-5">
                  <Image
                    src={"/assets/job2.svg"}
                    alt="logo"
                    width={60}
                    height={60}
                    className="bg-white rounded-full p-1 md:p-2"
                  />
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">
                    Data Analytics with GenAI
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-600 bg-white p-2 md:p-3 rounded-b-2xl">
                  <div>
                    <span className="font-bold text-gray-900">100+</span>
                    <br />
                    Hrs of content
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">300+</span>
                    <br />
                    Problems
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">2000+</span>
                    <br />
                    Learners
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IIT Certifications */}
          <div className="space-y-4 bg-orange-50 p-3 md:p-6 rounded-lg">
            <div className="flex flex-col xs:flex-row items-start xs:items-center mb-4">
              <Image
                src="/assets/offering2.svg"
                alt="logo"
                width={32}
                height={32}
                className="mr-2 mt-1"
              />
              <span className="text-base md:text-lg font-bold ml-0 xs:ml-5 pt-1">
                IIT Certifications
              </span>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <Card>
                <CardContent>
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert3.webp"
                    className="w-full h-28 md:h-32 object-cover rounded mb-3 md:mb-4"
                    alt="Certification"
                  />
                  <h3 className="font-semibold mb-1 md:mb-2">
                    PG Certification in Data Analytics with GenAI
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
                    <span>📊</span>
                    <span>💼</span>
                    <span>📈</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-3 md:pt-6">
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert1.webp"
                    className="w-full h-28 md:h-32 object-cover rounded mb-3 md:mb-4"
                    alt="Certification"
                  />
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Advanced Certification in GenAI for Non-Tech Professionals
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
                    <span>🤖</span>
                    <span>💼</span>
                    <span>📊</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert1.webp"
                    alt="Certification"
                    className="w-full h-28 md:h-32 object-cover rounded mb-3 md:mb-4"
                  />
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Training and Internship Certification in Advanced Data
                    Science
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
                    <span>📊</span>
                    <span>🔬</span>
                    <span>💻</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-3 md:pt-6">
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert2.webp"
                    alt="Certification"
                    className="w-full h-28 md:h-32 object-cover rounded mb-3 md:mb-4"
                  />
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Training and Internship Certification in Data Science
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
                    <span>📊</span>
                    <span>🔬</span>
                    <span>💻</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-3 md:pt-6">
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert1.webp"
                    alt="Certification"
                    className="w-full h-28 md:h-32 object-cover rounded mb-3 md:mb-4"
                  />
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Training and Internship Certification in Full Stack
                    Development
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
                    <span>💻</span>
                    <span>🌐</span>
                    <span>⚡</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* New Launches */}
          <div className="mt-12 md:mt-16 space-y-6 md:space-y-8">
            <div className="flex flex-col xs:flex-row items-start xs:items-center mb-3">
              <Image
                src="/assets/offering1.svg"
                alt="logo"
                width={60}
                height={60}
                className="mt-1 xs:mt-5"
              />
              <div className="flex items-center mt-2 xs:mt-0 xs:ml-2">
                <span className="text-base md:text-lg font-bold mb-1">
                  Job Bootcamp
                </span>
                <span className="text-xs md:text-sm ml-2 bg-slate-200 text-black px-2 pt-1 rounded-r-3xl">
                  For graduates
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-10">
              <Card>
                <CardContent className="pt-4 md:pt-6">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-purple-600 font-bold text-base md:text-lg">
                      AI
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Advanced Certification in GenAI & Multi Agent Systems
                  </h3>
                  <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500">
                    <span>100+ hrs of content</span>
                    <span>300+ Problems</span>
                    <span>50k+ Learners</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 md:pt-6">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-orange-600 font-bold text-base md:text-lg">
                      QA
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Advanced Certification in QA for Non-Tech Professionals
                  </h3>
                  <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500">
                    <span>100+ hrs of content</span>
                    <span>300+ Problems</span>
                    <span>50k+ Learners</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 md:pt-6">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-green-600 font-bold text-base md:text-lg">
                      DS
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2">
                    Advanced Certification in Data Science with GenAI
                  </h3>
                  <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500">
                    <span>140+ hrs of content</span>
                    <span>600+ Problems</span>
                    <span>70k+ Learners</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
