import { useScreen } from '@/context/ScreenContext';

const FeatureItem = ({
  id,
  name,
  description,
  section,
}: {
  id: string;
  name: string;
  description: string;
  section: number;
}) => {
  const { widthScreen } = useScreen();

  let afterId = 'after:bg-purple';
  let textColor = '';

  if (widthScreen >= 640 && id === '03') {
    afterId = 'after:bg-white';
    textColor = 'text-white';
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="text-black text-sm py-2 sm:text-lg">
          <span
            className={`heading-tag ${afterId} ${
              widthScreen >= 640 && id === '03' && section === 2
                ? 'text-purple'
                : ''
            }`}>
            {id}
          </span>
        </div>
        <h4 className="text-secondary uppercase font-normal text-[28px] tracking-wide sm:text-4xl">
          {name}
        </h4>
      </div>
      <p className={`text-base sm:text-xl mt-4 ${textColor}`}>{description}</p>
    </>
  );
};
export default FeatureItem;
