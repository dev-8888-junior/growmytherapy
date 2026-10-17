
const principles = [
  {
    number: "01",
    title: "Start with your experience",
    description:
      "We'll take time to understand what's bringing you to therapy, what's been weighing on you, and what you hope might change. Your perspective helps shape the work we do together.",
  },
  {
    number: "02",
    title: "Build tools that fit your life",
    description:
      "Depending on your needs, our work may draw on cognitive behavioral therapy, mindfulness, and body-oriented techniques to help you notice patterns and respond to stress differently.",
  },
  {
    number: "03",
    title: "Move at a pace that feels manageable",
    description:
      "When working with difficult past experiences, safety and emotional regulation come first. We'll pay attention to what feels manageable and develop a foundation for deeper work rather than rushing the process.",
  },
];

export default function Approach() {
  return (
   <section id="approach" className="section bg-[var(--background)]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <span className="eyebrow">How we work together</span>

            <h2 className="section-heading mt-6">
              Therapy should meet you where you are.
            </h2>

<p className="mt-6 max-w-lg text-base leading-8 text-[#354943] sm:text-[17px]">
  You bring your experiences, questions, and hopes. I bring a
  collaborative space to explore them, along with approaches that
 can help us understand what you&apos;re facing and decide what may be
useful.
</p>


           
<p className="mt-5 max-w-lg text-base leading-8 text-[#354943] sm:text-[17px]">
  There isn&apos;t a single path that works for everyone. We&apos;ll pay
  attention to your needs, make room for reflection, and work
  toward changes that feel meaningful in your everyday life.
</p>


            <a href="#contact" className="button mt-8">
              Start a conversation
              <span aria-hidden="true">→</span>
            </a>

            <p className="mt-5 text-xs leading-6 text-[var(--muted)]">
              In-person in Santa Monica · Secure telehealth across California
            </p>
          </div>

          <div className="border-t border-[var(--border)]">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-3 border-b border-[var(--border)] py-7 sm:grid-cols-[56px_1fr] sm:gap-5 sm:py-9"
              >
                <span className="font-serif text-2xl text-[var(--accent)]">
                  {principle.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.03em] text-[var(--primary)] sm:text-[28px]">
                    {principle.title}
                  </h3>

                 
<p className="mt-4 text-base leading-8 text-[#354943] sm:text-[17px]">
  {principle.description}
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
