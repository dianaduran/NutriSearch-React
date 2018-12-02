import React, { Component } from 'react';


class TodoList extends Component {
    state = { 
        items:[],
        text:'',
        
     }

     

    render() { 
      
        
        return ( 
            <>
            <React.StrictMode>
            <input type="text" onChange={this.onChange} value={this.state.text}></input>
            <button onClick={this.onSubmit}>Click!</button>
            <ul>
                {this.state.items.map((value, pos)=>
                  <li className={value.clicked ? 'is-done':''} key={pos} onClick={this.onSubray.bind(this, pos)}>{value.texto}</li>  
            )}                
            </ul>
            </React.StrictMode>
            <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
         );
    }

    onChange=(e)=>{
        this.setState({ text: e.target.value.toUpperCase() });
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const input=this.state.text;
        if(!this.state.text.length)
        return;

        const newItem=({
                  texto:input,
                  clicked:false
                });

        this.setState({items: [...this.state.items,newItem], 
                      text:''})
    }

    onSubray=(pos)=>{
       
        const values=this.state.items;
              
       values[pos].clicked=!values[pos].clicked;
      

        this.setState({items: values});
    }
}
 
export default TodoList;