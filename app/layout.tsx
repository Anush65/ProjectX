import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/components/providers";
import { RoleRedirect } from "@/components/role-redirect";
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
      <body className="antialiased">
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
