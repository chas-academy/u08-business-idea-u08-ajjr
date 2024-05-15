import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <h2>Vanliga frågor och svar</h2>
      <div className="faq-wrapper">
        <div className="faq-box">
          {faqData.map((faq, index) => (
            <div
              className={"faq " + (index === openIndex ? "open" : "")}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              {index === openIndex && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  { question: 'Har ni en butik?', answer: 'Ja, Chas academy lokal 7' },
  { question: 'Vad är Musk Oud?', answer: 'Parfym från Mekka' },
];

export default FAQ;
