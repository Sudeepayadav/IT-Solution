import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item space-y-4 w-[350px] ">
    <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
      <h3 className={`hover:text-[#b3e5fc] ${isOpen ? 'text-[#b3e5fc]' : ''}`}>
        {question}
      </h3>
      <span className="text-2xl font-bold">{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && (
      <p className="text-xs text-start w-[300px] mt-2">{answer}</p>
    )}
    <hr className="border-gray-300"/>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What services does WaveNet offer?',
      answer: 'WaveNet offers a variety of IT solutions including cloud services, network management, and cybersecurity.',
    },
    {
      question: 'Which IT solution is for my business?',
      answer: 'We provide personalized consultations to determine the best IT solutions for your specific business needs.',
    },
    {
      question: 'How much do the services cost?',
      answer: 'Our services are based on the specific needs and scale of your business. We offer customized pricing plans that are designed to fit your budget and requirements.',
    },
    {
      question: 'How do I get started with the IT solutions?',
      answer: 'Getting started is easy! Contact us to schedule a consultation, and we will guide you through the process.',
    },
  ];

  return (
    <div className="p-5 bg-[#141627] text-white">
      <div className="flex">
        <div className="faq ml-[340px] space-y-9">
          <h1 className="text-4xl text-start ml-9">
            Got Any
            <br /> Questions?
          </h1>
          <button type="button" className="ml-5 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">ASK A QUESTION</button>
        </div>
        <div className="faq-list ml-[180px] text-lg font-semibold space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;