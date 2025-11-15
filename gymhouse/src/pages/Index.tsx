import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import StatsBoxes from "@/components/StatsBoxes";
import MembershipCard from "@/components/MembershipCard";
import WeeklySchedule from "@/components/WeeklySchedule";
import AttendanceSummary from "@/components/AttendanceSummary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <StatsBoxes />
      <MembershipCard />
      <WeeklySchedule />
      <AttendanceSummary />
      <Footer />
    </div>
  );
};

export default Index;
