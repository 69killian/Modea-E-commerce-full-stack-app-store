"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Comment passer une commande ?",
      answer:
        "Pour passer une commande, ajoutez les produits souhaités à votre panier, puis cliquez sur 'Passer à la caisse' et suivez les instructions.",
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer:
        "Les délais de livraison dépendent de votre localisation et du mode de livraison choisi. En général, cela prend entre 3 et 7 jours ouvrables.",
    },
    {
      question: "Puis-je retourner un produit ?",
      answer:
        "Oui, vous pouvez retourner un produit dans un délai de 14 jours après réception, à condition qu'il soit dans son état d'origine.",
    },
    {
      question: "Quels sont vos partenariats ?",
      answer:
        "Nous collaborons avec des marques réputées telles que Nike, Adidas, Lacoste et bien d'autres pour vous offrir les meilleurs produits.",
    },
  ];

  return (
    <div className="bg-gray-100 py-[150px] px-4 sm:px-8">
      <h2 className="text-[70px] font-bold text-center mb-6">FOIRE AUX QUESTIONS (FAQ)</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="bg-white border shadow">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-900 focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="px-4 py-3 text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
