import RestaurantCard from "./RestaurantCard.js"
import { useState , useEffect } from "react";
import resList from "./utils//mocData.js"

const Body =()=>{
    const[listOfRestaurants , setListOfRestaurants]=useState(resList);
    const[searchText,setsearchText]=useState();
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch (
           " https://www.zomato.com/webroutes/auth/init");
        const json = await data.json();

        console.log(json);
        // setListOfRestaurants(json?.success);

    }
    return (
        <div className="card" >
            <div className="upper">
            <div className="search" >
                <input type="search" value={searchText} onChange={(e)=> {
                    setsearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    const filteredRestaurant =listOfRestaurants.filter((res)=>res.data.name.includes(searchText))
                    setListOfRestaurants(filteredRestaurant); 
                }}>Search</button>
            </div>
            <div>
            <button className="filter-btn" 
            onClick={()=>{const filteredlist = listOfRestaurants.filter (
                (res) => res.data.deliveryTime>35   
            );
            setListOfRestaurants(filteredlist);
        }}
            >Top rated Restaurants</button> 
        </div>
        </div>
             
        <div className="res-container">
            {listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
            ))}
            
        </div>
        </div>
    );
};
export default Body;