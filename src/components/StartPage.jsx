
import products from "../data.js";
import ProductCard from "./ItemCard.jsx";
const StartPage = () => {

 
  return (
    <main className="bg-sky-500/10 flex-1">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            /*title={item.title ?? item.description}*/
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </main>
  );
};
export default StartPage;
