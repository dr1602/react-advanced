export interface ApiFetchProps {
    id: number;
    url: string;
}

export interface BerryProps {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
}

export interface UseFetchProps {
    id: number;
    url: string;
}

export interface FetchState {
    error: string;
    isLoading: boolean;
}

export interface ProductProps {
    image: string;
    name: string;
    description: string;
    category: string;
    price: number;
}

export interface ProductCardProps {
    product: ProductProps;
}