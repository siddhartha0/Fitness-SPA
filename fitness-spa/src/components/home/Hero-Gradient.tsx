import { ReactNode } from "react";

export const HeroGradient = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        background: `linear-gradient(6deg, 
    #472B27 0%, 
    #36353A 40%, 
    #1D1D27 100%
  )`,
      }}
      className=" flex flex-col w-full"
    >
      {children}
    </div>
  );
};
