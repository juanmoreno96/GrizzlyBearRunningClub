"use client";

import { useState, useEffect } from "react";
import LoadingThreeDotsJumping from "./LoadingThreeDotsJumping";
import Navbar from "./Navbar";

interface LoadingContentProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function LoadingContent({ children, backgroundColor = "bg-rose-950" }: LoadingContentProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 flex flex-col items-center justify-center ${backgroundColor} z-50`}>
        <Navbar />
        <LoadingThreeDotsJumping />
      </div>
    );
  }

  return <>{children}</>;
}
