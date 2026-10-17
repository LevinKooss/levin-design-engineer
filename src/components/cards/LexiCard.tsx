import { DesignProjectCard } from './DesignProjectCard';
import image from '../../assets/LexiPhone.png';
import background from '../../assets/Lexi.png';

export const LexiCard = () => (
  <DesignProjectCard
    title="Lexi"
    path="/lexi"
    description="An accessibility-oriented reading assistant concept exploring text simplification, reading controls, and reduced interface complexity."
    labels={["UI Design","Interaction Design","Concept Project"]}
    image={image}
    imageAlt="Lexi concept: mobile reading interface with text and audio controls"
    imageWidth={202}
    imageHeight={490}
    background={background}
    accent="lexi"
  />
);
