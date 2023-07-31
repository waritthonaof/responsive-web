import Section from '@/components/Section';

import { dataArray } from '@/data/data';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {dataArray.map((data) => (
        <Section
          key={data.section}
          section={data.section}
          image={data.image}
          imageM={data.imageM}
          name={data.name}
          features={data.fetures}
        />
      ))}
    </main>
  );
}
