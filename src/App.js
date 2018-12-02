import React, { Component } from 'react';
import './App.scss';
import API from "./help";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Graph from "./components/Graph";


class App extends Component {

constructor(props, context) {
  super(props, context);

  // Set initial State
  this.state = {
       value: [],
       valueGraph:{
        "Carbohydrate": 0,
        "Fat": 0,
        "Fiber": 0,
        "Protein": 0,
        "Sugar": 0
       }
   };

  // Bind `this` context to functions of the class
  this.GetProp = this.GetProp.bind(this); 
}

GetProp(food){
  console.log(food);

  API.getProperties(food)
               .then(res =>{
               // console.log(res.data.report.foods["0"].nutrients)
                const response= res.data.report.foods["0"].nutrients 
                const values= API.getObjValue(response);
                const vGraph=API.getValuesWithoutUnit(response);
                console.log(vGraph);
                 this.setState({
                        value: values,
                        valueGraph:vGraph
                    });
                                   
               
               })
               .catch(err => console.log(err));
 }

 

 
  render() {
    return (
    <div className="main">
     <Header />
     <Search GetProp={this.GetProp}/>
     <div className="call-outs-container">
        <div className="call-out">
          <Table values={this.state.value}/>
        </div>
        <div className="call-out">
           <Graph values={this.state.valueGraph} /> 
        </div>
      </div>
      </div>
    );
  }
}

export default App;
