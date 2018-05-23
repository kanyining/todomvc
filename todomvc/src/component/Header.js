import React, {Component} from 'react';
import TodoTextInput from "./TodoTextInput";
class Header extends Component{
    render(){
        return(
            <div>
                <Header
                   onSave={this.onSave.bind(this)}/>
                <MainSection todos={this.state.todos}/>
            
            <header className="header">
             <h1>todos</h1>
             <TodoTextInput
               onSave={this.props.onSave}/>
        </header> 
        </div>
        );
    }
}
export default  Header;