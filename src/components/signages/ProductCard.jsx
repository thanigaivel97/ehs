import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {Link} from "react-router-dom";

const ProductCard = (props) =>{
    return(
        <div className="productCardBox">
            <img src={props.src} className="ml-0 mr-0" alt="productImage" className="productCardImg"/>
            <div className="">
                <Link className="mt-1 mb-1 productCardTitle " to={`/${props.catName}/PPE/ProductName`} >{props.name}</Link>
                <p className="mb-0 mb-sm-2 productCardDetail ">Starts from Rs. {props.startPrice}<span className="float-right d-flex" style={{color: "#757575" , height: "12px"}}>{props.rating}<StarIcon className="d-none d-sm-inline-block" style={{width: "16px",height: "16px", color: "#F2C94C"}}  /><StarIcon className="d-inline-block d-sm-none mt-0 " style={{width: "12px",height: "12px", color: "#F2C94C"}}  /></span></p>
                <div className="d-inline-block productCardAddToCart  " role="button">Add to Cart</div>
                <span className="productCardDetail2  d-inline-block  mt-2 mt-sm-0">{props.itemBought} bought this</span>
            </div>
        </div>
    );
};

export default ProductCard;