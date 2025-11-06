import Faqs from "@/components/Faqs";
import HeroSection from "@/components/Hero";
import MeetingsSection from "@/components/MeetingSeaction";
import MeetingSteps from "@/components/MeetingSteps";
import NoBotsSection from "@/components/NoBotsSection";
import RealTimeTranscription from "@/components/RealTimeSection";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <MeetingsSection/>
   <MeetingSteps/>
   <NoBotsSection/>
   <RealTimeTranscription/>
   <Faqs/>
   </>
  );
}
