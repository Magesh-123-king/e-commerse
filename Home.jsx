import { useEffect, useState } from "react";
import Blog from "./Blog";
import Header from "./Header";
import Footer from "./Footer";
import Caraousel from "./Caraousel";

export default function Home() {
  const [fruitdetails, setFruit] = useState([]);
  const [vegdetails, setVeg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/fruits").then((res) => res.json()),
      fetch("http://localhost:3000/vegetable").then((res) => res.json()),
    ])
      .then(([fruitsData, vegData]) => {
        setFruit(fruitsData);
        setVeg(vegData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center mt-5">
        <button className="btn btn-info">
          Loading <span className="spinner-grow spinner-grow-sm"></span>
        </button>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <Caraousel />

      {/* FRUITS */}
      <div className="container mt-5">
        <h3 className="mb-4">Fruits</h3>
        <div className="row gap-5 justify-content-center">
          {fruitdetails.map((val) => (
            <Blog key={val.id} obj={val} />
          ))}
        </div>
      </div>

      {/* VEGETABLES */}
      <div className="container mt-5">
        <h3 className="mb-4">Vegetables</h3>
        <div className="row gap-5 justify-content-center">
          {vegdetails.map((val) => (
            <Blog key={val.id} obj={val} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
