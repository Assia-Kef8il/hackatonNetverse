import scheduleImage from "@/assets/schedule-table.jpg";

const WeeklySchedule = () => {
  return (
    <section className="py-12 px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gym-dark-1">
          Weekly Schedule Preview
        </h2>
        
        <div className="bg-gym-soft-1 rounded-3xl p-8 shadow-lg">
          <img 
            src={scheduleImage} 
            alt="Weekly Workout Schedule" 
            className="rounded-2xl w-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;
