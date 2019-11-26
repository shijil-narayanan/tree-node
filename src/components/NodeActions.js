import React, { Component } from 'react';
import './NodeActions.css';
export default class NodeActions extends Component{

    render(){
        const { handleNodeAction, showDelete } = this.props;
        return (
            <div  className="node-actions">
            <i  onClick={() => handleNodeAction('edit')} className="fas fa-pencil-alt action-icon"></i>
            <i  onClick={() => handleNodeAction('add')} className="far fa-plus-square action-icon"></i>
            { showDelete && <i  onClick={() => handleNodeAction('delete')} className="far delete fa-trash-alt action-icon"></i>}
            </div>
        )
        
    }
}