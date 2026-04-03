import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
export default function Header() {
  return (
    <nav className="bg-white text-slate-500 font-bold border-b border-border ">
      <div className="flex items-center justify-between  px-4 py-1">
        <div className="flex items-center space-x-13">
          <div className="flex items-center space-x-2">
            <Image src="/assets/logo.svg" alt="logo" width={150} height={150} />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Job Bootcamp</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>IT Certifications</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>New Launches</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-white p-2 h-7 text-3xl flex items-center justify-center pb-2.5">
          Login
        </Button>
      </div>
    </nav>
  );
}
