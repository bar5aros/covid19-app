/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const TableMain = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-collapse: collapse;
`;

const Caption = styled.caption`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: #fff;
  background-color: #52414c;
`;

const TableHeadMain = styled.thead`
  background-color: #52414c;
  color: #fff;
  text-align: center;
`;

const TableBodyMain = styled.tbody``;

const HeadRow = styled.tr`
  background-color: #52414c;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #dddddd;
`;

const BodyRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-child(even) {
    background-color: #f3f3f3;
  }
  &::last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

const TableHead = styled.th`
  padding: 12px 15px;
  text-align: right;
`;

const TableData = styled.td`
  padding: 12px 15px;
  text-align: right;
  &:first-of-type {
    text-align: left;
  }
`;

const Table = (props) => (
  <TableMain>
    <Caption>{props.data[1].province}</Caption>
    <TableHeadMain>
      <HeadRow />
    </TableHeadMain>
    <TableBodyMain>
      <BodyRow>
        <TableData>Confirmed</TableData>
        <TableData>{props.data[0].confirmed}</TableData>
      </BodyRow>
      <BodyRow>
        <TableData>Recovered</TableData>
        <TableData>{props.data[4].recovered}</TableData>
      </BodyRow>
      <BodyRow>
        <TableData>Deaths</TableData>
        <TableData>{props.data[3].deaths}</TableData>
      </BodyRow>
      <BodyRow>
        <TableData>Critical</TableData>
        <TableData>{props.data[2].critical}</TableData>
      </BodyRow>
    </TableBodyMain>
  </TableMain>
);

export default Table;
