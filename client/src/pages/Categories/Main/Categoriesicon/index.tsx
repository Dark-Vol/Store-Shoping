import { Music, Guitar, Drum, Piano, Headphones, ShoppingBag } from 'lucide-react';

// Иконки для категорий
export const categoryIcons: Record<number, React.ReactNode> = {
  1: <Music size={48} />, // Wind Instruments
  2: <Guitar size={48} />, // String Instruments
  3: <Drum size={48} />, // Percussion Instruments
  4: <Piano size={48} />, // Keyboard Instruments
  5: <Headphones size={48} />, // Electronic Instruments
  6: <ShoppingBag size={48} />, // Accessories
};

// Иконки для категорий (большой размер для hero секции)
export const categoryIconsLarge: Record<number, React.ReactNode> = {
  1: <Music size={64} />, // Wind Instruments
  2: <Guitar size={64} />, // String Instruments
  3: <Drum size={64} />, // Percussion Instruments
  4: <Piano size={64} />, // Keyboard Instruments
  5: <Headphones size={64} />, // Electronic Instruments
  6: <ShoppingBag size={64} />, // Accessories
};
