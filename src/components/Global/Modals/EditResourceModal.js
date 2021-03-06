import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {RESOURCE_ACTIONS} from '../../../redux/actions/resourceActions';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const mapStateToProps = state => ({
    user: state.user,
    resources: state.resourceReducer.resource
  });

class EditResource extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          open: false,
          updatedResource: {
            }
        }
    }

handleClickOpen = () => {
    this.setState({ 
      open: true,
      updatedResource: {
        name: this.props.resource.name,
        url: this.props.resource.url,
        summary: this.props.resource.summary
      } 
    });
};

handleClose = () => {
    this.setState({ open: false });
};

handleUpdate = (propertyName) => async(event) => {
    await this.setState({
        updatedResource: {
            ...this.state.updatedResource,
            id: this.props.resource.id,
            [propertyName]: event.target.value
        }
    })    
}

updateResource = () => {
    const action = ({
      type: RESOURCE_ACTIONS.UPDATE_RESOURCE,
      payload: this.state.updatedResource
    })    
    this.props.dispatch(action);
    this.handleClose();
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
        <Icon>edit_icon</Icon>
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update the resource below:</DialogTitle>
          <DialogContent>
            <TextField 
              value={this.state.updatedResource.name} 
              defaultValue={this.props.resource.name}
              onChange={this.handleUpdate('name')}
              name="name"
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
            />
            <TextField 
              value={this.state.updatedResource.url} 
              defaultValue={this.props.resource.url}
              onChange={this.handleUpdate('url')}
              name="url"
              autoFocus
              margin="dense"
              label="Url"
              fullWidth
              
            />
            <TextField 
              value={this.state.updatedResource.summary} 
              defaultValue={this.props.resource.summary}
              onChange={this.handleUpdate('summary')}
              multiline
              rowsMax="5"
              name="summary"
              autoFocus
              margin="dense"
              label="Summary"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
          <Button onClick={this.updateResource} variant ="contained" color="primary">
              Edit Resource
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } 
}

export default connect(mapStateToProps)(EditResource);