import { Card } from "@/components/ui/card";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <Card className="p-6"><h2 className="text-lg font-semibold">Project {id}</h2><p className="mt-2 text-sm text-slate-500">Generation history loads here.</p></Card>;
}

