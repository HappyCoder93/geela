/* Inteface Drink */

export interface Drink {
    category: string;
    products: Products[];
}

export interface Products {
    product_id: number;
    name: string;
    price: number;
    image: string;
}