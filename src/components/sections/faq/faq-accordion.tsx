import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { faqList } from "@/constants/faq-list";

export const FaqAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-3xl mx-auto flex flex-col gap-2"
    >
      {faqList.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="rounded-md bg-background/40 border-b-0 px-4 shadow-none border"
        >
          <AccordionTrigger className="font-bold text-lg lg:text-xl hover:cursor-pointer">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
