import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import '../Landing.css';
import { MAP_ACTIONS } from '../../../../redux/actions/mapActions';
import Autocomplete from 'react-google-autocomplete';
import {KEYS} from '../../../../Key';

const styles = theme => ({
  root: {
    flexGrow: 'auto',
  },
  flex: {
    flexGrow: 'auto',
  },
  searchButton: {
    marginLeft: -10,
    marginRight: 10,
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  input: {
    fullWidth: 'true',
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: 'normal',
    marginLeft: 5,
    marginRight: -20,
  },
  appBar: {
    background: '#18335a',
    display: 'flex',
    flexBasis: '1 1 1100px',
    flexWrap: 'nowrap',
    flexGrow: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    fullWidth: 'true',
  },
});

const mapStateToProps = state => ({
  user: state.user,
  booking: state.booking,
  mapReducer: state.mapReducer
});

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      markers: []
    }
  }

  googleApiCall = (event) => {
    event.preventDefault();
    console.log('googleApiCall');
    console.log('searchAddress:', this.state.searchAddress);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchAddress}&key=${KEYS.GOOGLE_API_KEY}`
    console.log('url:', url);
    
    axios.get(url)
    .then((response) => {
      console.log('response', response)
        const latLng = {...response.data.results[0].geometry.location}
        console.log('latLng:', latLng);
        this.props.setCurrentLocation(latLng)
        // this.props.dispatch({type: MAP_ACTIONS.SET_ADDRESS, payload: latLng})
        // this.props.dispatch({type: MAP_ACTIONS.RECENTER})
    })
         .catch(err => {
           console.log('in googleApicall',err);                     //Axios entire error message
           
         });
  }


  handleInputChangeFor = propName => (event) => {
    event.preventDefault();
    this.setState({...this.state, [propName]: event.target.value})
  }

  render( ) {

  const { classes } = this.props;


  return (
    <div className={classes.root}>
      <AppBar position='static' variant='dense' className={classes.appBar}>
          <Toolbar className={classes.container}>
            <Grid container direction='row' justify='space-evenly' alignItems='center'>
              <Grid item justify='flex-start'>
                <SearchIcon />
              </Grid>
              <Grid item justify='center' xs={12} sm={8} alignItems='stretch'>
                <FormControl fullWidth className={classes.input}>
                  <Autocomplete
                    placeholder='Enter zip code or location'
                    onChange={this.handleInputChangeFor('searchAddress')}
                    style={{width: '100%',
                      height:'44px',
                      fontSize:'18px',
                      disableUnderline:'true',
                      margin: 'none',
                      // backgroundColor: '#7589b7',
                    }}
                    onPlaceSelected={(place) => {
                      console.log(place);
                    }}
                    types={['(regions)']}
                  />
                </FormControl>
              </Grid>
              <Grid item justify='flex-end' margin='none'>
                <Button size='large' variant='contained' onClick={this.googleApiCall} className={classes.button} aria-label='search' color='primary'>Search</Button>              
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    </div>
  )
}
}

export default compose(connect(mapStateToProps),withStyles(styles))(SearchBar);
