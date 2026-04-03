"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-5xl text-center space-y-14">

        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mx-auto shadow-[0_0_15px_rgba(var(--rgb-primary)/0.3)] animate-pulse">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-mono tracking-widest text-primary font-bold">
            PROJECTX PLATFORM
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight drop-shadow-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
              ProjectX
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed backdrop-blur-md bg-background/50 rounded-xl p-4 border border-white/5">
            Build. Compete. Win. A modern platform to manage projects with
            real-time evaluations and seamless collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 transition-all duration-300 hover:bg-black/40 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
            <div className="mb-4 text-sm font-black tracking-widest text-primary group-hover:scale-110 transition-transform origin-left">
              REAL-TIME
            </div>
            <p className="text-muted-foreground">
              Live updates, instant scores, and continuous progress tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 transition-all duration-300 hover:bg-black/40 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
            <div className="mb-4 text-sm font-black tracking-widest text-purple-400 group-hover:scale-110 transition-transform origin-left">
              SECURE
            </div>
            <p className="text-muted-foreground">
              Role-based access with enterprise-grade authentication.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 transition-all duration-300 hover:bg-black/40 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
            <div className="mb-4 text-sm font-black tracking-widest text-pink-400 group-hover:scale-110 transition-transform origin-left">
              COLLABORATIVE
            </div>
            <p className="text-muted-foreground">
              Teams, judges, and admins working in sync.
            </p>
          </div>

        </div>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/login")}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-purple-600 px-8 py-4 font-bold text-white transition-all overflow-hidden hover:shadow-[0_0_30px_rgba(var(--rgb-primary)/0.5)] active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Get Started</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

      </div>
    </main>
  );
}
