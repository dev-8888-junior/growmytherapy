
"use client";

import { useState } from "react";

const questions = [
  {
    question: "Who do you work with?",
    answer:
      "I work with adults navigating anxiety, panic, trauma, burnout, and perfectionism. Therapy is collaborative, and we'll take time to understand your circumstances, concerns, and goals rather than assuming one approach fits everyone.",
  },
  {
    question: "Where is your practice located?",
    answer:
      "My practice is based in Santa Monica, California, where I offer in-person therapy. I also provide secure telehealth for clients located throughout California.",
  },
  {
    question: "What approaches do you use in therapy?",
    answer:
      "Depending on your needs, our work may draw on cognitive behavioral therapy (CBT), EMDR, mindfulness, and body-oriented techniques. We'll discuss what may be appropriate for your circumstances and shape the work collaboratively.",
  },
  {
    question: "How do you approach trauma therapy?",
    answer:
      "Trauma work should be carefully paced. Safety, stabilization, and emotional regulation are central to the process, and we'll pay attention to what feels manageable before moving into deeper work.",
  },
  {
    question: "Do I need to know exactly what I want to work on before starting?",
    answer:
      "No. You can begin with what feels difficult or confusing right now. We can explore your experiences together, identify patterns, and develop a clearer understanding of what support may be helpful.",
  },
  {
    question: "Is online therapy available throughout California?",
    answer:
      "Secure telehealth is available for clients located in California. If you're considering online therapy, we can discuss whether that format is suitable for your needs.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  function toggleQuestion(index) {
    setOpenItems((current) => ({
      ...current,
      [index]: !current[index],
    }));
  }

  return (
    <section
      id="faq"
      className="section border-y border-[var(--border)] bg-[var(--secondary)]"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <span className="eyebrow">Questions, answered</span>

            <h2 className="section-heading mt-6">
              A little more clarity before you begin.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#354943]">
              Starting therapy can bring up questions. Here are a few details
              about my approach and how we can work together.
            </p>

            <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
              <p className="max-w-sm font-serif text-xl italic leading-relaxed text-[var(--primary)]">
                You can begin with questions, uncertainty, or simply a sense
                that something needs to change.
              </p>
            </div>

            <a href="#contact" className="text-link mt-8">
              Explore your next step <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="border-t border-[var(--border)]">
            {questions.map((item, index) => {
              const isOpen = Boolean(openItems[index]);
              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={item.question}
                  className="border-b border-[var(--border)]"
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleQuestion(index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left focus-visible:outline-offset-[-3px] sm:py-7"
                    >
                      <span className="flex items-start gap-4 sm:gap-5">
                        <span className="mt-1 font-serif text-sm text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-serif text-xl leading-snug tracking-[-0.025em] text-[var(--primary)] sm:text-2xl">
                          {item.question}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl leading-none transition-[transform,background-color,border-color,color] duration-300 ease-in-out motion-reduce:transition-none ${
                          isOpen
                            ? "rotate-45 border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)]"
                            : "rotate-0 border-[var(--border)] text-[var(--primary)]"
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-9 pr-3 text-base leading-8 text-[var(--foreground)] sm:pl-12 sm:text-[17px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
