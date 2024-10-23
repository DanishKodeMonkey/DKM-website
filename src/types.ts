import React, { ReactNode } from "react";

export type Comment = { id: number; name: string; message: string };

export type LoadingContextChildren = {
  children: ReactNode;
};
export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
