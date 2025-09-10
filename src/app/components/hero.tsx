import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/input";
import { Select, SelectItem } from "@/app/components/ui/select";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-[url('/assets/heroBg.webp')]  bg-cover bg-center text-white py-16 px-4 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 ">
        <div className="space-y-15 pl-5 pt-5">
          <div className="space-y-4">
            <p className="text-lg font-bold bg-gradient-to-r from-green-300/60 to-yellow-400 bg-clip-text text-transparent">
              Restricted for opportunities?
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Get the tech career you deserve. Faster.
            </h1>
          </div>

          <div className="space-y-20">
            <div className=" border-t  border-gray-800 flex items-center space-x-3  relative">
              <Image
                src="/assets/star.svg"
                alt="star"
                width={35}
                height={35}
                className="absolute -top-4 -left-4"
              />
              <Image
                src="/assets/check.svg"
                alt="check"
                width={50}
                height={50}
                className="border-r border-l border-gray-700 p-3"
              />
              <p>
                128% average hike
                <span className="opacity-50 pl-1">via our placement cell</span>
              </p>
            </div>
            <div className="flex items-center space-x-3 relative">
              {" "}
              <Image
                src="/assets/star.svg"
                alt="star"
                width={35}
                height={35}
                className="absolute  -top-4 -right-5"
              />
              <Image
                src="/assets/check.svg"
                alt="check"
                width={50}
                height={50}
                className="border-r border-l border-gray-700 p-3"
              />
              <p>
                1.5 Lac+ learners
                <span className="opacity-50 pl-1">
                  cracked top tech companies
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-3 relative border-t  border-gray-800">
              {" "}
              <Image
                src="/assets/star.svg"
                alt="star"
                width={35}
                height={35}
                className="absolute -bottom-4 -left-4"
              />
              <Image
                src="/assets/check.svg"
                alt="check"
                width={50}
                height={50}
                className="border-r border-l border-gray-700 p-3"
              />
              <p>
                1,400+ alumni in MAANG
                <span className="opacity-50 pl-1">& 103 unicorn startups</span>
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            boxShadow:
              "0 0 0 10px black, 0 0 0 12px gray, 0 0 15px 10px  #f3f4f6",
          }}
          className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl w-100 "
        >
          <h3 className="text-xl font-semibold mb-6">
            Lets find the right course for you
          </h3>

          <div className="space-y-4">
            <div className="pb-2">
              <label className="text-sm font-medium pb-5 opacity-50">
                Experience
              </label>
              <div className="space-y-5 pt-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" name="course" className="w-4 h-4" />
                  <span className="text-sm">
                    Working Professional - Technical Roles
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="course" className="w-4 h-4" />
                  <span className="text-sm">
                    Working Professional - Non Technical
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="course" className="w-4 h-4" />
                  <span className="text-sm">College Student - Final Year</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="course" className="w-4 h-4" />
                  <span className="text-sm">
                    College Student - 1st to Pre-final Year
                  </span>
                </div>{" "}
                <div className="flex items-center space-x-2">
                  <input type="radio" name="course" className="w-4 h-4" />
                  <span className="text-sm">Others</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-50">
                Highest Qualification
              </label>
              <Select>
                <SelectItem value="btech">B.Tech</SelectItem>
                <SelectItem value="mtech">M.Tech</SelectItem>
                <SelectItem value="bca">BCA</SelectItem>
                <SelectItem value="mca">MCA</SelectItem>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-50">Name</label>
              <Input placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-50">
                Phone Number
              </label>
              <Input placeholder="Enter phone number" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-50">Email</label>
              <Input placeholder="Enter your email" />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
              Find your course
            </Button>

            <p className="text-[9px] text-gray-500  text-left">
              I authorise Coding Ninjas to contact me with course updates &
              offers via Email/SMS/Whatsapp/Call. I have read and agree to
              <span className="underline cursor-pointer">
                {" "}
                Privacy Policy & Terms of use
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
