import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './Components/data/data'
import Item from './Components/Item';
import List from './Components/List'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: data, 
      term: '',
      items: [], 
      loading : true
      
      
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCheck = this.onCheck.bind(this)
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        loading: false
      })
    }, 2000)
  }
  onChange = (e) => {
      this.setState({ term : e.target.value})
      
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ 
      term: '',
      items: [...this.state.items, this.state.term]
    })
    console.log(this.state.items)
  }
  onCheck = () => {
    this.setState( prevState => {
      return { 
        completed: !prevState
      }
    })
  }
  render() {
   
    return (
   
      <div className='container wrap'>
      
         <List loading={this.state.loading}/>
      
         <form onSubmit={this.onSubmit}> 
           <input value={this.state.term} onChange={this.onChange} />
           <button>Submit</button>
         </form>
       

         { this.state.todos.map((item, i) => {
           return (
            <Item key={i} task={item.task}/>
           )
          
          
         }) 

       }
       {this.state.items.map(i => {
         return (
           <div>
           <input type='checkbox' checked={this.props.completed} onClick={this.onCheck} />
           <label>{i}</label>
         </div>
         )
       })}
         

     
       
        
  
      </div>
   
     );
  
  }
   
}

export default App;
