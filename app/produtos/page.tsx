'use client'

import useSWR from 'swr';
import Product from "@/app/models/interface";
import Card from "@/app/components/Card/Card";
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error, isLoading } = useSWR<Product[]>('https://deisishop.pythonanywhere.com/products/', fetcher);
  const [search, setSearch] = useState("")

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>No data available</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>DEISI Shop</h1>
      <h3>Filters</h3>
      <p>Select Filters</p>
      <input placeholder="Pesquisar" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <div style={{ listStyle: 'none', padding: 0 }}>
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}