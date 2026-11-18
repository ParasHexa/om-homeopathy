export type Language = 'en' | 'hi' | 'gu';

export interface TreatmentItem {
  id: string;
  iconName: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  overview: Record<Language, string>;
  symptoms: Record<Language, string[]>;
  consultationApproach: Record<Language, string>;
  expectations: Record<Language, string>;
  whenToSeekUrgentCare: Record<Language, string>;
  faqs: Array<{
    q: Record<Language, string>;
    a: Record<Language, string>;
  }>;
}

export interface ReviewItem {
  id: string;
  name: string;
  treatment: Record<Language, string>;
  rating: number;
  date: string;
  comment: Record<Language, string>;
  consultationType: 'Online' | 'Telehealth';
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: Record<Language, string>;
  caption: Record<Language, string>;
  category: 'consultation' | 'treatment' | 'care' | 'stories';
}

export interface FaqItem {
  id: string;
  category: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  suggestedQuestions?: string[];
  isEmergencyAlert?: boolean;
}
