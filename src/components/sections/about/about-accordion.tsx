import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { aboutList } from "@/constants/about-list";

export const AboutAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {aboutList.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="rounded-md bg-background/40 border-b-0 px-5 shadow-none border"
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
