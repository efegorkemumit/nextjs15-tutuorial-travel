import RecentProduct from "@/components/sections/recent/RecentProduct";
import Image from "next/image";
import Hero from "./_components/Hero/Hero";
import SectionOne from "./_components/Section/SectionOne";

export default function Home() {
  return (
    
    <div>
      <Hero/>
      <div className="min-h-24"></div>

      <SectionOne/>
      <div className="min-h-96"></div>
      <RecentProduct/>
      
      <div className="min-h-96"></div>

    </div>
  );
}
