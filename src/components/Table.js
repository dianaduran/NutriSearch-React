import React from "react";

const Table =(props)=>{
   
    let {Energy, Fiber, Protein, Sugar, Fat, Carbohydrate}=props.values; 
  
    return ( 
     <div className="table-container">
      <h3 className="title text-center">Nutrition Facts</h3>
      <hr className="hr-ntrFacts" />
      <h4 className="nutrients">
        Calories {Energy}
      </h4>
      <hr className="hr-cal" />
      <h4 className="nutrients text-right">% Daily Value*</h4>
      <hr className="hr-space" />
      <h4 className="nutrients">
        Total Fat {Fat}
      </h4>
      <hr className="hr-space" />
      <h4 className="nutrients">
        Total Carbohydrates {Carbohydrate}
      </h4>
      <hr className="hr-space hr-sugar" />
      <h4 className="nutrients sugar-class">
        Sugars {Sugar}
      </h4>
      <hr className="hr-space hr-sugar" />
      <h4 className="nutrients sugar-class">
        Dietary Fiber {Fiber}
      </h4>
      <hr className="hr-space" />
      <h4 className="nutrients">
        Protein {Protein}
      </h4>
      <hr className="hr-ntrFacts" />
      <h6 style={{opacity: '0.5'}}>
        * Percent Daily Values are based on a 2000 calorie diet.
      </h6>
    </div>
 );
 
}
 
export default Table;


