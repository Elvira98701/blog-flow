import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

export const AboutAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="item-1"
        className="rounded-lg bg-background/40 border-b-0 px-5 shadow-none mb-2"
      >
        <AccordionTrigger className="font-bold text-2xl">
          How does post editing work?
        </AccordionTrigger>
        <AccordionContent>
          BlogFlow gives you a clean, distraction-free editor with support for
          drafts, autosave, and markdown. Whether it&apos;s a quick update or a
          long-form post, you’re always in control.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="rounded-lg bg-background/40 border-b-0 px-5 shadow-none mb-2"
      >
        <AccordionTrigger className="font-bold text-2xl">
          Can I manage my subscribers?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely. Track your audience growth, view subscriber details, and
          keep your readers engaged – all from one simple panel.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="rounded-lg bg-background/40 border-b-0 px-5 shadow-none"
      >
        <AccordionTrigger className="font-bold text-2xl">
          Does it show analytics?
        </AccordionTrigger>
        <AccordionContent>
          Yes! Get a clear view of how your content is performing with real-time
          stats on views, engagement, and top-performing posts.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
