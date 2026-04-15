"use client";
import { CategoryList } from "@/components/category-list";
import { LayoutGrid } from "lucide-react";

export function CategoryListDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CategoryList
        title="Explore Our"
        subtitle="Core Features"
        headerIcon={<LayoutGrid className="w-8 h-8" />}
        categories={[
          {
            id: 1,
            title: "Featured Project",
            subtitle: "Dive deep into our main showcase.",
            featured: true,
          },
          {
            id: 2,
            title: "AI & Automation",
            subtitle: "Explore intelligent systems and workflows.",
          },
          {
            id: 3,
            title: "UI/UX Design",
            subtitle: "Discover user-centric design patterns.",
          },
          {
            id: 4,
            title: "Development Kits",
            subtitle: "Get started with our pre-built components.",
          },
        ]}
      />
    </div>
  );
}
