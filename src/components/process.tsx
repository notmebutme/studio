

import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { processSteps } from "@/lib/services-data";
import { FeatureSteps } from "./ui/feature-section";

export function Process() {
  const features = processSteps.map(step => ({
    step: step.title,
    content: step.description,
    image: step.image,
  }));

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/20">
        <FeatureSteps
            features={features}
            title="Our 3-Step Flow"
        />
    </section>
  );
}
