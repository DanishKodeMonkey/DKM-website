import React, { createContext, useContext, useEffect, useState } from "react";
import { LoadingContextChildren, LoadingContextType } from "../types.ts"; // Ensure this path is correct

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// LoadingContext hook
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

// LoadingProvider component
export const LoadingProvider: React.FC<LoadingContextChildren> = (
  { children }: LoadingContextChildren,
) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after initial render
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
