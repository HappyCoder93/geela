/* Interface Food.ts */

export interface Food {
    category: string;
    products: Products[];
}

export interface Products {
    product_id: number;
    name: string;
    price: number;
    image: string;
}