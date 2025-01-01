import { ReactNode } from "react";

export const HeroGradient = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        background: `linear-gradient(5deg, 
    #472B27 0%, 
    #36353A 50%, 
    #1D1D27 100%
  )`,
      }}
      className="min-h-screen flex flex-col w-full"
    >
      {children}
    </div>
  );
};
