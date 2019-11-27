/* Inteface Order.ts */

export interface Order {
    products: Products[];
    price: number;
}

export interface Products {
    product_id: number;
    name: string;
}