/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";

const Row = styled.tr``;
const Header = styled.th`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  :last-child {
    border-right: 0;
  }
`;
const TableContainer = styled.table`
  border-spacing: 0;
  border: 1px solid black;
`;

const Table = (props) => (
  <TableContainer>
    <Row>
      <Header>Turkey</Header>
    </Row>
    <Row>
      <Header>Confirmed</Header>
      <Header>{props.data[0].confirmed}</Header>
    </Row>
    <Row>
      <Header>Recovered</Header>
      <Header>{props.data[1].recovered}</Header>
    </Row>
    <Row>
      <Header>Deaths</Header>
      <Header>{props.data[2].deaths}</Header>
    </Row>
  </TableContainer>
);

// eslint-disable-next-line no-unused-vars
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
export default Table;
