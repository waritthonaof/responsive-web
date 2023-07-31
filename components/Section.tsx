'use client';

import { StaticImageData } from 'next/image';

import Heading from './ui/Heading';
import FeatureLists from './features/FeatureLists';
import ImageUi from './ui/ImageUi';
import { useScreen } from '@/context/ScreenContext';

interface SectionProps {
  section: number;
  name: string;
  image: string | StaticImageData;
  imageM: string | StaticImageData;
  features: Feature[];
}

const Section = ({ section, name, image, imageM, features }: SectionProps) => {
  const { widthScreen } = useScreen();

  return (
    <section className="relative">
      {widthScreen >= 640 && (
        <>
          <Heading section={section} name={name} />
          <ImageUi section={section} image={image} name={name} />
        </>
      )}
      {widthScreen > 0 && widthScreen < 640 && (
        <>
          <Heading section={section} name={name} />
          <ImageUi section={section} image={imageM} name={name} />
        </>
      )}
      <FeatureLists section={section} features={features} />
    </section>
  );
};
export default Section;
