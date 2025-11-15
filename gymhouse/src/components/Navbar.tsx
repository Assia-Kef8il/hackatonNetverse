import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gym-soft-1 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-md transform rotate-45"></div>
        </div>
        <span className="text-gym-dark-1 font-medium text-sm">welcome to gymhouse.</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-gym-dark-1 hover:bg-gym-soft-2">
          Login <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button className="bg-gym-button text-white hover:bg-gym-accent-1 rounded-full px-6">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
