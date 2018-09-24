import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TwitchView = ({ twitch = {} }) => (
  <Container>
    <Link to="/twitches">View All Twitches</Link>
    <Header as="h3" textAlign="center">{twitch.id}</Header>
    <Image src={twitch.logo} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Post</Table.Cell>
          <Table.Cell>{twitch.post}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { twitch: state.twitches.find( t => t.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(TwitchView);