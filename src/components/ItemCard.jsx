import products from "../data.js"
const ProductCard = ({image , title, description, price})=>{

    return(
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p> {price} $ </p>
            <button> More Details </button>
        </li>
    )
}
export default ProductCard