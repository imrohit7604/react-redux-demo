import React, { useState } from "react";
import { buyIcecream } from "../redux/index";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h2>Number Of Icecream -{props.numOfIcecreams}</h2>
      <input
        type="text"
        id="num"
        onChange={(event) => {
          setNum((event.target.id = event.target.value));
        }}
      />
      <button
        onClick={() => {
          props.buyIcecream(num);
        }}
      >
        Buy Icecream {num}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.iceCream.numOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: (num) => {
      dispatch(buyIcecream(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
