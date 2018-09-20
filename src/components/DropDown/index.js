import React from 'react'

import './style.css'

class DropDown extends React.Component{
    render(){
        return (
            <div className="dropdown">
                <span>Mouse over me</span>
                <div className="dropdown-content">
                    <p>This is DropDown</p>
                    <p>这是一个下拉框</p>
                </div>
            </div>
        )
    }
}

export default DropDown;