export interface FaqItem {
  question: string;
  answer: string;
}

export const faqUs: FaqItem[] = [
  {
    question: "Can I test Pestly for free?",
    answer:
      "Yes! You get a 14-day free trial with full functionality. After the trial, you can choose a plan that suits your business or cancel – no strings attached.",
  },
  {
    question: "Does Pestly understand my specific services?",
    answer:
      "Absolutely. During onboarding, we configure the AI with your price list, service area, and business hours. The AI learns your specific offerings so it can provide accurate quotes and information to your customers.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Not at all. We handle the entire setup for you. You just provide your price list and a calendar link – we take care of the rest. Most businesses are live within 48 hours.",
  },
  {
    question: "Can Pestly understand different dialects?",
    answer:
      "Yes, the AI is trained to understand various dialects and accents. It can handle regional variations in both German and English, ensuring your customers are understood regardless of how they speak.",
  },
  {
    question: "What happens when an appointment needs to be changed?",
    answer:
      "Customers can reschedule directly through the AI. The AI checks your calendar availability and updates the appointment automatically. For complex changes, you'll receive a notification.",
  },
];
