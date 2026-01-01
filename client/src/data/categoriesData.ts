export interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

export const categories: Category[] = [
  { 
    id: 1, 
    name: 'Wind Instruments', 
    subcategories: ['Flutes', 'Saxophone', 'Trumpet'] 
  },
  { 
    id: 2, 
    name: 'String Instruments', 
    subcategories: ['Guitars', 'Cello', 'Violin'] 
  },
  { 
    id: 3, 
    name: 'Percussion Instruments', 
    subcategories: ['Drums', 'Xylophone', 'Cymbals'] 
  },
  { 
    id: 4, 
    name: 'Keyboard Instruments', 
    subcategories: ['Piano', 'Organ', 'Synthesizer'] 
  },
  {
    id: 5,
    name: 'Electronic Instruments',
    subcategories: ['Electric Guitars', 'Electronic Drums', 'MIDI Controllers']
  },
  {
    id: 6, 
    name: 'Accessories', 
    subcategories: ['Midiators', 'Strings', 'Cases']
  },
];
