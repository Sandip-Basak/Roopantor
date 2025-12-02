import { NavItem, Play, Film, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Theatre', path: '/theatre' },
  { label: 'Film', path: '/coming-soon' },
  { label: 'Contest', path: '/coming-soon' },
  // { label: 'Film', path: '/film-fest' },
  // { label: 'Contest', path: '/contest' },
  { label: 'About', path: '/about' },
];

export const MANIFESTO_TEXT = `There was a time when India dreamt in Bengali.
When her first stories wore ink from these rivers,
and her first revolutions were written on these walls.
Here, ideas weren’t born, they were awakened.
From the smoky para of an adda, to the hush of a cinema hall,
Bengal didn’t just make art, it made the artist.`;

export const THEATRE_PRODUCTIONS: Play[] = [
  {
    id: '1',
    title: 'DAKKHINESWAR',
    description: 'This play portrays a sacred journey of transcendence, tracing the evolution of an Indian Mystic who began as a seeker and evolved into a universal spiritual icon through the synthesis of diverse paths within the holy temple of Dakshineshwar.',
    image: '/images/t7.jpg',
    date: '03 Dec I 5:15 PM',
    location: 'Roopantor Art Festival',
    group: '',
    director: 'Srijon Chatterjee'
  },
  {
    id: '2',
    title: 'Pritilata',
    description: 'The play chronicles the extraordinary evolution of an ordinary spirit, revealing the untold chapters of a young woman\'s ultimate sacrifice to shatter the chains of subjugation.',
    image: '/images/t4.jpg',
    date: '04 Dec I 4:30 PM',
    location: 'Roopantor Art Festival',
    group: 'Kolkata Natya Sena',
    director: 'Sri. Ayan Sengupta'
  },
  {
    id: '3',
    title: 'Bharatgatha',
    description: 'The play illustrates the transformative power of patriotism, tracing the journey of students and teachers into national icons whose forgotten sacrifices now serve as a blueprint for the youth to build the future.',
    image: '/images/t9.jpg',
    date: '04 Dec I 5:45 PM',
    location: 'Roopantor Art Festival',
    group: 'Kolkata Shilpobhumi',
    director: 'Dr Sukamal Mitra'
  },
  {
    id: '4',
    title: 'Dhoper Chop',
    description: 'The play is a vibrant musical satire on cultural awakening, where a farmer\'s daughter challenges societal hypocrisy to reclaim the dignity of her language and the binding power of a true, unified heritage.',
    image: '/images/t6.jpg',
    date: '04 Dec I 7:00 PM',
    location: 'Roopantor Art Festival',
    group: 'Abhinetri Sangha',
    director: 'Smt. Papia Adhikary'
  },
  {
    id: '5',
    title: 'Andhakarer Dhew',
    description: 'The play captures the turbulence of a generation in crisis, portraying the courageous stand of youth against systemic corruption and the rising tides of oppression to reclaim their future.',
    image: '/images/t3.jpg',
    date: '05 Dec I 4:30 PM',
    location: 'Roopantor Art Festival',
    group: 'Dey Ganga Mahonbanshi Welfare Society',
    director: 'Dr Mahon Ghosh'
  },
  {
    id: '6',
    title: 'Aaguner Chithi',
    description: 'The play acts as an emotional chronicle of immortal sacrifice, bringing to life the final, fiery written words of martyrs who faced death with a smile to pave the path for freedom',
    image: '/images/t5.jpg',
    date: '05 Dec I 5:45 PM',
    location: 'Roopantor Art Festival',
    group: 'Mrichhakotik',
    director: 'Sri Subhasis Bannerjee'
  },
  {
    id: '7',
    title: 'Keno cheye achho go Maa',
    description: 'The play is a stirring tribute to unbroken courage and sacrifice, chronicling the defiance of a pioneer who endured immense physical suffering to prove that the human spirit cannot be caged by tyranny.',
    image: '/images/t2.jpg',
    date: '05 Dec I 7:00 PM',
    location: 'Roopantor Art Festival',
    group: 'Sanskar Bharati',
    director: 'Sri Amiit Dey'
  },
  {
    id: '8',
    title: 'Beej',
    description: 'The play is a gripping investigation into the roots of manipulation and manufactured faith, as the courage to question blind acceptance uncovers a deep-seated conspiracy planted within the community.',
    image: '/images/t8.jpg',
    date: '06 Dec I 3:15 PM',
    location: 'Roopantor Art Festival',
    group: 'Taki Saraswati Natyo Kala Kendra',
    director: 'Prabir Mandal'
  },
  {
    id: '9',
    title: 'YOJONGANDHA',
    description: 'The play celebrates the transformative power of wisdom and resilience, portraying a woman\'s ascent from obscurity to eminence as a timeless testament to female empowerment and the strength found in unity amidst diversity.',
    image: '/images/t10.jpg',
    date: '06 Dec I 4:30 PM',
    location: 'Roopantor Art Festival',
    group: 'Ubaach / UBAACHO',
    director: 'Sanjoy Ghosh Dastidar'
  },
  {
    id: '10',
    title: 'APANKTEO',
    description: 'This play explores the universal quest for dignity and moral balance, illustrating how the overlooked \'shadows\' of civilization unite to reclaim justice for the innocent and prove that no human life is truly insignificant.',
    image: '/images/t1.jpg',
    date: '06 Dec I 6:00 PM',
    location: 'Roopantor Art Festival',
    group: 'Nayabad Titas',
    director: 'Manoj Kr. Saha (Abir)'
  }
];

export const FILMS: Film[] = [
  {
    id: '1',
    title: 'Velvet Sun',
    director: 'Anirban Dutta',
    description: 'A noir exploration of Kolkata\'s jazz era.',
    image: 'https://picsum.photos/1600/900?random=4',
    category: 'Feature',
    time: '14:00 PM'
  },
  {
    id: '2',
    title: 'River\'s End',
    director: 'Sohini Bose',
    description: 'Documentary on the disappearing clay artisans.',
    image: 'https://picsum.photos/1600/900?random=5',
    category: 'Documentary',
    time: '16:30 PM'
  },
  {
    id: '3',
    title: 'Zero One',
    director: 'Rwik Das',
    description: 'Sci-fi meets rural folklore in this experimental short.',
    image: 'https://picsum.photos/1600/900?random=6',
    category: 'Short',
    time: '19:00 PM'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Satyajit Roy',
    role: 'Founder & Artistic Director',
    image: 'https://picsum.photos/400/500?random=7',
    bio: 'Believing that art must comfort the disturbed and disturb the comfortable.'
  },
  {
    id: '2',
    name: 'Aditi Sen',
    role: 'Head of Curation',
    image: 'https://picsum.photos/400/500?random=8'
  },
  {
    id: '3',
    name: 'Kabir Ahmed',
    role: 'Technical Lead',
    image: 'https://picsum.photos/400/500?random=9'
  }
];