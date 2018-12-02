import React, { Component } from 'react';


export default class TodoList extends Component {

   
        state = {
            items:[],
            input:''
        };



        getApp=()=>{
            let totalTask = this.state.items.length;
            let reimainingTask = this.state.items.filter(i => i.done === false).length;
            let displayText = `${reimainingTask} remaining out of ${totalTask} tasks`;
            return(
            <div style={{padding:10}}>
            <h2>
                Todo List
            </h2>
            <div>
                <input type={"text"}
                value={this.state.input}
                onChange={this.handleInputChange}
                name="input"
               />
                <button onClick={()=>this.addTask()}>Add</button>
                <div className="task-counter">{displayText}</div>
                <ul>
                 {this.state.items.map((value, pos) =>
                        <li className={value.done ? "is-done" : '' } key={pos} onClick={event => this.onItemClick(pos)}>{value.text}</li>)
                    }
                </ul>
            </div>
        </div>
            );
        }
    

    render() {
       

        return (
            <>
              {this.getApp()}
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }

    addTask=()=> {
        const newItem = this.state.input;
        if(!newItem)
            return;

        const values = this.state.items;
              values.push({
                  text: newItem,
                  done: false               
              });

        this.setState({values, input:""});
    }

    onItemClick=(pos)=> {

       const values =  this.state.items;
       console.log(values[pos]);
             values[pos].done = !values[pos].done;

        this.setState({items:values})
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    
}