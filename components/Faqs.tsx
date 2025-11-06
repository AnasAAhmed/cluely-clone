import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
    {
        que: "Why real-time vs. a regular AI notetaker?",
        ans: "Unlike regular AI notetakers like Otter or Granola that work after your meeting ends, Cluely provides real-time meeting intelligence during your calls. While other AI meeting assistants create meeting summaries afterward, Cluely helps you answer technical questions, handle objections, and perform better during high-stakes conversations."
    },
    {
        que: "Who is Cluely for?",
        ans: "Cluely is perfect for students, professionals, sales teams, recruiters, consultants, executives, and anyone who needs to perform well in meetings. If you're in back-to-back sales calls, lectures, or client meetings where you can't afford to look unprepared, Cluely delivers you answers at moments when you most need them."
    },
    {
        que: "Is Cluely free?",
        ans: "Yes, you can use Cluely's AI meeting assistant for free, and you will have limited access to all core Cluely features. The pro plan gives you access to unlimited meeting notes and unlimited AI responses with Cluely."
    },
    {
        que: "How is it undetectable in meetings?",
        ans: "Unlike other meeting AI tools, it never joins your calls as a participant, doesn't appear in meeting recordings, and won't show up in screen shares (limitations here). It captures meeting audio in the background and provides a discreet, translucent overlay that only you can see—making it completely undetectable to other meeting participants."
    },
    {
        que: "What languages and apps are supported?",
        ans: `Cluely's AI meeting assistant works with all major meeting platforms including Zoom, Microsoft Teams, Webex, and Slack calls. It supports English and <a class="text-blue-500 hover:underline" href="https://support.cluely.com/en/articles/12027152-how-to-change-languages" target="_blank" rel="noopener noreferrer" class="text-blue hover:underline">major international languages</a> for meeting transcription and real-time insights.`
    },
    {
        que: "Can I talk to customer support?",
        ans: `Yes, our support team is available to help you get the most out of your AI meeting assistant. You can reach out via live chat, email, or through the <a class="text-blue-500 hover:underline" href="https://support.cluely.com" target="_blank" rel="noopener noreferrer" class="text-blue hover:underline">support center</a>. We provide technical support and help with optimizing Cluely for your specific meeting and sales workflows.`
    },
]

const Faqs = () => {
    return (
        <section className="mx-4 sm:mx-12 md:mx-24 lg:mx-36">
            <h2 className="text-28 leading-tight font-medium tracking-4 text-foreground md:text-4xl md:text-32 lg:mb-4 lg:text-40 xl:mb-6">Frequently asked questions</h2>
            <Accordion
                type="single"
                collapsible
                
                className="w-full"
                defaultValue="item-1"
            >
                {faqs.map((i, _) => (
                    <AccordionItem key={_} value={i.que}>
                        <AccordionTrigger className="text-18 leading-snug font-medium tracking-4 text-pretty md:text-xl md:text-20 md:leading-[1.125] lg:text-24">{i.que}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <div className="relative z-10 -mt-[4px] flex flex-col gap-y-5 pt-0 pr-8 pb-0 text-base leading-snug tracking-2 text-gray-30 md:-mt-[4px] md:max-w-[616px] md:pt-0 md:pr-0 md:pb-0 md:text-18 lg:mt-0 lg:pb-[2px] lg:text-lg lg:text-20 xl:pb-[4px]">
                                
                            <p dangerouslySetInnerHTML={{ __html:i.ans }} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
               
            </Accordion>
        </section>
    )
}

export default Faqs
