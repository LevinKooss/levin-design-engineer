import { DesignProjectCard } from './DesignProjectCard';
import image from '../../assets/LumiPhone.png';
import background from '../../assets/Lumi.png';

export const LumiCard = () => (
  <DesignProjectCard
    title="Lumi"
    path="/lumi"
    description="A digital connection concept exploring small, meaningful interactions between people separated by distance."
    labels={["Interaction Design","UI Design","Concept Project"]}
    image={image}
    imageAlt="Lumi concept: a playful mobile interface with a central send action"
    imageWidth={341}
    imageHeight={549}
    background={background}
    accent="lumi"
  />
);
