
import React from 'react'
import NodeActions from './NodeActions';
import './TreeNode.css';
import styled from 'styled-components';

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => Number(props.level) * 20}px;
`;
const TreeNode = (props) => {
 const { node, getChildNode, level, toggleNode, handleNodeAction, updateNode, addNewNode } = props;
 return (
   
   <div>
       <StyledTreeNode level={level} >

          {node.children.length > 0 && 
            <div className="expand-collapse" onClick={() => toggleNode(node)}>
              { (node.isOpen ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i>) }
            </div> 
          }


          { node.mode !== 'EDIT' && 
            <div className="node-name" onClick={() => toggleNode(node)}>
              { node.displayName }
            </div>
          }

          { node.mode === 'EDIT' &&  
              <input 
                className="edit-node-input"
                onKeyDown={(e) => e.keyCode === 13 && updateNode(node,  e.target.value)} 
                autoFocus 
                defaultValue={node.displayName}
                onBlur={ (e) => e.target.value && updateNode(node,  e.target.value)}
              /> 
          }
        
          <NodeActions showDelete={!node.isRoot} handleNodeAction={(actionType) => handleNodeAction(node, actionType)}/>
          
        </StyledTreeNode>

        { node.mode === 'ADD' &&  
            <input 
              className="add-node" 
              autoFocus  onKeyDown={(e) => e.target.value && e.keyCode === 13 && addNewNode(node.path,  e.target.value)} 
              onBlur={ (e) => e.target.value && addNewNode(node.path,  e.target.value)}
            /> 
        }
        
        { node.isOpen && getChildNode(node).map(childNode => (
          <TreeNode 
            key= {childNode.path}
            {...props}
            node={childNode}          
            level={level + 1}
          />
        ))}
   </div>
 )
}
 
TreeNode.defaultProps = {
  level: 0,
};
export default TreeNode

