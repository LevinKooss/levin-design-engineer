import { DesignProjectCard } from './DesignProjectCard';
import image from '../../assets/fithubhero.avif';

export const FitHubCard = () => (
  <DesignProjectCard
    title="FitHub"
    path="/fithub"
    description="A concept for a connected fitness coaching workspace, bringing training, nutrition, and client management into a unified interface."
    labels={["Product Design","UI Design","Concept Project"]}
    image={image}
    imageAlt="FitHub concept: a desktop overview of coaching clients"
    imageWidth={2880}
    imageHeight={2048}
    accent="fit"
  />
);
