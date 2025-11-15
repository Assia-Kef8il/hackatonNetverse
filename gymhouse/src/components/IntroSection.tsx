import dashboardImage from "@/assets/dashboard-preview.jpg";

const IntroSection = () => {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-dark-1 leading-tight">
            Your Gym, Your Progress — in One{" "}
            <span className="text-primary">Smart Dashboard</span>
          </h2>
          <p className="text-gym-dark-1/80 text-lg leading-relaxed">
            Stay connected to your workouts, memberships, payments, and access history—all 
            from your phone. Track every session, monitor your progress, and achieve your 
            fitness goals with ease.
          </p>
        </div>
        
        <div className="relative">
          <img 
            src={dashboardImage} 
            alt="Smart Dashboard Preview" 
            className="rounded-3xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
