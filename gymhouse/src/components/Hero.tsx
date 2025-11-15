import heroImage from "@/assets/gym-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <img 
        src={heroImage} 
        alt="GymHouse Facility" 
        className="w-full h-full object-cover"
      />
      
      {/* Yellow GymHOUSE text overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-8xl font-black tracking-wider text-yellow-400 opacity-80" 
            style={{ textShadow: '3px 3px 0px rgba(59, 130, 246, 0.8)' }}>
          Gym<span className="text-white">HOUSE</span>
        </h1>
      </div>
      
      {/* Welcome card overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md">
        <div className="bg-gym-dark-2/90 backdrop-blur-md rounded-2xl p-8 text-center border border-gym-soft-2/20">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome Back, Mohamed 👋
          </h2>
          <p className="text-gym-soft-2 text-sm">
            Your fitness journey continues...
          </p>
          <p className="text-gym-soft-2 text-sm">
            Stay consistent, stay strong!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
