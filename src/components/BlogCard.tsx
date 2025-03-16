import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export default function BlogCard({ id, title, content, author }: BlogCardProps) {
  return (
    <Card className=" hover:bg-accent/50 transition-colors h-[40vh] w-[70vw] ">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex flex-col gap-2">
          <div className="font-medium">{author.name}</div>
          <Link href={`/post/${id}`}>
            <h3 className="font-bold text-xl hover:underline">{title}</h3>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
}
