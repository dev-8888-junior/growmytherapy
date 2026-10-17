
import Image from "next/image";

export default function Office() {
  return (
    <section id="office" className="section bg-[var(--surface)]">
      <div className="container">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow">A place to pause</span>

            <h2 className="section-heading mt-6">
              A welcoming space to focus on you.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="section-copy">
              The setting for therapy matters. My Santa Monica office offers a
              quiet, private environment with natural light and a comfortable,
              uncluttered feel.
            </p>

            
<p className="section-copy mt-4">
  Whether we meet in person or through secure telehealth, our work
  can begin with space to reflect, talk openly, and explore what
  support could look like for you.
</p>

          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.12fr_0.88fr]">
          <figure className="group relative min-h-[420px] overflow-hidden rounded-[24px] border-[7px] border-[var(--background)] bg-[var(--secondary)] shadow-[0_20px_60px_rgba(38,59,54,0.10)] sm:min-h-[500px] lg:min-h-[620px]">
            <Image
              src="/images/office1.jpeg"
              alt="Interior of Dr. Maya Reynolds's Santa Monica therapy office"
              fill
              sizes="(max-width: 1023px) 100vw, 56vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <figcaption className="absolute bottom-4 left-4 max-w-[calc(100%-32px)] rounded-xl border border-white/70 bg-[var(--surface)]/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:px-6">
              <p className="font-serif text-xl leading-tight text-[var(--primary)] sm:text-2xl">
                A little room to breathe.
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                A comfortable setting for in-person sessions.
              </p>
            </figcaption>
          </figure>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <figure className="group relative min-h-[270px] overflow-hidden rounded-[24px] bg-[var(--secondary)] sm:min-h-[330px] lg:min-h-[300px]">
              <Image
                src="/images/office2.jpeg"
                alt="A view of the office environment at Dr. Maya Reynolds's practice"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <figcaption className="absolute bottom-4 left-4 rounded-lg bg-[var(--surface)]/95 px-4 py-3 text-xs font-semibold tracking-wide text-[var(--primary)] shadow-sm backdrop-blur-sm">
                A quiet space for reflection
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between rounded-[24px] bg-[var(--primary)] p-7 text-[var(--surface)] sm:p-8 lg:p-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent-light)]">
                  Finding the right setting
                </p>

                <h3 className="mt-5 max-w-md font-serif text-3xl leading-[1.12] tracking-[-0.04em] sm:text-4xl">
                  In-person or online, with room to focus.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/80">
                  Choose the format that fits your circumstances. My practice
                  offers in-person sessions in Santa Monica and secure
                  telehealth for clients located in California.
                </p>
              </div>

              <div className="mt-8 border-t border-white/20 pt-6">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--accent-light)]">
                      In person
                    </p>
                    <p className="mt-1 text-sm text-white/90">
                      Santa Monica, California
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--accent-light)]">
                      Telehealth
                    </p>
                    <p className="mt-1 text-sm text-white/90">
                      Clients located throughout California
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="button button-secondary mt-7 !border-[var(--surface)] !bg-[var(--surface)] !text-[var(--primary)] hover:!border-[var(--accent-light)] hover:!bg-[var(--accent-light)]"
                >
                  Explore your next step
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
