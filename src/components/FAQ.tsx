import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you stop a foreclosure?",
    answer: "In emergency situations, we can file a Temporary Restraining Order (TRO) within 24-48 hours to immediately halt foreclosure proceedings. For less urgent cases, we typically begin working on your case within 24 hours of your initial consultation and can often stop the process within days to weeks depending on your situation."
  },
  {
    question: "What is your success rate for saving homes from foreclosure?",
    answer: "We maintain a 99% success rate in helping homeowners avoid foreclosure. This includes obtaining loan modifications, stopping wrongful foreclosures, negotiating with lenders, and using legal strategies to protect your home. Our experienced attorneys have saved over 2,500 homes nationwide."
  },
  {
    question: "How much does it cost to hire your firm?",
    answer: "We offer a free initial consultation with no obligation. Our fee structure depends on your specific case, but we work on various payment arrangements including contingency fees for certain cases. We believe everyone deserves access to quality legal representation, so we offer flexible payment plans. Most importantly, there are no upfront fees – we only succeed when you do."
  },
  {
    question: "Can you stop a foreclosure without filing bankruptcy?",
    answer: "Absolutely. In fact, this is our specialty. We use multiple legal strategies to stop foreclosures without the negative long-term credit impact of bankruptcy. These include loan modifications, TROs, challenging procedural errors, identifying lender violations, and negotiating directly with banks. Bankruptcy is rarely necessary when you have experienced foreclosure defense attorneys on your side."
  },
  {
    question: "What if my lender denied my loan modification request?",
    answer: "A denial is not the end of the road. Lenders often deny modifications improperly or without proper review. We can appeal the decision, resubmit with a stronger application, identify violations in the denial process, or even sue the lender for wrongfully declining assistance. Many of our successful cases came after previous denials."
  },
  {
    question: "How does the loan modification process work?",
    answer: "First, we review your financial situation and mortgage documents. Then we prepare a comprehensive modification package and submit it to your lender. We negotiate on your behalf for better terms such as reduced interest rates, extended loan terms, or principal reduction. The process typically takes 30-90 days, during which we handle all communication with your lender."
  },
  {
    question: "What is wrongful foreclosure and do I have a case?",
    answer: "Wrongful foreclosure occurs when a lender fails to follow proper legal procedures, violates federal or state laws, uses predatory lending practices, or makes significant errors in your account. Signs include: improper notice, dual-tracking (pursuing foreclosure while reviewing a modification), lost payments, or unexplained fees. During your free consultation, we'll review your documents to determine if you have a wrongful foreclosure case."
  },
  {
    question: "Do you serve clients nationwide?",
    answer: "Yes, we are licensed to practice in all 50 states and have offices in Florida, New York, Texas, Washington D.C., and Hawaii. No matter where you're located in the United States, we can help you fight foreclosure and save your home."
  },
  {
    question: "What is a TRO and how does it help?",
    answer: "A Temporary Restraining Order (TRO) is a court order that immediately stops all foreclosure activities, including scheduled auctions. It provides critical time to develop your defense strategy, negotiate with lenders, or prepare legal action. A TRO is especially valuable in emergency situations when an auction is imminent."
  },
  {
    question: "How long does the entire process take?",
    answer: "Timelines vary based on your specific situation. Emergency TROs can be obtained in 24-48 hours. Loan modifications typically take 30-90 days. Wrongful foreclosure litigation may take 6-12 months but often results in settlements much sooner. Throughout the process, your home remains protected while we work on a permanent solution."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to the most common questions about foreclosure defense and how we can help save your home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="tel:855-964-2555"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
          >
            Call us at 855-964-2555 for a free consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
