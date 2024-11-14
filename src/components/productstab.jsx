import React from "react";
import ProductList from "./productList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const cat1 = [
  {
    id: 1,
    title: "Product 1",
    image: "/src/assets/products/product1.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    id: 4,
    title: "Product 4",
    image: "/src/assets/products/product6.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
    sale: true,
  },
  {
    id: 2,
    title: "Product 2",
    image: "/src/assets/products/product2.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },

  {
    id: 3,
    title: "Product 3",
    image: "/src/assets/products/product4.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
  },
  {
    id: 4,
    title: "Product 4",
    image: "/src/assets/products/product6.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
    sale: true,
  },
  {
    id: 5,
    title: "Product 5",
    image: "/src/assets/products/product7.png",
    descriptio: "How to park your car at your garage?",
    btn: "Learn Now",
    sale: true,
  },
  {
    id: 2,
    title: "Product 2",
    image: "/src/assets/products/product2.png",
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
        <ProductList products={cat1.reverse()} />
      </TabsContent>
      <TabsContent value="New Arrival">
        <ProductList products={cat1} />
      </TabsContent>
    </Tabs>
  );
};

export default Productstab;
