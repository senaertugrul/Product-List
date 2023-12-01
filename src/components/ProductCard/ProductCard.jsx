import data from "../../helper/data.js";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="container">
        {
            data.map((item,index)=>(
                <div key={index} className="card">
                    <div className="card-over">
                        <p>{item.title}</p>
                    </div>
                    <h1>{item.price} $</h1>
                    <img src={item.image} alt="" />
                </div>
                
            ))
        }
       
    </div>
  )
}

export default ProductCard