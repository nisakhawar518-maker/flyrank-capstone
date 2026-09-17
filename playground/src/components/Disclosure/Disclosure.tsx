import { useState } from "react";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export function Disclosure({ title, children }: DisclosureProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
       onClick={() => setIsExpanded(!isExpanded)}
       aria-expanded={isExpanded}
      >
        {title}
      </button>

      {isExpanded && <div>{children}</div>}
    </div>
  );
}