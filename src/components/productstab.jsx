import React from "react";
import ProductList from "./productList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cat1 } from "@/constant";

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
