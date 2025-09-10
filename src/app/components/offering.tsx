import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
export function OfferingsSection() {
  return (
    <div className="flex gap-6 bg-gray-50 ">
      <div className="w-[3px] h-all bg-gray-800 ml-5" />
      <section className="py-16 px-4 ">
        <div className="max-w-7xl mx-auto text-gray-900">
          <div className="text-center mb-12">
            <h2 className="text-8xl font-bold text-gray-300 mb-8 pr-4">
              OUR OFFERINGS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 mt-30 ">
            <div className="space-y-4 relative ">
              <div className="flex items-center absolute -left-23 -top-30">
                <Image
                  src="/assets/offering1.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="mt-5"
                />

                <span className="text-lg font-bold mb-1">Job Bootcamp</span>
                <span className="text-sm ml-2 bg-slate-200 text-black px-2 pt-1 rounded-r-3xl">
                  For graduates
                </span>
              </div>

              <div className=" bg-slate-100  rounded-2xl shadow ">
                {/* Top Section */}
                <div className="flex items-center space-x-4 p-5">
                  {/* SVG in Circle */}

                  <Image
                    src={"/assets/job1.svg"}
                    alt="logo"
                    width={80}
                    height={80}
                    className="bg-white rounded-full p-2"
                  />

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-800">
                    Full Stack Web Development with GenAI
                  </h2>
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm bg-white text-gray-600  p-3 rounded-b-2xl">
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
              <div className=" bg-slate-100 rounded-2xl  shadow ">
                {/* Top Section */}
                <div className="flex items-center space-x-4 p-5">
                  {/* SVG in Circle */}

                  <Image
                    src={"/assets/job2.svg"}
                    alt="logo"
                    width={80}
                    height={80}
                    className="bg-white rounded-full p-2"
                  />

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-800">
                    Data Analytics with genAI
                  </h2>
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm text-gray-600 bg-white p-3 rounded-b-2xl ">
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

          <div className="space-y-8 bg-orange-50">
            <div className="flex items-center space-x-2">
              <div className="flex items-center absolute -left-0 mt-30">
                <Image
                  src="/assets/offering2.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="mt-5 "
                />

                <span className="text-lg font-bold mb-1 ml-5 pt-5 ">
                  IIT Certifications
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-30">
              <Card>
                <CardContent>
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert3.webp"
                    className="w-full h-32 object-cover rounded mb-4"
                    alt="Certification"
                  />
                  <h3 className="font-semibold mb-2">
                    PG Certification in Data Analytics with GenAI
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>📊</span>
                    <span>💼</span>
                    <span>📈</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert1.webp"
                    className="w-full h-32 object-cover rounded mb-4"
                    alt="Certification"
                  />
                  <h3 className="font-semibold mb-2">
                    Advanced Certification in GenAI for Non-Tech Professionals
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>🤖</span>
                    <span>💼</span>
                    <span>📊</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
              <br />
              <Card>
                <CardContent>
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert1.webp"
                    alt="Certification"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold mb-2">
                    Training and Internship Certification in Advanced Data
                    Science
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>📊</span>
                    <span>🔬</span>
                    <span>💻</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert2.webp"
                    alt="Certification"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold mb-2">
                    Training and Internship Certification in Data Science
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>📊</span>
                    <span>🔬</span>
                    <span>💻</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Image
                    height={100}
                    width={100}
                    src="/certificate/cert1.webp"
                    alt="Certification"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold mb-2">
                    Training and Internship Certification in Full Stack
                    Development
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    By Coding Ninjas, IIT Guwahati
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>💻</span>
                    <span>🌐</span>
                    <span>⚡</span>
                    <span className="ml-auto">6 months</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* new launches */}
          <div className="mt-16 space-y-8">
            <div className="flex items-center absolute -left-7 -mt-35">
              <Image
                src="/assets/offering1.svg"
                alt="logo"
                width={100}
                height={100}
                className="mt-5"
              />

              <span className="text-lg font-bold mb-1">Job Bootcamp</span>
              <span className="text-sm ml-2 bg-slate-200 text-black px-2 pt-1 rounded-r-3xl">
                For graduates
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-50">
              <Card>
                <CardContent className="pt-6 ">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold">AI</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    Advanced Certification in GenAI & Multi Agent Systems
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>100+ hrs of content</span>
                    <span>300+ Problems</span>
                    <span>50k+ Learners</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-orange-600 font-bold">QA</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    Advanced Certification in QA for Non-Tech Professionals
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>100+ hrs of content</span>
                    <span>300+ Problems</span>
                    <span>50k+ Learners</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-green-600 font-bold">DS</span>
                  </div>
                  <h3 className="font-semibold mb-2">
                    Advanced Certification in Data Science with GenAI
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
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
