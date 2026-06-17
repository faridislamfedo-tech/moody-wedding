/**
 * Types and Interfaces for Ahmed & Mai's Wedding website
 */

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  iconName: "users" | "glass-water" | "utensils" | "music" | "sparkles";
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export interface RSVPEntry {
  fullName: string;
  phone: string;
  guestsCount: number;
  isAttending: boolean;
  message: string;
  submittedAt: string;
}
