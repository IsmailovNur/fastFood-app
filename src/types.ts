export interface Order {
  name: string;
  price: number;
  image: string;
}

export interface Position extends Order {
  id: number;
}