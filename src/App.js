import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list : []
    }
  }

  addTask(task){
    if(task !==""){
      const newItem = {
        id: Date.now(),
        value:task,
        isDone:false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteTask(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list:updatedList
    })
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
  return(
    <div>
      <header className="App-header">
        <div className="mainHead">
          <img src={logo} width="170" height="170" className="App-logo"/>
          <h3 id="reactHead">React ToDo</h3>
        </div>
 
        <div className="container-fluid todoHolder">
          <div className="row">
            <div className="col-8 col-md-9">
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter a new task"
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}
            />
            </div>
            <div className=" col-4 col-md-3">
            <button className="btn btn-primary"
            onClick={() => this.addTask(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >Add task</button>
            </div>
          </div>
          <div className="row list">
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button 
                  className="deleteButton float-right"
                  onClick={()=>this.deleteTask(item.id)}
                  >Delete</button>
                </li>
              );
            })}
          </div>
           
        </div>
      </header>
    </div>
  );
  }
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
