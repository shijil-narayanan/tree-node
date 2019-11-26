
export const toggleNode = node => ({
  type: 'TOGGLE_NODE',
  node
})

export const handleNodeAction = (node, actionType) => ({
  type: 'HANDLE_NODE_'+ actionType.toUpperCase(),
  node
})

export const updateNode = (node, updatedNodeName) => ({
  type: 'UPDATE_NODE',
  node,
  updatedNodeName
})

export const addNewNode = (parentNodePath, newNodeName) => ({
  type: 'ADD_NEW_NODE',
  parentNodePath,
  newNodeName
})



