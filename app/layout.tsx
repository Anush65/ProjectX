import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/components/providers";
import { RoleRedirect } from "@/components/role-redirect";
import "./tw-animate.css";
import "./shadcn-tailwind.css";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ProjectX",
  description: "Manage judges, teams, and rounds for ProjectX",
  icons: {
    icon: "/logo.png ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen relative">
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/15 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/15 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[30%] left-[50%] w-[40%] h-[40%] rounded-full bg-pink-600/10 blur-[100px] animate-[pulse_12s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <RoleRedirect />
            <TooltipProvider>
              {children}
              <Toaster position="top-right" />
            </TooltipProvider>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
