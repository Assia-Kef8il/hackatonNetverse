const StatsBoxes = () => {
  const stats = [
    {
      number: "+10k",
      label: "happy customers",
      bg: "bg-gym-soft-1",
      textColor: "text-gym-dark-1"
    },
    {
      number: "20",
      label: "years experience",
      bg: "bg-gym-button",
      textColor: "text-white"
    },
    {
      number: "20",
      label: "expert coaches",
      bg: "bg-gym-dark-1",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`${stat.bg} ${stat.textColor} rounded-3xl p-12 text-center space-y-2`}
          >
            <div className="text-5xl font-black">{stat.number}</div>
            <div className="text-lg font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBoxes;
