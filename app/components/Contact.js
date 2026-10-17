
function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0"
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

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-[var(--background)]">
        <div className="rounded-t-[32px] bg-[var(--primary)] px-6 py-16 text-[var(--surface)] sm:px-10 sm:py-20 md:rounded-t-[48px] lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--accent-light)] sm:text-[11px]">
              A thoughtful next step
            </p>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
              <div>
                <h2 className="max-w-[760px] font-serif text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[1.06] tracking-[-0.045em] text-[var(--surface)]">
                  You don&apos;t have to work through everything on your own.
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-xl text-base leading-8 text-white/90 sm:text-[17px]">
                  If anxiety, difficult past experiences, or the pressure to
                  keep going has been weighing on you, therapy can offer space
                  to understand what you&apos;re experiencing and consider a way
                  forward that fits your needs.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  In-person sessions in Santa Monica and secure telehealth for
                  clients located in California.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="button !border-[var(--surface)] !bg-[var(--surface)] !text-[var(--primary)] hover:!border-[var(--accent-light)] hover:!bg-[var(--accent-light)] active:!scale-[0.98] active:!border-[var(--accent)] active:!bg-[var(--accent)] active:!text-[var(--surface)]"
                  >
                    Explore therapy <ArrowIcon />
                  </a>

                  <a
                    href="#faq"
                    className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-white/50 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--surface)] transition-[background-color,transform] duration-200 hover:bg-white/10 active:scale-[0.98] active:bg-white/20 sm:text-[11px]"
                  >
                    Read the FAQs <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f3eee8]">
        <div className="container grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-5 lg:col-span-5">
            <a
              href="#top"
              className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-offset-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)] font-serif text-xl text-[var(--primary)] transition-[transform,background-color,color] duration-300 group-hover:scale-105 group-hover:bg-[var(--accent)] group-hover:text-[var(--surface)] group-active:scale-[0.97] group-active:bg-[var(--accent)] group-active:text-[var(--surface)] motion-reduce:transition-none">
                M
              </span>

              <span>
                <span className="block font-serif text-xl leading-tight text-[var(--primary)] transition-colors group-hover:text-[var(--accent)] group-active:text-[var(--accent)]">
                  Dr. Maya Reynolds
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#354943]">
                  Psychology & Therapy
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-base leading-8 text-[#354943]">
              Collaborative therapy for adults navigating anxiety, trauma,
              burnout, and perfectionism.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--primary)]">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              <a
                className="text-sm text-[#354943] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline active:text-[var(--accent)] active:underline"
                href="#about"
              >
                About Dr. Maya
              </a>

              <a
                className="text-sm text-[#354943] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline active:text-[var(--accent)] active:underline"
                href="#services"
              >
                Therapy services
              </a>

              <a
                className="text-sm text-[#354943] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline active:text-[var(--accent)] active:underline"
                href="#approach"
              >
                Therapeutic approach
              </a>

              <a
                className="text-sm text-[#354943] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline active:text-[var(--accent)] active:underline"
                href="#office"
              >
                Our office
              </a>

              <a
                className="text-sm text-[#354943] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline active:text-[var(--accent)] active:underline"
                href="#faq"
              >
                Frequently asked questions
              </a>
            </nav>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--primary)]">
              Practice location
            </h2>

            <p className="mt-5 text-base leading-8 text-[#354943]">
              Santa Monica, California
            </p>

            <p className="mt-2 text-base leading-8 text-[#354943]">
              In-person therapy and secure telehealth for clients located in
              California.
            </p>

            <a href="#top" className="text-link mt-6">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border)]">
          <div className="container flex flex-col gap-2 py-5 text-xs leading-6 text-[#354943] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Dr. Maya Reynolds. All rights
              reserved.
            </p>
            <p>
              Therapy in Santa Monica and throughout California via telehealth.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
