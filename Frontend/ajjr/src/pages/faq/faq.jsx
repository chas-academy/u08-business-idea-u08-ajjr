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
  { question: 'Har ni en butik?', answer: 'För tillfället har vi ingen fysisk butik då vi fokuserar på e-handel för att kunna erbjuda våra produkter till kunder över hela landet. För att underlätta för våra onlinekunder erbjuder vi testers, så att du kan prova dofterna innan du bestämmer dig. Om du föredrar att hämta din beställning personligen, har vi ett upphämtningsställe i Kista.' },
  { question: 'Vad är Musk?', answer: 'Musk är en populär doftnot som ofta används i parfymer. Ursprungligen extraherad från körtlarna hos myskdjur, används numera syntetisk musk på grund av etiska och miljömässiga skäl. Musk har en varm, djup och sensuell doft som ofta fungerar som basnot i parfymer och hjälper till att fixera andra doftkomponenter, vilket ger en långvarig och balanserad doftupplevelse.' },
  { question: 'Vad är Oud?', answer: 'Oud, även känt som agarträ, är en av de mest exklusiva och dyra ingredienserna i parfymvärlden. Den utvinns från hartset av infekterade agarträd och har en rik, komplex och träig doft med inslag av sötma och kryddighet. Oud är mycket uppskattat i många kulturer och används ofta i orientaliska parfymer för sin djupa och varma karaktär.' },
  { question: 'Hur applicerar jag parfymolja?', answer: 'För att applicera parfymolja, använd applikatorn eller rollern som medföljer flaskan och applicera en riklig mängd på pulspunkterna, såsom handleder, bakom öronen, på halsen och insidan av armbågarna. Genom att applicera på pulspunkterna får doften bästa möjliga spridning och hållbarhet.' },
  { question: 'Hur returnerar jag?', answer: 'Om du behöver returnera en produkt, se till att den är kvar i sin originalförpackning och att den inte har öppnats eller använts. Kontakta oss via e-post för att initiera returen och få vidare instruktioner. Observera att du som kund står för fraktkostnaden vid en eventuell retur eller byte. Vi är här för att hjälpa dig genom processen och svara på eventuella frågor du kan ha.' },
];

export default FAQ;
