import React, { Component,PropTypes } from 'react';
//import classname from 'classnames';
export default class TodoTestInput extends Component{
    handleSubmit =e =>{
        const text = e.target.value.trim()
        if(e.which===13){
            this.props.onSave(text)
        }
    }

    render(){
        return(
            <input
                type="text"
                autoFocus="true"
                placehoder="what needs to be done?"
                className='new-todo'
                onKeyDown={this.handleSubmit}/>
        )
    }
}