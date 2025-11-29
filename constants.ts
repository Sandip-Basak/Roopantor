import { NavItem, Play, Film, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Theatre', path: '/theatre' },
  { label: 'Film Festival', path: '/film-fest' },
  { label: 'Contest', path: '/contest' },
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
    title: 'The Unfinished Song',
    description: 'A deep dive into the revolutionary spirit of the 70s, where silence spoke louder than words.',
    image: 'https://picsum.photos/800/1200?random=1',
    date: 'Oct 15 - Oct 20, 2024',
    location: 'Star Theatre, Kolkata'
  },
  {
    id: '2',
    title: 'Shadows of the Ghat',
    description: 'An ethereal journey through the mists of the Ganges, exploring life, death, and what lies between.',
    image: 'https://picsum.photos/800/1200?random=2',
    date: 'Nov 05 - Nov 12, 2024',
    location: 'Academy of Fine Arts'
  },
  {
    id: '3',
    title: 'Echoes of 1905',
    description: 'Reinterpreting the swadeshi movement through a modern, abstract lens.',
    image: 'https://picsum.photos/800/1200?random=3',
    date: 'Dec 01 - Dec 03, 2024',
    location: 'Rabindra Sadan'
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