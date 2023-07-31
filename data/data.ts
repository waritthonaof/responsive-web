import AthletsM from '../public/athlets_m.png';
import Athlets from '../public/athlets.png';
import Players from '../public/players.png';
import PlayersM from '../public/players_m.png';

export const dataArray = [
  {
    section: 1,
    name: 'Athlets',
    image: Athlets,
    imageM: AthletsM,
    fetures: [
      {
        id: '01',
        name: 'Connection',
        description:
          'Connect with coaches directly, you can ping coaches to view profile.',
        bgColor: 'white',
      },
      {
        id: '02',
        name: 'Collaboration',
        description:
          'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
        bgColor: 'tertiary',
      },
      {
        id: '03',
        name: 'Growth',
        description:
          'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
        bgColor: 'purple',
      },
    ],
  },
  {
    section: 2,
    name: 'Players',
    image: Players,
    imageM: PlayersM,
    fetures: [
      {
        id: '01',
        name: 'Connection',
        description:
          'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
        bgColor: 'white',
      },
      {
        id: '02',
        name: 'Collaboration',
        description:
          'Work with recruiter to increase your chances of finding talented athlete.',
        bgColor: 'tertiary',
      },
      {
        id: '03',
        name: 'Growth',
        description: 'Save your time, recruit proper athlets for your team.',
        bgColor: 'blue',
      },
    ],
  },
];
