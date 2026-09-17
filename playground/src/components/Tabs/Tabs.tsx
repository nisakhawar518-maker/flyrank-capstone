import { useState, useRef } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let newIndex = activeIndex;
    if (e.key === "ArrowRight") {
      newIndex = (activeIndex + 1) % tabs.length;
    }
    if (e.key === "ArrowLeft") {
      newIndex = (activeIndex - 1 + tabs.length) % tabs.length;
    }
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div>
      <div role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
           ref={(el) => { tabRefs.current[index] = el; }}
            role="tab"
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div key={tab.id} role="tabpanel" hidden={activeIndex !== index}>
          {tab.content}
        </div>
      ))}
    </div>
  );
}