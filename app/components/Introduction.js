
export default function Introduction() {
  return (
    <section
      id="about"
      className="section border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col items-start">
            <span className="eyebrow">A space for you</span>

            <p className="mt-6 font-serif text-3xl leading-tight tracking-[-0.04em] text-[var(--primary)] sm:text-4xl">
              You don&apos;t have to keep holding everything together alone.
            </p>

            <div className="mt-8 h-px w-20 bg-[var(--accent)]" />

            <p className="mt-5 max-w-sm text-base leading-8 text-[#354943]">
              Therapy can be a place to pause, take an honest look at what
              you&apos;re carrying, and find a way forward that feels more
              sustainable.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-serif text-3xl leading-[1.2] tracking-[-0.035em] text-[var(--primary)] sm:text-4xl lg:text-[42px]">
              You can look like you&apos;re managing everything and still feel
              exhausted on the inside.
            </p>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#354943] sm:text-[17px]">
              <p>
                Maybe your mind rarely switches off. You replay conversations,
                anticipate what could go wrong, or feel pressure to get
                everything right. Even when life looks fine from the outside,
                the effort of keeping it all together can take a real toll.
              </p>

              <p>
                I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist in
                Santa Monica. I work collaboratively with adults navigating
                anxiety, trauma, burnout, and perfectionism. Together, we can
                explore the patterns that have helped you get through life,
                understand where they may no longer serve you, and build
                practical ways to respond with greater flexibility and care.
              </p>

              <p>
                Our work begins with understanding your experience, at a pace
                that respects your needs. The aim isn&apos;t to become someone else;
                it&apos;s to develop a steadier relationship with yourself and the
                life you&apos;re living.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
              <p className="font-serif text-xl italic leading-relaxed text-[var(--primary)]">
                Your experience deserves space, curiosity, and care — not
                another expectation to meet.
              </p>
            </div>

            <a href="#approach" className="text-link mt-8 self-start">
              Get to know my approach <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
