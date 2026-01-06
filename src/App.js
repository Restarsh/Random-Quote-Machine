import React, {Component} from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import { Grid} from '@mui/material'; 
import { withStyles } from '@mui/styles';

const styles = {
  container:{
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return null;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() })

  }
  // Returns an integer representing an index in state.quotes
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justifyContent={'center'} container>
        <Grid xs={11} lg={8} item>
          <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles) (App);
