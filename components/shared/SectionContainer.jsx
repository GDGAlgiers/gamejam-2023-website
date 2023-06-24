import { forwardRef } from "react";

const SectionContainer = forwardRef(({sectionIndex, children }, sectionsRef) => {
  return <section ref={(element) => sectionsRef.current[sectionIndex] = element} className="min-h-screen">{children}</section>;
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
