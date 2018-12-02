import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import React from 'react';

ReactChartkick.addAdapter(Chart)

const Graph=(props)=>{
    return(
       <PieChart data={props.values}  /> 
    )

};

export default Graph;