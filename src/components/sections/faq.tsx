"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

/**
 * FAQ Data for FlipFin "Terminal Intel" section
 */
const faqData = [
  {
    question: "Is FlipFin free?",
    answer:
      "Yes. The core terminal features, including live data streams and graduation tracking, are 100% free. We believe in providing the best data to the Solana community without barriers.",
  },
  {
    question: "Do I need to connect a wallet?",
    answer:
      "No. You can monitor the market and browse all terminal data anonymously. You only need to connect a wallet if you wish to use our integrated trading module or sync your favorites across devices.",
  },
  {
    question: "How accurate is the data?",
    answer:
      "We pull data directly from our proprietary Solana node infrastructure. Our graduation radar typically identifies tokens 10–90 seconds before they become visible on standard DEX aggregators.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#121e1a] py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none focus:ring-0 group"
      >
        <span className="text-[17.5px] font-bold italic uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-[#10b981]">
          {question}
        </span>
        <span className="text-[#10b981] ml-4">
          {isOpen ? (
            <Minus size={20} className="transition-transform duration-300" />
          ) : (
            <Plus size={20} className="transition-transform duration-300" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[15.75px] leading-relaxed tracking-normal text-[#94a3b8] font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative bg-[#05080a] py-[120px] px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(16, 185, 129, 0.02) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-extrabold italic uppercase tracking-[0.1em] text-white leading-tight">
            Terminal <span className="text-[#10b981] cyber-glow">Intel</span>
          </h2>
          <p className="mt-4 font-mono text-[13px] uppercase tracking-widest text-[#94a3b8]">
            Frequently Asked Questions
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col border-t border-[#121e1a]">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow Overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px]"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 60%)",
        }}
      />
    </section>
  );
};

export default FAQ;
