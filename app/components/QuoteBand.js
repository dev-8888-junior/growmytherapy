
export default function QuoteBand() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--accent-light)] py-20 sm:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-[950px] text-center">
          <span className="eyebrow justify-center">
            A guiding belief
          </span>

          <h2 className="mt-8 font-serif text-[34px] leading-[1.16] tracking-[-0.045em] text-[var(--primary)] sm:text-5xl lg:text-[64px]">
            Therapy isn&apos;t about becoming someone else. It&apos;s about
            understanding yourself with greater care.
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-[var(--accent)]" />

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#354943] sm:text-[17px]">
            You can make space for your experiences, understand the patterns
            that shape your life, and work toward a way forward that feels
            more sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
