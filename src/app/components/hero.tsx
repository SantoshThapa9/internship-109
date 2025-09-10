import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/input";
import { Select, SelectItem } from "@/app/components/ui/select";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="
        bg-[url('/assets/heroBg.webp')]
        bg-cover bg-center text-white py-8 md:py-16
        flex flex-col lg:flex-row
        justify-center items-center gap-8 lg:gap-20 xl:gap-32
        px-4 sm:px-6 md:px-10
      "
    >
      <div className="space-y-10 md:space-y-15 pt-2 md:pt-5 w-full lg:w-auto">
        <div className="space-y-3 md:space-y-4 max-w-full md:max-w-[400px]">
          <p className="text-base md:text-lg font-bold bg-gradient-to-r from-green-300/60 to-yellow-400 bg-clip-text text-transparent">
            Restricted for opportunities?
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Get the tech career you deserve. Faster.
          </h1>
        </div>

        <div className="space-y-6 md:space-y-10">
          <div className="border-t border-gray-800 flex items-center space-x-2 md:space-x-3 relative ">
            <Image
              src="/assets/star.svg"
              alt="star"
              width={28}
              height={28}
              className="absolute -top-4 -left-3 hidden sm:block"
            />
            <Image
              src="/assets/check.svg"
              alt="check"
              width={40}
              height={40}
              className="border-r border-l border-gray-700 p-2 md:p-3"
            />
            <p className="text-xs md:text-base">
              128% average hike
              <span className="opacity-50 pl-1">via our placement cell</span>
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3 relative pt-2">
            <Image
              src="/assets/star.svg"
              alt="star"
              width={28}
              height={28}
              className="absolute -top-3 -right-4 hidden sm:block"
            />
            <Image
              src="/assets/check.svg"
              alt="check"
              width={40}
              height={40}
              className="border-r border-l border-gray-700 p-2 md:p-3"
            />
            <p className="text-xs md:text-base">
              1.5 Lac+ learners
              <span className="opacity-50 pl-1">
                cracked top tech companies
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3 relative border-t border-gray-800 ">
            <Image
              src="/assets/star.svg"
              alt="star"
              width={28}
              height={28}
              className="absolute -bottom-3 -left-3 hidden sm:block"
            />
            <Image
              src="/assets/check.svg"
              alt="check"
              width={40}
              height={40}
              className="border-r border-l border-gray-700 p-2 md:p-3"
            />
            <p className="text-xs md:text-base">
              1,400+ alumni in MAANG
              <span className="opacity-50 pl-1">& 103 unicorn startups</span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 0 0 6px black, 0 0 0 8px gray, 0 0 10px 6px  #f3f4f6",
        }}
        className="
          bg-white text-gray-900 p-4 sm:p-6 rounded-2xl shadow-xl
          w-full max-w-sm
        "
      >
        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
          Lets find the right course for you
        </h3>

        <div className="space-y-4">
          <div className="pb-1">
            <label className="text-xs md:text-sm font-medium pb-2 opacity-50 block">
              Experience
            </label>
            <div className="space-y-3 md:space-y-5 pt-2 md:pt-4">
              <div className="flex items-center space-x-2">
                <input type="radio" name="course" className="w-4 h-4" />
                <span className="text-xs md:text-sm">
                  Working Professional - Technical Roles
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="course" className="w-4 h-4" />
                <span className="text-xs md:text-sm">
                  Working Professional - Non Technical
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="course" className="w-4 h-4" />
                <span className="text-xs md:text-sm">
                  College Student - Final Year
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="course" className="w-4 h-4" />
                <span className="text-xs md:text-sm">
                  College Student - 1st to Pre-final Year
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="course" className="w-4 h-4" />
                <span className="text-xs md:text-sm">Others</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium opacity-50">
              Highest Qualification
            </label>
            <Select>
              <SelectItem value="btech">B.Tech</SelectItem>
              <SelectItem value="mtech">M.Tech</SelectItem>
              <SelectItem value="bca">BCA</SelectItem>
              <SelectItem value="mca">MCA</SelectItem>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium opacity-50">
              Name
            </label>
            <Input placeholder="Enter your name" />
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium opacity-50">
              Phone Number
            </label>
            <Input placeholder="Enter phone number" />
          </div>

          <div className="space-y-1">
            <label className="text-xs md:text-sm font-medium opacity-50">
              Email
            </label>
            <Input placeholder="Enter your email" />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
            Find your course
          </Button>

          <p className="text-[9px] text-gray-500 text-left">
            I authorise Coding Ninjas to contact me with course updates & offers
            via Email/SMS/Whatsapp/Call. I have read and agree to
            <span className="underline cursor-pointer">
              {" "}
              Privacy Policy & Terms of use
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
