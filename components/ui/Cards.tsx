import { ReactNode } from 'react';

const Cards = ({
  section,
  bgColor,
  children,
}: {
  section: number;
  bgColor: string;
  children: ReactNode;
}) => {
  const colorVariants: { [key: string]: string } = {
    white: 'bg-white',
    tertiary: 'bg-tertiary',
    purple: 'bg-purple',
    blue: 'bg-dark-blue',
  };

  return (
    <div
      className={`${colorVariants[bgColor]} pt-20 pb-14 h-full sm:pt-0 sm:pb-0`}>
      <div className={section === 1 ? 'card-1' : 'card-2'}>
        <div className={section === 1 ? 'sm:col-start-2' : 'sm:col-start-1'}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Cards;
