import Faqs from "@/components/Faqs";
import HeroSection from "@/components/Hero";
import MeetingsSection from "@/components/MeetingSeaction";
import MeetingSteps from "@/components/MeetingSteps";
import RealTimeTranscription from "@/components/RealTimeSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <MeetingsSection/>
   <MeetingSteps/>
   <RealTimeTranscription/>
   <Faqs/>
   </>
  );
}
