"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
  categoryType?: string;
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div className={cn("w-full bg-background text-foreground px-4 py-8 md:p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-base text-muted-foreground mt-3">{subtitle}</p>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-2">
          {categories.slice(0, visibleCount).map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                  hoveredItem === category.id
                    ? 'border-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'border-border hover:border-primary/50'
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className={cn(
                  "flex items-start justify-between gap-3 md:gap-6 px-5 md:px-9 transition-all duration-300",
                  hoveredItem === category.id ? 'py-7 md:py-8' : 'py-4 md:py-5'
                )}>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                        {category.title.startsWith('Heard: ') ? 'Heard' : ''}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "font-semibold leading-snug tracking-tight transition-colors duration-300",
                        category.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
                        hoveredItem === category.id ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {category.title.startsWith('Heard: ') ? category.title.slice(7) : category.title}
                    </h3>
                    {category.subtitle && (
                      <div className="mt-4">
                        <div className="mb-1">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                            {category.subtitle.startsWith('Did: ') ? 'Did' : ''}
                          </span>
                        </div>
                        <p
                          className={cn(
                            "text-sm leading-relaxed transition-colors duration-300",
                            hoveredItem === category.id ? 'text-foreground/70' : 'text-muted-foreground'
                          )}
                        >
                          {category.subtitle.startsWith('Did: ') ? category.subtitle.slice(5) : category.subtitle}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  {category.icon && hoveredItem === category.id && (
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                      {category.icon}
                    </div>
                  )}

                  {/* Category type badge */}
                  {category.categoryType && (
                    <div className="shrink-0 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-border bg-muted text-[11px] md:text-xs font-medium text-muted-foreground select-none pointer-events-none">
                      {category.categoryType}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        {visibleCount < categories.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + 4)}
              className="px-6 py-2.5 border border-border bg-card text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-200"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};