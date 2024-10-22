import React from "react";
import ProductList from "./productList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const cat1 = [
  {
    title: "Product 1",
    image: "/src/assets/products/product1.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Product 2",
    image: "/src/assets/products/product2.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Product 3",
    image: "/src/assets/products/product3.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Product 4",
    image: "/src/assets/products/product4.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Product 4",
    image: "/src/assets/products/product4.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
];

const cat2 = [
  {
    title: "Life hack",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Life hack",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Life hack",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    title: "Life hack",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
];

const Productstab = () => {
  return (
    <Tabs defaultValue="Best Sellers" className="w-[calc(100%-80px)]">
      <TabsList className="flex w-full justify-center">
        <TabsTrigger value="Best Sellers">Best Sellers</TabsTrigger>
        <TabsTrigger value="Trending">Trending</TabsTrigger>
        <TabsTrigger value="New Arrival">New Arrival</TabsTrigger>
      </TabsList>
      <TabsContent value="Best Sellers">
        <ProductList products={cat1} />
      </TabsContent>
      <TabsContent value="Trending">
        <ProductList products={cat2} />
      </TabsContent>
      <TabsContent value="New Arrival">
        <ProductList products={cat2} />
      </TabsContent>
    </Tabs>
  );
};

export default Productstab;
