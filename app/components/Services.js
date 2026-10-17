
const services = [
  {
    number: "01",
    category: "Anxiety & stress",
    title: "Anxiety Therapy in Santa Monica",
    description:
      "When worry, panic, or racing thoughts make it difficult to switch off, therapy can help you understand these patterns. Together, we'll develop practical coping skills and explore ways to respond to stress with greater flexibility and confidence.",
    details: ["Worry", "Panic", "Overthinking"],
  },
  {
    number: "02",
    category: "Past experiences",
    title: "Trauma Therapy in Santa Monica",
    description:
      "Past experiences can continue to affect your relationships, confidence, and sense of safety. We'll work at a pace that respects your needs, with attention to stabilization, emotional regulation, and approaches that may include EMDR, mindfulness, and body-oriented techniques.",
    details: ["Safety", "Regulation", "EMDR"],
  },
  {
    number: "03",
    category: "Pressure & expectations",
    title: "Burnout & Perfectionism Therapy",
    description:
      "When you're used to meeting high expectations, resting can feel difficult and slowing down can bring its own pressure. Therapy can help you recognize these patterns, build self-compassion, and work toward a healthier relationship with achievement and well-being.",
    details: ["High expectations", "Burnout", "Balance"],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section bg-[var(--secondary)]"
    >
      <div className="container">
        <div className="grid gap-7 md:grid-cols-[1.05fr_0.75fr] md:items-end md:gap-14">
          <div>
            <span className="eyebrow">Areas of support</span>

            <h2 className="section-heading mt-6">
              Different challenges. A space to understand yours.
            </h2>
          </div>

          <div className="md:pb-2">
            <p className="section-copy max-w-lg">
             You don&apos;t need to have everything figured out before beginning
              therapy. We can start with what&apos;s happening in your life now and
              explore what might help you feel more grounded.
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">
              Individual therapy for adults
            </p>
          </div>
        </div>

       <div className="mt-12 border border-[var(--border)] bg-[var(--border)] sm:mt-16">
          <div className="grid gap-px md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
              
className= "group flex min-h-[430px] flex-col bg-[var(--surface)] p-7 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-[#fffaf4] hover:shadow-[0_16px_40px_rgba(38,59,54,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-9 lg:p-10"

              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-3xl tracking-[-0.04em] text-[var(--accent)]">
                    {service.number}
                  </span>

                  <span className="border border-[var(--border)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {service.category}
                  </span>
                </div>

                <div className="mt-9">
                  <h3 className="max-w-[330px] font-serif text-[30px] leading-[1.12] tracking-[-0.04em] text-[var(--primary)] lg:text-[32px]">
                    {service.title}
                  </h3>

                  
<p className="mt-5 text-base leading-8 text-[#354943] sm:text-[17px]">
  {service.description}
</p>

                </div>

                <div className="mt-auto pt-8">
                  
<div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-[var(--border)] pt-5">
  {service.details.map((detail) => (
    <span
      key={detail}
      className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.07em] text-[var(--foreground)]"
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
      />
      {detail}
    </span>
  ))}
</div>


                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.11em] text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Explore this area
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
         
<p className="max-w-2xl text-base leading-8 text-[#354943]">
  Every person&apos;s experience is different. Therapy is collaborative,
  and the work is shaped around your circumstances and needs.
</p>

          <a href="#approach" className="text-link shrink-0 self-start sm:self-auto">
            How we work together <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
