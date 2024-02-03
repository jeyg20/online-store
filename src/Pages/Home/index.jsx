import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [Products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=100"
        );
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      Home
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {Products?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </section>
    </Layout>
  );
}

export default Home;
