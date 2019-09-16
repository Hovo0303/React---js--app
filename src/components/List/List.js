import React from "react";
import './List.css';
import { isFlowBaseAnnotation } from "@babel/types";
class List extends React.Component {
    constructor(){
        super();
        this.state={
          loading:false,
          currencies:[],
          error:null, 


        }
    }
}
export default List
