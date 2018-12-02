import React, { Component } from 'react';
import Autocomplete from "react-autocomplete"; 
import API from "../help";
import Button from '@material-ui/core/Button';

class Search extends Component {

    constructor(props, context) {
        super(props, context);

        // Set initial State
        this.state = {
            // Current value of the select field
            value: "",
            autocompleteData: [],
            ndbno:""
        };

        // Bind `this` context to functions of the class
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }

    //second call
    retrieveDataAsynchronously(searchText){

        let _this=this;      
        if(searchText.length >3){
         
            API.getNutrients(searchText)
               .then(res =>{
                // console.log(res.data.list.item)
                const response= res.data.list.item  
                if(response!==undefined){
                    _this.setState({
                        autocompleteData: response
                    });
                                   
                }
               })
               .catch(err => console.log(err));
         }
    }

    

    //first call
    onChange(e){
        this.setState({
            value: e.target.value
        });
    this.retrieveDataAsynchronously(e.target.value);
    }

      //third call
    renderItem(item, isHighlighted){
        const str = item.name;
        const rest = str.substr(0, str.search(", UPC")); //get the string without UPC number
       
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.ndbno}>
                           {rest}                
            </div>   
        ); 
    }

    //fourth call
    getItemValue(item){  
        // console.log("item",item) 
        return `${item.name}*${item.ndbno}`;
       
    }

    //fifth call
    onSelect(val){
        // console.log("val",val)
       const pos=val.indexOf('*');
       const ndbo= val.substr(pos+1, val.length); //get the ndbo number from state
    //    console.log("ndbo ",ndbo);

       const value=val.substr(0, val.indexOf(','));
    //    console.log("value", value);
        this.setState({
            value: value, ndbno: ndbo
        });
    }

    onsubmit(e){
        e.preventDefault();
        const value=this.state.ndbno;
        this.props.GetProp(value);
    }

    render() { 
        return ( 
            <div className="div-search">
               <Autocomplete
                 getItemValue={this.getItemValue}
                 items={this.state.autocompleteData}
                 renderItem={this.renderItem}
                 value={this.state.value}
                 onChange={this.onChange}
                 onSelect={this.onSelect}
                />
            <div className="btn-search">
               <Button variant="contained" color="primary" onClick={this.onsubmit}>
                 Search
               </Button>
            </div>
            </div>
         );
    }
}
 
export default Search;