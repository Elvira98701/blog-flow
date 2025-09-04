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
      className="sm:w-2/3 mx-auto flex flex-col gap-2"
    >
      {faqList.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="rounded-md bg-card/50 border-b-0 px-5 shadow-none border"
        >
          <AccordionTrigger className="font-bold text-lg lg:text-2xl hover:cursor-pointer">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
