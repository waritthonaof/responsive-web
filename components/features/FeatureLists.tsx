import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

import Cards from '../ui/Cards';
import FeatureItem from './FeatureItem';
import { useScreen } from '@/context/ScreenContext';

const FeatureLists = ({
  section,
  features,
}: {
  section: number;
  features: Feature[];
}) => {
  const { widthScreen } = useScreen();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {widthScreen > 0 && widthScreen < 640 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2.5 }}>
          <Swiper pagination={true} modules={[Pagination]} className="">
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <Cards section={section} bgColor="tertiary">
                  <FeatureItem
                    id={feature.id}
                    name={feature.name}
                    description={feature.description}
                    section={section}
                  />
                </Cards>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
      {widthScreen >= 640 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="-z-10 relative">
          {features.map((feature) => (
            <motion.div key={feature.id} variants={item}>
              <Cards section={section} bgColor={feature.bgColor}>
                <FeatureItem
                  id={feature.id}
                  name={feature.name}
                  description={feature.description}
                  section={section}
                />
              </Cards>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};
export default FeatureLists;
