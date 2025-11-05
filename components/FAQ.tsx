'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Our check-in time is from 3:00 PM & check-out time is 12:00 PM, early check-in and late checkout may be available upon request, subject to availability.',
  },
  {
    question: 'Does the hotel offer airport transportation?',
    answer: 'Yes, we offer complimentary airport shuttle service for our guests.',
  },
  {
    question: 'Does the hotel have dining options?',
    answer: 'We have multiple fine dining restaurants offering various cuisines.',
  },
  {
    question: 'Do you host weddings or special events?',
    answer: 'Yes, we specialize in hosting weddings and special events in our elegant venues.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-sage uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
              >
                <span className="font-medium text-primary">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-sage transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-sage">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
