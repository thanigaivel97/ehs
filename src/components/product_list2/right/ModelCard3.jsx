/*jshint esversion: 6 */
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";
import $ from "jquery";
import {findMat,findDim} from '../../../helper/apiPath';

const ModelCard3 = (props) => {
  var [count, setCount] = useState(1);

  function onAdd() {
    return setCount(count + 1);
  }
  function onSub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="text-center justify-content-center">
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        style={{ height: "38px" }}
      >
        <Button onClick={onSub} className="shadow-none">
          <RemoveIcon style={{ color: "grey" }} />
        </Button>
        <Button
          style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "22px",
            color: "#000000",
            paddingLeft: "18px",
            paddingRight: "18px",
          }}
        >
          {count}
        </Button>
        <Button onClick={onAdd}>
          <AddIcon style={{ color: "grey" }} />
        </Button>
      </ButtonGroup>

      <p
        className="mt-3"
        style={{
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: " 14px",
          lineHeight: "17px",
          textAlign: "center",
          color: "#000000",
        }}
      >
        Material : {findMat(props.selectMatDim.Material)}
      </p>

      <p
        style={{
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: " 14px",
          lineHeight: "17px",
          textAlign: "center",
          color: "#000000",
          marginTop: "-5px",
        }}
      >
        Dimension : {findDim(props.selectMatDim.Dimension)}
      </p>

      <p className="mt-2">
        Price:
        <span
          className="ml-2 mr-1"
          style={{
            fontWeight: "800",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#003459",
          }}
        >
          ₹{props.det.price}
        </span>
        <span
          style={{ fontSize: "10px", lineHeight: "12px", color: "#757575" }}
        >
          (Inclusive of all Taxes)
        </span>
      </p>
      <Button
        className="text-white pl-3 pr-3 pt-2 pb-2"
        onClick={() => {
          if (findMat(props.selectMatDim.Material) && findDim(props.selectMatDim.Dimension)) {
            props.addToCart({
              ...props.selectMatDim,
              ...props.oriDet,
              quantity: count,
            });
            $("#modalClose").click();
            setCount(1);
          }else {
            alert("Select The Proper Materail and Dimension");
          }
        }}
        style={{
          fontFamily: "Lato",
          fontStyle: " normal",
          fontWeight: "bold",
          fontSize: " 14px",
          lineHeight: "22px",
          textAlign: " center",
          background: " #F2994A",
          borderRadius: "6px",
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};
export default ModelCard3;
