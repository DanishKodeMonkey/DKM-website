import React, { ReactNode } from "react";

export type Comment = { id: number; name: string; message: string };

export type LoadingContextChildren = {
  children: ReactNode;
};
export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Tech {
  src: string;
  alt: string;
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  preview_image: string;
}
