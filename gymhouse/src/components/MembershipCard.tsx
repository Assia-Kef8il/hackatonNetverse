import { Button } from "@/components/ui/button";

const MembershipCard = () => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gym-dark-1">
          Membership Status Card
        </h2>
        
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gym-soft-1 rounded-2xl p-6 space-y-2">
              <h3 className="font-bold text-gym-dark-1 text-lg">Your Membership</h3>
              <p className="text-gym-dark-1/70">
                You're all set — enjoy{" "}
                <span className="text-primary font-semibold">unlimited access.</span>
              </p>
            </div>
            
            <div className="bg-gym-light-bg rounded-2xl p-6 space-y-2">
              <h3 className="font-bold text-gym-dark-1 text-lg">Days remaining</h3>
              <p className="text-primary text-2xl font-bold">15 days left</p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <p className="text-sm text-gym-dark-1/60 font-medium">CTA button</p>
            <Button className="bg-gym-soft-1 text-primary hover:bg-gym-soft-2 rounded-full px-8 py-6 text-base font-semibold">
              📅 Renew Subscription
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCard;
