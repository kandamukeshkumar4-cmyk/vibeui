"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

export default function SettingsPage() {
  const router = useRouter();
  async function signOut() {
    await createClient().auth.signOut();
    router.push("/");
  }
  return <Card className="p-6"><h2 className="text-lg font-semibold">Settings</h2><p className="mt-2 text-sm text-slate-500">Plan: Free</p><Button onClick={signOut} className="mt-4">Sign out</Button></Card>;
}
