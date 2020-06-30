import React, { Component } from 'react'


function List (props) {
    if(props.loading == true) {
        return (
            <h1>Page is loadding!</h1>
        )
    } else {
        return (
        <h1>Ready to go !</h1>
            )
    }
  
}

export default List