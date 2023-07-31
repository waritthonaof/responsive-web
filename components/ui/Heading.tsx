import { motion } from 'framer-motion';

const Heading = ({ section, name }: { section: number; name: string }) => {
  const heading = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={heading}
      initial="hidden"
      animate="visible"
      className={`pb-0 mb-[-1.5rem] ${
        section === 1 ? 'card-1 py-4 ' : 'card-2 pt-4 sm:pt-20'
      }`}>
      <div className={section === 1 ? 'sm:col-start-2' : 'sm:col-start-1'}>
        <h1 className="text-primary uppercase text-[50px] tracking-wide sm:text-[90px]">
          {name}
        </h1>
      </div>
    </motion.div>
  );
};
export default Heading;
