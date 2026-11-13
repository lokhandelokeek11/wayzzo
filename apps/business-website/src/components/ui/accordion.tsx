'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-surface-container-high rounded-xl overflow-hidden bg-surface-container-lowest transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-5 text-left font-medium text-primary hover:text-secondary transition-colors focus:outline-none"
      >
        <span className="text-sm sm:text-base pr-4 font-sans">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-on-surface-variant flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-secondary' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-on-surface-variant text-xs sm:text-sm leading-relaxed border-t border-surface-container-high/60 pt-3 font-normal">
          {answer}
        </div>
      )}
    </div>
  );
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <div className="space-y-2.5">
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </div>
  );
}
