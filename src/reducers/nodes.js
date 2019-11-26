
const initialState = {
    '/root': {
        isRoot: true,
        path: '/root',
        displayName: 'root',
        children: []
    }
}


const doesNodeAlreadyExist = (state, node) => {
    if(state[node]){
          alert('This node already exists, Please change the node name');
          return true;
    }
    return false;
}

const updateModeAndReturnState = (state,node,  mode) => {
    return {...state, 
        [node]: {
           ...state[node],
           mode
        }
    } 
}


const nodes = (state = initialState, action) => {
  switch (action.type) {

      case 'TOGGLE_NODE':{
        const node = action.node.path;
        return { 
            ...state, 
            [node] : { 
                 ...state[node],
                isOpen: !state[node].isOpen
            }
        }
      }

      case 'HANDLE_NODE_EDIT':{
        const node = action.node.path;
        return updateModeAndReturnState(state, node, 'EDIT');
      }

       case 'HANDLE_NODE_ADD':{
         const node = action.node.path;
         return updateModeAndReturnState(state, node, 'ADD');
      }

       case 'HANDLE_NODE_DELETE':{
        const nodeToBeDeleted = action.node.path;
        Object.keys(state).forEach(node => {
            state[node].children = state[node].children.filter(path => path !== nodeToBeDeleted);
        });
        delete state[nodeToBeDeleted];
        return {...state};
      }

      case 'UPDATE_NODE': {
        const { node, updatedNodeName } = action;
        node.mode = '';
        const prevNodePath = node.path
        const parentNodePath = node.isRoot ? '' : prevNodePath.replace('/'+ node.displayName, '');
        const newNodePath = parentNodePath + '/' + updatedNodeName;
        if(newNodePath === prevNodePath || doesNodeAlreadyExist(state, newNodePath)){
             return  updateModeAndReturnState(state, newNodePath, 'NONE');
        }

        const newState =  { 
            ...state,
            [newNodePath]: {
                  ...state[prevNodePath],
                  path: newNodePath,
                  displayName: updatedNodeName
            }
        }

        if(!node.isRoot){
            newState[parentNodePath] =  {
                ...state[parentNodePath],
                children: state[parentNodePath].children.length ? state[parentNodePath].children.filter(path => path !== prevNodePath).concat(newNodePath): []
            }
        }
        delete newState[prevNodePath];
        return {...newState};
      }


      case 'ADD_NEW_NODE': {
           const {parentNodePath, newNodeName} = action;
           const newNodePath = parentNodePath + '/' + newNodeName;
           if(doesNodeAlreadyExist(state, newNodePath)){
                return  updateModeAndReturnState(state, newNodePath, 'NONE');
           }
          return {
              ...state,
              [parentNodePath]: {
                    ...state[parentNodePath],
                    children: state[parentNodePath].children.concat(newNodePath),
                    mode: '',
                    isOpen: true
              },
              [newNodePath]: {
                  path: newNodePath,
                  displayName: newNodeName,
                  children: []
              }
          }
      }
      
    default:
      return state
  }
}

export default nodes