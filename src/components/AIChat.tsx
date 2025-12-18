import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const quickReplies = [
  "How can I stop foreclosure?",
  "What is a TRO?",
  "Can I modify my loan?",
  "What's your success rate?",
];

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help answer your questions about foreclosure defense and our services. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = (question: string): string => {
    const q = question.toLowerCase();
    
    if (q.includes("stop foreclosure") || q.includes("facing foreclosure")) {
      return "We can help stop foreclosure without filing for bankruptcy. Our legal team will review your case, file necessary motions, and negotiate with your lender. With a 99% success rate, we've helped thousands of homeowners keep their homes. Would you like a free consultation?";
    }
    if (q.includes("tro") || q.includes("restraining order")) {
      return "A TRO (Temporary Restraining Order) is a court order that immediately stops foreclosure proceedings. We can file a TRO on your behalf to halt an auction and give us time to build your defense case. This is often used in emergency situations.";
    }
    if (q.includes("loan modification") || q.includes("modify")) {
      return "Yes! We specialize in loan modification with a 99% success rate. Even if you've been denied before, we can help. We'll negotiate with your lender to lower your payments, reduce interest rates, or extend your loan term. Many clients save hundreds per month.";
    }
    if (q.includes("success rate")) {
      return "We have a 99% success rate in helping homeowners avoid foreclosure. We've saved over 2,500 homes and have been practicing foreclosure defense law for over 15 years. Our track record speaks for itself!";
    }
    if (q.includes("cost") || q.includes("fee") || q.includes("price")) {
      return "We offer free initial consultations and work on a contingency basis for many cases - meaning you only pay if we succeed. Every case is different, so contact us to discuss your specific situation and options.";
    }
    if (q.includes("auction") || q.includes("sale")) {
      return "If you have an auction scheduled, time is critical but we can help! We can file emergency motions to stop the sale and protect your home. Contact us immediately at 855-964-2555 for urgent cases.";
    }
    if (q.includes("wrongful")) {
      return "If you believe your foreclosure is wrongful, we can investigate lender violations, improper procedures, and predatory lending practices. We'll fight to protect your rights and can even sue lenders who've acted illegally.";
    }
    if (q.includes("contact") || q.includes("call") || q.includes("phone")) {
      return "You can reach us at 855-964-2555 (24/7) or email info@smarterrealestates.com. We also have offices in Florida, Washington D.C., New York, Texas, and Hawaii. Fill out our consultation form for a free case review!";
    }
    
    return "Thank you for your question. Our legal team specializes in foreclosure defense, loan modifications, and protecting homeowners' rights. For personalized advice, I recommend scheduling a free consultation with one of our attorneys. Call us at 855-964-2555 or fill out our contact form.";
  };

  const handleSend = async (message: string = input) => {
    if (!message.trim()) return;

    const userMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = getResponse(message);
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="w-7 h-7 text-navy-dark" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-medium border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-hero-gradient p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Bot className="w-5 h-5 text-navy-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-cream">Legal Assistant</h4>
                  <p className="text-cream/70 text-sm">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user" ? "bg-gold" : "bg-secondary"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-navy-dark" />
                    ) : (
                      <Bot className="w-4 h-4 text-gold" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.role === "user"
                        ? "bg-gold text-navy-dark"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gold" />
                  </div>
                  <div className="bg-secondary p-3 rounded-xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="px-4 py-2 border-t border-border">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="flex-shrink-0 px-3 py-1.5 text-xs font-medium bg-secondary text-foreground rounded-full hover:bg-gold hover:text-navy-dark transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-background"
                />
                <Button type="submit" variant="gold" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
