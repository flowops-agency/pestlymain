import {
  Phone,
  MessageSquare,
  Clock,
  Calendar,
  Bell,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresUs: Feature[] = [
  {
    icon: Phone,
    title: "Multi-Channel",
    description:
      "Your customers reach you via phone, WhatsApp, SMS and email – the AI handles everything seamlessly.",
  },
  {
    icon: Clock,
    title: "Response in under 15 seconds",
    description:
      "No more waiting. Your customers get an instant answer – around the clock, 7 days a week.",
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description:
      "Appointments are automatically added to Google Calendar or Outlook – without any effort on your part. Integrates with Salesforce, HubSpot & many more CRM tools.",
  },
  {
    icon: Bell,
    title: "Smart Escalation",
    description:
      "For large projects, commercial clients or price negotiations, you get a push notification on your phone.",
  },
  {
    icon: MessageSquare,
    title: "Price Quotes & Offers",
    description:
      "The AI quotes prices based on your price list and automatically creates offers for customers.",
  },
  {
    icon: Repeat,
    title: "Auto Follow-up",
    description:
      "Customers who don't decide immediately get automatically followed up after 2 days – without you having to think about it.",
  },
];

export const problemPointsUs: Feature[] = [
  {
    icon: Phone,
    title: "Missed calls on the job",
    description:
      "You're on site with a customer and can't answer the phone. Callers get no answer – and book the competition.",
  },
  {
    icon: Bell,
    title: "Phone rings evenings & weekends",
    description:
      "Pest issues are often noticed in the evening. That's exactly when customers call – when you're off the clock.",
  },
  {
    icon: Calendar,
    title: "Office staff costs $4,000–$5,000/mo",
    description:
      "An office assistant is expensive, not available 24/7, and can't always respond immediately. Pestly is cheaper and more reliable.",
  },
];
