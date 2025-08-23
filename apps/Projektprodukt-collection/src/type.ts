export interface IProduct{
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  colors: { frame: string; lens: string; }
  materials: { front?: string; temple?: string; overall?:string }
  variants: { code: string; name: string; color:string; thumbnail:string, id:number}[]
  gallery: string[];
  size?: {
    frame: string[]; lens: string[]; leg: string[];
  }
  mainProduct: boolean;
}
