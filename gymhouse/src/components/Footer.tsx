const Footer = () => {
  return (
    <footer className="bg-gym-dark-2 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-md transform rotate-45"></div>
            </div>
            <span className="font-bold text-xl">GymHouse</span>
          </div>
          <p className="text-gym-soft-2 text-sm">
            Your Gym. Smarter.
            <br />
            Better. Faster.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Home</h4>
          <ul className="space-y-2 text-gym-soft-2 text-sm">
            <li>About this platform</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact us</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gym-soft-2 text-sm">
            <li>Support</li>
            <li>Reviews</li>
            <li>Meet the team</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-gym-soft-2 text-sm">
            <li>Call us: +1-888-000-0000</li>
            <li>Email: info@nextgate.com</li>
            <li>Address: Egypt - Cairo</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gym-dark-1 text-center text-gym-soft-2 text-sm">
        © 2025 NextGate. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
