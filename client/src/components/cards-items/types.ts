export interface Color {
    name: string;
    hex: string;
    image: string;
}

export interface Product {
    name: string;
    category: string;
    description: string;
    price: number;
    colors: Color[];
    sizes: number[];
}

export interface Instrument {
    name: string;
    category: string;
    description: string;
    price: number;
    colors: Color[];
    sizes: number[];
}
