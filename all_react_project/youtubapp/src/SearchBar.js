import React, { Component } from 'react'
import * as m from '@material-ui/core'

export default class SearchBar extends Component {

    state={
        searchTerm:""
    }
handleChange=(e)=>{
this.setState({searchTerm:e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault()
    const {searchTerm}=this.state
    const {onFormSubmit}=this.props
    onFormSubmit(searchTerm)
}

    render() {
        console.log(this.state.searchTerm)
        return (
            <m.Paper style={{margin:"10px"}} elevation={6} style={{padding:"25px"}}>
                <form onSubmit={this.handleSubmit}>
                    <m.TextField fullWidth label="Search..." onChange={this.handleChange}></m.TextField>
                </form>
            </m.Paper>
        )
    }
}

