import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ title, description, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl text-ink">{title}</h2>
        {description ? <p className="mt-3 text-sm leading-7 text-steel">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
