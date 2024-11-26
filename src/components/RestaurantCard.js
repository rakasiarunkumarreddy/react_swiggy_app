// import {CDN_URL} from "./utils/constants.js";

const RestaurantCard =(props)=>{
    const {resData}=props;
    const {
      cloudinaryImageId,
      name,
      area,
      deliveryTime,
      city
  }=resData?.data;
    return (
        <div className="res-card">
          <img className="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
          <h3>{name}</h3>
          <h3>{area}</h3>
          <h3>{deliveryTime}</h3>
          <h3>{city}</h3>


        </div>
    )
}
export default RestaurantCard;