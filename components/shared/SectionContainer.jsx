import { forwardRef } from "react";

const SectionContainer = forwardRef(({sectionIndex, children }, sectionsRef) => {
  return <section  ref={(element) => sectionsRef.current[sectionIndex] = element} className="min-h-[80vh] lg:min-h-screen relative">{children}</section>;
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
