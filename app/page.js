
import Image from "next/image";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Office from "./components/Office";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";  
import QuoteBand from "./components/QuoteBand";   
import WhoIWorkWith from "./components/WhoIWorkWith";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Therapy", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faq" },
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

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
      <div className="container flex min-h-[82px] items-center justify-between gap-5">
       
<a
  href="#top"
  className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-offset-4"
  aria-label="Dr. Maya Reynolds home"
>
  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)] font-serif text-xl text-[var(--primary)] transition-[transform,background-color,color] duration-300 ease-out group-hover:scale-105 group-hover:rotate-3 group-hover:bg-[var(--accent)] group-hover:text-[var(--surface)] motion-reduce:transition-none motion-reduce:group-hover:transform-none">
    M
  </span>

  <span className="flex flex-col">
    <span className="font-serif text-[19px] leading-tight tracking-[-0.04em] text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
      Dr. Maya Reynolds
    </span>

    <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--primary)]">
      Psychology & Therapy
    </span>
  </span>
</a>


        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          
{navigation.map((item) => (
  <a
    key={item.label}
    href={item.href}
    className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:text-[var(--accent)] xl:text-[11px]"
  >
    {item.label}
    <span
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
    />
  </a>
))}


          <a href="#contact" className="button !min-h-11 !px-5">
            Get in touch <ArrowIcon />
          </a>
        </nav>

        <details className="relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 rounded-full border border-[var(--border)] px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--primary)] [&::-webkit-details-marker]:hidden">
            Menu
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+12px)] flex w-64 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
              >
                {item.label}
              </a>
            ))}

            <a href="#contact" className="button mt-2">
              Get in touch <ArrowIcon />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
          <div className="relative z-10">
            <p className="eyebrow">
              Therapy in Santa Monica & across California
            </p>

            <h1 className="mt-7 max-w-[700px] font-serif text-[46px] leading-[1.02] tracking-[-0.05em] text-[var(--primary)] sm:text-[60px] md:text-[68px] xl:text-[76px]">
              You don&apos;t have to hold everything together alone.
            </h1>

            
<p className="mt-7 max-w-[550px] text-base leading-8 text-[#354943] sm:text-[17px]">

              When you&apos;re the person others count on, it can be difficult
              to admit how much you&apos;re carrying. I offer collaborative
              therapy for adults navigating anxiety, trauma, burnout, and
              perfectionism, with space to slow down and understand what you
              need.
            </p>

           
<p className="mt-4 max-w-[530px] text-base leading-8 text-[#354943]">
  In-person sessions in Santa Monica and secure telehealth for clients
  located throughout California.
</p>


            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#services" className="button">
                Explore therapy <ArrowIcon />
              </a>

              <a href="#about" className="button button-secondary">
                Meet Dr. Maya
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--border)] pt-5 text-[10px] font-semibold uppercase tracking-[0.09em] text-[var(--muted)] sm:gap-x-5 sm:text-[11px]">
              <span>Anxiety</span>
              <span aria-hidden="true" className="text-[var(--accent)]">
                /
              </span>
              <span>Trauma</span>
              <span aria-hidden="true" className="text-[var(--accent)]">
                /
              </span>
              <span>Burnout & perfectionism</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-8 right-1 top-3 rotate-[2deg] rounded-[28px] bg-[var(--secondary)]"
            />

            <div
              aria-hidden="true"
              className="absolute -left-1 top-10 z-0 hidden h-20 w-20 rounded-full border border-[var(--accent)] sm:block"
            />

            
<div className="group relative z-10 ml-2 mr-4 aspect-[4/5] overflow-hidden rounded-[24px] border-[8px] border-[var(--surface)] shadow-[0_24px_70px_rgba(38,59,54,0.13)] sm:mr-7">

              <Image
                src="/images/dr-maya-reynolds.png"
                alt="Portrait of Dr. Maya Reynolds"
                fill
                priority
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 70vw, 42vw"
               
className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"

              />
            </div>

            <div className="relative z-20 -mt-14 max-w-[88%] rounded-[18px] bg-[var(--primary)] p-5 text-[var(--surface)] shadow-xl sm:-mt-16 sm:p-6">
              <p className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-[27px]">
                Dr. Maya Reynolds
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-[11px]">
                Licensed Clinical Psychologist
              </p>
            </div>

           
<p className="mt-4 pr-2 text-right font-serif text-base italic text-[var(--muted)] sm:pr-7">
  Thoughtful, collaborative care
</p>

          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-y border-[var(--border)] py-5 text-sm text-[var(--muted)] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-lg text-[var(--primary)]">
            A little more room to breathe.
          </p>

          <p className="text-xs sm:text-right">
            Santa Monica, California
            <span className="mx-2 text-[var(--accent)]">·</span>
            Secure telehealth across California
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <Hero />
      <Introduction />  
      <WhoIWorkWith />  
      <QuoteBand />
      <Services />
      <Approach />
      <Office />
      <FAQ />
      <Contact />
    </main>
  );
}
