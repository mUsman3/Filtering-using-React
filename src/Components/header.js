import React  from "react";
//importing styles
import "../css/styles.css";

const Headers = (props) => {

    return (
      <header>
        <div>
            <input type="text" 
            onChange={props.keyword}
            /> 
        </div>
      </header>
    );
  }
export default Headers;
