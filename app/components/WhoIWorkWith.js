
const experiences = [
  {
    number: "01",
    title: "When your mind won't switch off",
    description:
      "You replay conversations, anticipate what could go wrong, or find it difficult to rest even when everything seems fine. You want a more flexible way to respond to worry and pressure.",
  },
  {
    number: "02",
    title: "When the past still feels present",
    description:
      "Earlier experiences continue to affect your sense of safety, confidence, or relationships. You want space to understand these patterns without feeling rushed into difficult work.",
  },
  {
    number: "03",
    title: "When achievement comes at a cost",
    description:
      "You're used to meeting high expectations and being someone others can count on, but the pressure to keep going leaves you feeling depleted. You want a more sustainable relationship with success and yourself.",
  },
];

export default function WhoIWorkWith() {
  return (
    <section className="section border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow">Who I work with</span>

            <h2 className="section-heading mt-6">
              You may be managing more than others can see.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#354943] sm:text-[17px]">
              You might be doing well on the outside while feeling anxious,
              exhausted, or disconnected on the inside. Therapy offers space
              to look beyond what you manage each day and understand what you
              need.
            </p>

            <a href="#services" className="text-link mt-8">
              Explore areas of support <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="border-t border-[var(--border)]">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="grid gap-4 border-b border-[var(--border)] py-8 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-10"
              >
                <span className="font-serif text-2xl text-[var(--accent)]">
                  {experience.number}
                </span>

                <div>
                  <h3 className="max-w-lg font-serif text-[27px] leading-[1.15] tracking-[-0.035em] text-[var(--primary)] sm:text-[32px]">
                    {experience.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-8 text-[#354943] sm:text-[17px]">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
