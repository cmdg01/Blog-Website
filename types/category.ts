export interface Category {
    id: number;
    name: string;
    slug: string;
    size: 'large' | 'medium' | 'small'; // Include size property
}