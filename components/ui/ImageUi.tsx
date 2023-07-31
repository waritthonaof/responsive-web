import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const ImageUi = ({
  section,
  image,
  name,
}: {
  section: number;
  image: string | StaticImageData;
  name: string;
}) => {
  // sm:left-[60%] lg:left-[43%] lg:right-[20%]
  const imageClass =
    section === 1
      ? 'flex justify-center sm:absolute sm:top-10 sm:right-[60%] lg:right-1/2 lg:left-[unset]'
      : 'flex justify-center sm:absolute sm:top-10 sm:left-[42%] lg:left-[42%] xl:top-0 xl:pt-0 xl:right-[20px] ';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 2 }}
      className={imageClass}>
      <Image
        src={image}
        alt={name}
        className={`relative z-10 -bottom-12 sm:bottom-0 ${
          section === 1 ? 'sm:min-w-[498px]' : 'sm:min-w-[691px]'
        } `}
      />
    </motion.div>
  );
};
export default ImageUi;
