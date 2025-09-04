"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Zap, Cpu, BarChart2, Sliders, FileText, Users } from "lucide-react"

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className={cn(
        "group/animated-card relative w-[380px] overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-zinc-800/50 dark:bg-black/80",
        className
      )}
      {...props}
    />
  )
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn(
        "flex flex-col space-y-2 border-t border-zinc-200/30 p-6 dark:border-zinc-800/30",
        className
      )}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl leading-none font-bold tracking-tight text-black dark:text-white",
        className
      )}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-neutral-600 dark:text-neutral-300",
        className
      )}
      {...props}
    />
  )
}

export function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("h-[200px] w-[380px] overflow-hidden", className)}
      {...props}
    />
  )
}

// Visual Component Props
interface VisualProps {
  mainColor?: string
  secondaryColor?: string
  gridColor?: string
}

interface LayerProps {
  color: string
  secondaryColor?: string
  hovered?: boolean
}

// Shared Components
const EllipseGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg
        width="380"
        height="200"
        viewBox="0 0 380 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="380" height="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(190 100) rotate(90) scale(100 190)"
          >
            <stop stopColor={color} stopOpacity="0.3" />
            <stop offset="0.4" stopColor={color} stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:24px_24px] bg-center opacity-60"
    />
  )
}

// Visual 1: Analytics Card (Enhanced Original)
const AnalyticsVisual: React.FC<VisualProps> = ({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)
  const [mainProgress, setMainProgress] = useState(15)
  const [secondaryProgress, setSecondaryProgress] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (hovered) {
      timeout = setTimeout(() => {
        setMainProgress(75)
        setSecondaryProgress(100)
      }, 300)
    } else {
      setMainProgress(15)
      setSecondaryProgress(0)
    }

    return () => clearTimeout(timeout)
  }, [hovered])

  const radius = 45
  const circumference = 2 * Math.PI * radius
  const mainDashoffset = circumference - (mainProgress / 100) * circumference
  const secondaryDashoffset = circumference - (secondaryProgress / 100) * circumference

  const techItems = [
    { id: 1, translateX: "120", translateY: "60", text: "Optimize", icon: "⚛️" },
    { id: 2, translateX: "120", translateY: "-60", text: "Activate", icon: "🔷" },
    { id: 5, translateX: "-120", translateY: "60", text: "Measure", icon: "🔺" },
    { id: 6, translateX: "-120", translateY: "-60", text: "Plan", icon: "🌸" },
  ]

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Main Chart */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute top-0 left-0 z-[7] flex h-[400px] w-[380px] transform items-center justify-center transition-transform duration-700 group-hover/animated-card:-translate-y-[100px] group-hover/animated-card:scale-110">
          <div className="relative flex h-[140px] w-[140px] items-center justify-center">
            <svg width="140" height="140" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                opacity={0.1}
                className="text-zinc-400 dark:text-zinc-600"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={secondaryColor}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={secondaryDashoffset}
                transform="rotate(-90 50 50)"
                style={{
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)",
                }}
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={mainColor}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={mainDashoffset}
                transform="rotate(-90 50 50)"
                style={{
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)",
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-black dark:text-white">
                {hovered ? (secondaryProgress > 75 ? secondaryProgress : mainProgress) : mainProgress}%
              </span>
            </div>
          </div>
        </div>

        {/* Info Badge */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[6] flex w-[380px] translate-y-0 items-start justify-center bg-transparent p-6 transition-transform duration-700 group-hover/animated-card:translate-y-full">
          <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] rounded-lg border border-zinc-200/40 bg-white/40 px-4 py-3 opacity-100 backdrop-blur-md transition-opacity duration-500 group-hover/animated-card:opacity-0 dark:border-zinc-800/40 dark:bg-black/40">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: mainColor }} />
              <p className="text-sm font-medium text-black dark:text-white">
                Performance Analytics
              </p>
            </div>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
              Real-time metrics and insights
            </p>
          </div>
        </div>

        {/* Tech Stack Items */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100">
          {techItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80"
              style={{
                transform: hovered
                  ? `translate(${item.translateX}px, ${item.translateY}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-black dark:text-white">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 2: Wave Animation Card
const WaveVisual: React.FC<VisualProps> = ({
  mainColor = "#06b6d4",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Animated Waves */}
        <div className="absolute inset-0 z-[6]">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 380 200"
            fill="none"
          >
            <path
              d="M0,160 Q95,120 190,140 T380,130 L380,200 L0,200 Z"
              fill={`${mainColor}40`}
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "translate-y-0" : "translate-y-8"
              )}
            />
            <path
              d="M0,170 Q95,130 190,150 T380,140 L380,200 L0,200 Z"
              fill={`${secondaryColor}30`}
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "translate-y-0" : "translate-y-6"
              )}
              style={{ transitionDelay: "200ms" }}
            />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[7]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-2 w-2 rounded-full opacity-60 transition-all duration-1000 ease-in-out",
                hovered ? "animate-bounce" : ""
              )}
              style={{
                backgroundColor: i % 2 === 0 ? mainColor : secondaryColor,
                left: `${20 + i * 60}px`,
                top: `${80 + (i % 3) * 30}px`,
                animationDelay: `${i * 200}ms`,
                transform: hovered ? `translateY(-${(i + 1) * 20}px)` : "translateY(0)",
              }}
            />
          ))}
        </div>

        {/* Central Icon */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-transform duration-700 group-hover/animated-card:scale-110 group-hover/animated-card:rotate-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80">
            <span className="text-2xl">🌊</span>
          </div>
        </div>

        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 3: Geometric Morphing Card
const GeometricVisual: React.FC<VisualProps> = ({
  mainColor = "#f59e0b",
  secondaryColor = "#ef4444",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Morphing Shapes */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <div className="relative">
            {/* Main Shape */}
            <div
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "rotate-180 scale-150" : "rotate-0 scale-100"
              )}
              style={{ backgroundColor: mainColor }}
            >
              <div className="h-20 w-20 rounded-lg opacity-80" />
            </div>
            
            {/* Orbiting Shapes */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute h-4 w-4 rounded-full transition-all duration-1000 ease-in-out",
                  hovered ? "opacity-100" : "opacity-60"
                )}
                style={{
                  backgroundColor: i % 2 === 0 ? secondaryColor : mainColor,
                  top: "50%",
                  left: "50%",
                  transform: hovered
                    ? `translate(-50%, -50%) rotate(${i * 90 + 180}deg) translateX(60px) rotate(-${i * 90 + 180}deg)`
                    : `translate(-50%, -50%) rotate(${i * 90}deg) translateX(40px) rotate(-${i * 90}deg)`,
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-[5]">
          <svg width="380" height="200" className="opacity-20">
            <defs>
              <pattern id="hexagon" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <polygon points="20,2 32,12 32,28 20,38 8,28 8,12" fill="none" stroke={mainColor} strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagon)" />
          </svg>
        </div>

        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Visual 4: Network Graph Card
const NetworkVisual: React.FC<VisualProps> = ({
  mainColor = "#10b981",
  secondaryColor = "#3b82f6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false)

  const nodes = [
    { id: 1, x: 190, y: 100, size: 8 },
    { id: 2, x: 120, y: 60, size: 6 },
    { id: 3, x: 260, y: 80, size: 6 },
    { id: 4, x: 100, y: 140, size: 5 },
    { id: 5, x: 280, y: 140, size: 5 },
    { id: 6, x: 190, y: 40, size: 4 },
    { id: 7, x: 190, y: 160, size: 4 },
  ]

  const lines = React.useMemo(() => {
    const out: JSX.Element[] = [];
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((targetNode, j) => {
        out.push(
          <line
            key={`${i}-${j}`}
            x1={node.x}
            y1={node.y}
            x2={targetNode.x}
            y2={targetNode.y}
            stroke={hovered ? mainColor : secondaryColor}
            strokeWidth={hovered ? 2 : 1}
            opacity={hovered ? 0.8 : 0.4}
            className="transition-all duration-500 ease-in-out"
            style={{ transitionDelay: `${(i + j) * 50}ms` }}
          />
        );
      });
    });
    return out;
  }, [nodes, hovered, mainColor, secondaryColor]);

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <div className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl">
        {/* Network Lines */}
        <svg className="absolute inset-0 z-[6] h-full w-full">
          {lines}
        </svg>

        {/* Network Nodes */}
        <div className="absolute inset-0 z-[7]">
          {nodes.map((node, i) => (
            <div
              key={node.id}
              className={cn(
                "absolute rounded-full transition-all duration-500 ease-in-out",
                hovered ? "animate-pulse" : ""
              )}
              style={{
                left: node.x - node.size / 2,
                top: node.y - node.size / 2,
                width: hovered ? node.size * 1.5 : node.size,
                height: hovered ? node.size * 1.5 : node.size,
                backgroundColor: i === 0 ? mainColor : secondaryColor,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  )
}

// Feature cards (moved from Features.tsx)
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export const Features = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = (entry.target as HTMLElement).querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Platform</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">Platform Capabilities</h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Everything you need to plan, execute, and optimize retail media campaigns across all networks from one unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Unified Planning"
            description="Plan campaigns across all retail media networks from one centralized platform with consistent budgeting and strategy."
            index={0}
          />
          <FeatureCard
            icon={<Cpu className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Automated Activation"
            description="Launch campaigns with speed and accuracy across multiple RMNs simultaneously with automated trafficking."
            index={1}
          />
          <FeatureCard
            icon={<BarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="SKU-Level Insights"
            description="Track performance down to individual products with real-time dashboards and detailed analytics."
            index={2}
          />
          <FeatureCard
            icon={<Sliders className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Smart Optimization"
            description="AI-powered budget reallocation shifts spend to top-performing channels and campaigns automatically."
            index={3}
          />
          <FeatureCard
            icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Unified Reporting"
            description="Single dashboard consolidates performance data from all retail media networks for clear ROI visibility."
            index={4}
          />
          <FeatureCard
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Managed Services"
            description="Dedicated team of experts handles campaign management with clear SLAs and guaranteed outcomes."
            index={5}
          />
        </div>

        {/* Interactive demo grid from this file */}
        <div className="mt-12">
          <InteractiveCards />
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function InteractiveCards() {
  const cards = [
    {
      visual: <AnalyticsVisual />,
      title: "Comprehensive Analytics",
      description: "Gain real-time performance tracking and comprehensive reporting across all your retail media investments."
    },
    {
      visual: <WaveVisual />,
      title: "Measurable Performance Insights",
      description: "Dive deep into SKU-level insights and proven ROAS."
    },
    {
      visual: <GeometricVisual />,
      title: "Agile Campaign Activation",
      description: "Streamlined trafficking and dynamic content delivery across RMNs."
    },
    {
      visual: <NetworkVisual />,
      title: "Unified Retail Media Graph",
      description: "Consolidate all your retail media campaigns into a single, intuitive view for unparalleled clarity and control."
    }
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 place-items-center">
          {cards.map((card, index) => (
            <AnimatedCard key={index}>
              <CardVisual>
                {card.visual}
              </CardVisual>
              <CardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardBody>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
