const AttendanceSummary = () => {
  const summaryItems = [
    { label: "This Month: 12 Sessions", bg: "bg-gym-light-bg" },
    { label: "Total Visits: 54", bg: "bg-gym-soft-2" },
    { label: "Streak: 4 Days", bg: "bg-gym-soft-1" }
  ];

  return (
    <section className="py-12 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gym-dark-1">
          Attendance & Progress Summary
        </h2>
        
        <div className="space-y-4">
          {summaryItems.map((item, index) => (
            <div 
              key={index}
              className={`${item.bg} rounded-full py-6 px-8 text-gym-dark-1 font-semibold text-lg`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttendanceSummary;
