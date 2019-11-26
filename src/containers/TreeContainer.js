import { connect } from 'react-redux'
import Tree from '../components/Tree';
import { toggleNode , handleNodeAction, updateNode, addNewNode} from '../actions'
const mapStateToProps = state => ({
  nodes: state.nodes
})

const mapDispatchToProps = dispatch => ({
  toggleNode: node => dispatch(toggleNode(node)),
  handleNodeAction: (node, actionType) => dispatch(handleNodeAction(node, actionType)),
  updateNode: (node, updatedNodeName) => dispatch(updateNode(node, updatedNodeName)),
  addNewNode: (parentNodePath, newNodeName) => dispatch(addNewNode(parentNodePath, newNodeName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree)
