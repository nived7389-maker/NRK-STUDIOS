/**
 * types.ts
 * Type definitions for the NRK Studios Trust Advertisement and Showcase Portfolio.
 */

export interface DemoProduct {
  id: string;
  title: string;
  category: "education" | "business" | "productivity" | "games";
  tagline: string;
  icon: string;
  features: string[];
  description: string;
  fullDetails: string;
}

export interface PartnerInquiry {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  organization: string;
  platformsRequested: string[];
  projectBrief: string;
  status: "Assigned" | "Analyzing Scope" | "Consultation Booked" | "In Review";
  ticketNumber: string;
  createdAt: string;
}

export interface TechnicalMilestone {
  title: string;
  description: string;
  status: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  projectType: string;
}
