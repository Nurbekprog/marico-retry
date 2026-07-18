import "./WhySection.scss";

const benefits = [
  {
    icon: "🙂",
    title: "Reduced Anxiety",
    description: "Never worry about loosing your audience.",
  },
  {
    icon: "😃",
    title: "Lower Workload",
    description: "Just share one link. We'll handle the rest.",
  },
  {
    icon: "🥳",
    title: "More Time",
    description: "Spend less time on marketing tools",
  },
];

const WhySection = () => {
  return (
    <section className="why-section container" aria-labelledby="why-title">
      <h2 id="why-title">Why Creators Love Marico</h2>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <div className="benefit-heading">
              <span className="benefit-icon" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3>{benefit.title}</h3>
            </div>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
