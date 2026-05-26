"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  async function signup() {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${location.origin}/auth/callback` },
      });
      if (error) toast.error(error.message);
      else toast.success("Check your email to confirm your account.");
    } finally {
      setIsLoading(false);
    }
  }

  async function google() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  }

  return (
    <main className="flex min-h-screen">
      {/* ── Left: form panel ── */}
      <div className="flex w-full flex-col justify-center px-8 py-12 sm:px-16 lg:w-1/2 lg:px-24">
        {/* Logo */}
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L14.5 5.5V12.5L9 16L3.5 12.5V5.5L9 2Z" fill="white" fillOpacity="0.9"/>
                <path d="M9 6L11.5 7.5V10.5L9 12L6.5 10.5V7.5L9 6Z" fill="white"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-900">VibeUI</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Start designing beautiful app UIs in seconds.</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); signup(); }}>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
            <Input
              id="email"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 border-slate-200 bg-white focus:border-violet-500 focus:ring-violet-500"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="h-11 border-slate-200 bg-white focus:border-violet-500 focus:ring-violet-500"
            />
            <p className="text-xs text-slate-400">Must be at least 6 characters</p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Create Account
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-3 text-slate-400">Or</span>
            </div>
          </div>

          {/* Google */}
          <Button
            type="button"
            onClick={google}
            className="h-11 w-full border border-slate-200 bg-slate-900 text-white hover:bg-slate-800"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-violet-600 hover:text-violet-700">
            Sign in
          </Link>
        </p>
      </div>

      {/* ── Right: preview panel ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-16">
        <div className="w-full max-w-md">
          {/* Preview card */}
          <div className="rounded-2xl bg-slate-900/80 p-6 shadow-2xl backdrop-blur-sm border border-white/10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-300">App idea</p>
            <p className="text-lg font-medium text-white leading-relaxed">
              Design a sleek e-commerce app with product cards, cart, and a smooth checkout flow
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-slate-400">AI-powered design generation</span>
              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300">Press Enter ↵</span>
            </div>
          </div>

          {/* Mini phone mockups row */}
          <div className="mt-8 flex gap-3 justify-center">
            {["#7C3AED", "#4F46E5", "#0EA5E9"].map((color, i) => (
              <div key={i} className="w-20 rounded-xl overflow-hidden shadow-lg border border-white/10" style={{ background: color, height: 140 }}>
                <div className="p-2">
                  <div className="h-1.5 w-8 rounded-full bg-white/30 mb-1" />
                  <div className="h-1 w-5 rounded-full bg-white/20 mb-3" />
                  <div className="space-y-1">
                    <div className="h-1 w-full rounded-full bg-white/20" />
                    <div className="h-1 w-4/5 rounded-full bg-white/20" />
                    <div className="h-1 w-3/5 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-violet-200/80">
            Generate pixel-perfect iOS screens in seconds
          </p>
        </div>
      </div>
    </main>
  );
}
