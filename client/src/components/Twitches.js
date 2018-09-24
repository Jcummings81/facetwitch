import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTwitches } from '../reducers/twitches';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Twitches extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTwitches())
  }


    twitches = () => {
        return this.props.twitches.map( twitch =>
            <Card key={twitch.id}>
            <Image src={twitch.logo} />
            <Card.Content>
                <Card.Header>
                    Post ${twitch.id}
                </Card.Header>
                <Card.Meta>
                    <span>
                        FaceTwitch
                    </span>
                </Card.Meta>
                <Card.Description>
                    {twitch.post}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/twitches/${twitch.id}`}>
                    View Post
                </Link>
            </Card.Content>
            </Card>
            )
    }

    render() {
        return (
            <Container>
                <Header as="h3" textAlign="center">Twitches</Header>
                    <Card.Group itemsPerRow={6}>
                        { this.twitches() }
                    </Card.Group>
            </Container>
        )

        }
}

    const mapStateToProps = (state) => {
        return { twitches: state.twitches }
      }
    
    export default connect(mapStateToProps)(Twitches);

