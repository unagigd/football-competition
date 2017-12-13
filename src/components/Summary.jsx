import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class Summary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() { 
    return (
      <Table> 
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Team</Table.HeaderCell>
            <Table.HeaderCell>Played</Table.HeaderCell>
            <Table.HeaderCell>Won</Table.HeaderCell>
            <Table.HeaderCell>Drawn</Table.HeaderCell>
            <Table.HeaderCell>Lost</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Lechia Gdańsk</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>6</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>FC Barcelona</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Wisła Kraków</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Real Madry</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}
 
export default Summary;