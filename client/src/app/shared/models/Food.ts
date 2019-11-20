/* Interface Food */

export interface Food {
    is_food: boolean;
    category: string;
    products: Products[];
}

export interface Products {
    product_id: number;
    image: string;
    name: string;
    price: number;
}