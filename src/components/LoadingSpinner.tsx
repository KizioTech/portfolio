import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        {/* Outer spinning ring */}
        <div
          className={cn(
            "rounded-full border-4 border-primary/20 border-t-primary animate-spin",
            sizeClasses[size]
          )}
        />
        {/* Inner pulsing dot */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center"
          )}
        >
          <div
            className={cn(
              "rounded-full bg-accent animate-pulse",
              size === "sm" ? "w-1.5 h-1.5" : size === "md" ? "w-2 h-2" : "w-3 h-3"
            )}
          />
        </div>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Multi-layer spinner */}
        <div className="w-16 h-16 rounded-full border-4 border-primary/10 border-t-primary animate-spin" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-accent animate-spin-reverse" />
        <div className="absolute inset-2 w-12 h-12 rounded-full border-4 border-accent/10 border-b-accent animate-spin" style={{ animationDuration: "0.8s" }} />
        
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse shadow-glow" />
        </div>
      </div>
      <p className="text-muted-foreground text-sm font-medium animate-pulse">Loading...</p>
    </div>
  );
}
