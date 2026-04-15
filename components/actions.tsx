"use client";
import { CategoryList } from "@/components/category-list";

export function CategoryListDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CategoryList
        title="We heard ____. So we did ____."
        subtitle="Every visible action ties back to a listening insight. Every action is led by a Your Way Champion."
        categories={[
          {
            id: 1,
            title: "Featured Project",
            subtitle: "Dive deep into our main showcase.",
            featured: true,
            categoryType: "Featured",
          },
          {
            id: 2,
            title: "AI & Automation",
            subtitle: "Explore intelligent systems and workflows.",
            categoryType: "Technology",
          },
          {
            id: 3,
            title: "UI/UX Design",
            subtitle: "Discover user-centric design patterns.",
            categoryType: "Design",
          },
          {
            id: 4,
            title: "Development Kits",
            subtitle: "Get started with our pre-built components.",
            categoryType: "Tools",
          },
        ]}
      />
    </div>
  );
}
