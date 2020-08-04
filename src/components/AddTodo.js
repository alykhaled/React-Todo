import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ""
    }
    
    onChange = (e) => this.setState({title: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input style={{flex: '10', padding: '5px'}} type='text' name='title' value={this.state.title} onChange={this.onChange} placeholder='Add item'/>
                <input style={{flex: '1'}}type='submit' value='Submit' className='btn' />
            </form>
        )
    }
}

export default AddTodo
