import React, { Component } from 'react';
import TreeNode from './TreeNode';
export default class Tree extends Component{
    
    constructor(){
        super();
        this.getChildNode = this.getChildNode.bind(this);
    }
    getRootNode(){
      const { nodes } = this.props;
      let rootNode;
        for(const node in nodes){
            if(nodes[node].isRoot){
                rootNode = nodes[node];
                break;
            }  
        }
      return rootNode;
    }

    getChildNode(node){
        const { nodes } = this.props;
        if (!node.children){
            return [];
        }
        return node.children.map(path => nodes[path]);
    }


    render(){
        const rootNode = this.getRootNode();
        const { toggleNode , handleNodeAction, updateNode, addNewNode} = this.props;
        return (
            <div>
                <TreeNode 
                 node= {rootNode}
                 getChildNode = {this.getChildNode}
                 toggleNode = {toggleNode}
                 handleNodeAction = {handleNodeAction}
                 updateNode = {updateNode}
                 addNewNode= {addNewNode}
                />
            </div>
        )
        
    }
}