import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=0"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching date: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1 className="text-xl font-semibold">Home</h1>
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg justify-center items-center pt-10">
        {isLoading ? (
          <p className="text-center col-span-4 row-span-2">Loading...</p>
        ) : error ? (
          <p className="text-center col-span-4 row-span-2">
            Error fetching data
          </p>
        ) : products?.length ? (
          products?.map((product) => <Card key={product.id} data={product} />)
        ) : (
          <p className="text-center col-span-4 row-span-2">No products</p>
        )}
      </section>
    </Layout>
  );
}

export default Home;
