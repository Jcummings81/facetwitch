import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Twitches from './Twitches';
import TwitchView from './TwitchView';
import { getTwitches } from '../reducers/twitches';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchTwitches extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getTwitches(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/twitches" component={Twitches} />
          <Route exact path="/twitches/:id" component={TwitchView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchTwitches);