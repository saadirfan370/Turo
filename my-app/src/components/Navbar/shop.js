import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index'


const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depoditMoney} = bindActionCreators(actionCreators,dispatch);
    return(
        <div>
            <h2>Deposit/withdrow Money</h2>
            {/* <button className="btn btn-primary mx-2"onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2"onClick={()=>dispatch(actionCreators.depoditMoney(100))}>+</button> */}
            <button className="btn btn-primary mx-2"onClick={()=>withdrawMoney(100)}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2"onClick={()=>depoditMoney(100)  }>+</button>
        </div>
    )
}
export default Shop;