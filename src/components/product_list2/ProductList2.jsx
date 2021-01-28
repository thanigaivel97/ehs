/*jshint esversion: 6 */
import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";


const ProductList2 = (props) => {

  const [path,setPath] = React.useState();

  React.useEffect(() => {
    setPath(props.subCat);
    console.log(props.subCat);
  }, [props.subCat]);

  return (
    <div>
      <div className="row">
        <div className="col-sm-3 mt-3 leftProduct">
          <Left path={path} />
        </div>
        <div className="col pr-5">
          <Right
            setCartCountFun={props.setCartCountFun}
            path={path}
          />
        </div>
      </div>

      <div
        className="mt-5"
        style={{ width: "100%", height: "200px", background: "#003459" }}
      ></div>
    </div>
  );
};

export default ProductList2;
