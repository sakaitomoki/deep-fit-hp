interface GymLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GymLogo({ size = "md", className = "" }: GymLogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizes[size]} aspect-square bg-[#F2AC55] rounded-sm flex items-center justify-center`}>
        <span className="font-heading font-bold text-white" style={{ fontSize: size === "sm" ? "10px" : size === "md" ? "12px" : "16px" }}>D.F</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold text-white tracking-wider ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl"}`}>DEEP.FIT</span>
        {size !== "sm" && (
          <span className={`text-white/60 tracking-[0.15em] uppercase ${size === "md" ? "text-[8px]" : "text-[10px]"}`}>CIRCUIT × KICKBOXING</span>
        )}
      </div>
    </div>
  );
}
