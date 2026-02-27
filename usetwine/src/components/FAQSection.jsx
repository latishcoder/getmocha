import React, { useState } from "react";

const faqs = [
  {
    question: "What is Mocha?",
    answer:
      "Mocha is an AI-powered application builder which allows you to build custom software applications without coding. You can describe what you want with words or pictures and publish in one click.",
  },
  {
    question: "Do I need coding experience to use Mocha?",
    answer:
      "No. Mocha is designed for non-technical users. You can build apps without writing code.",
  },
  {
    question: "What types of apps can I build using Mocha?",
    answer:
      "You can build SaaS apps, dashboards, tools, marketplaces, and more.",
  },
  {
    question: "Can I build real working apps, not just mockups?",
    answer:
      "Yes. Mocha builds fully functional applications, not static mockups.",
  },
  {
    question: "Can I build mobile apps with Mocha?",
    answer:
      "Yes. You can build responsive apps that work on mobile devices.",
  },
  {
    question: "Can I publish my Mocha app?",
    answer:
      "Yes. You can publish and deploy your app easily.",
  },
  {
    question: "Do I own the application?",
    answer:
      "Yes. You retain ownership of your application.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e9e6df] py-16 md:py-24 px-5 md:px-6">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
          Frequently asked questions
        </h2>

        <p className="text-center text-gray-500 mb-10 md:mb-16 text-sm sm:text-base">
          If you have more questions,{" "}
          <span className="underline cursor-pointer">check our docs</span> or{" "}
          <span className="underline cursor-pointer">join our Discord</span>
        </p>

        {/* FAQ List */}
        <div className="space-y-5 md:space-y-6">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-5 md:pb-6">

              <div
                className="flex justify-between items-start md:items-center gap-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

                <div className="min-w-[36px] h-[36px] md:w-10 md:h-10 rounded-full bg-lime-400 flex items-center justify-center text-lg md:text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </div>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}