import { useNavigate } from "react-router-dom";
const ProductCard = ({ image, title, description, price ,id }) => {

    const navigate = useNavigate();
    const handleClick = () =>{
        console.log("it clicks from navigated", id);
        navigate("/product/" + id)
        
    }
  return (
    <li className="rounded-lg bg-white/50 shadow-sm transition-transform duration-200 ease-in-out hover:scale-105">
      <div className="aspect-square overflow-hidden rounded-lg bg-white/50">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-3">
        <h3>{title}</h3>
        <p className="text-sm font-medium ">{description}</p>
        <p> {price} $ </p>
        <button onClick={()=>handleClick(id)} className="mt-2 rounded-lg bg-cyan-600 px-3 py-1.5 text-white hover:bg-cyan-700">
          {" "}
          More Details{" "}
        </button>
      </div>
    </li>
  );
};
export default ProductCard;
