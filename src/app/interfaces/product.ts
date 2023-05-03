export interface Product {
  id:number,
  title:string,
  price:number,
  description:string,
  category:{
    id:number,
    name:string,
    typeImg:string
  },
  images:string[]
}
