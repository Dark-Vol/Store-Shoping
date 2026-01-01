import React from "react";
import { LucideIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  position: string;
  icons: React.ReactNode[];
  description: string;
  img?: string;
}

export const getTeamMembers = (
  GuitarIcon: LucideIcon,
  PianoIcon: LucideIcon,
  DrumIcon: LucideIcon,
  MicIcon: LucideIcon
): TeamMember[] => [
  {
    name: "Алексей Петров",
    position: "Основатель и CEO",
    icons: [
      React.createElement(GuitarIcon, { key: "guitar1", style: { color: '#fb923c' } }),
      React.createElement(PianoIcon, { key: "piano1", style: { color: '#fb923c' } })
    ],
    description: "Профессиональный гитарист с 20-летним стажем. Основал компанию с мечтой сделать музыку доступной для всех."
  },
  {
    name: "Мария Иванова",
    position: "Менеджер по продукту",
    icons: [
      React.createElement(PianoIcon, { key: "piano2", style: { color: '#3b82f6' } }),
      React.createElement(MicIcon, { key: "mic1", style: { color: '#3b82f6' } })
    ],
    description: "Классическая пианистка и вокалистка. Отвечает за качество и ассортимент клавишных инструментов."
  },
  {
    name: "Дмитрий Козлов",
    position: "Технический директор",
    icons: [
      React.createElement(DrumIcon, { key: "drum1", style: { color: '#ef4444' } }),
      React.createElement(GuitarIcon, { key: "guitar2", style: { color: '#ef4444' } })
    ],
    description: "Барабанщик и звукоинженер. Специализируется на ударных инструментах и звуковом оборудовании."
  }
];
