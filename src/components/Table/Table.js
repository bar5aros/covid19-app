/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Table = () => {
  // useMemo(() => props.data, []);
  const totalData = useMemo(() => [15679, 343, 124]);
  const totalDataColumns = useMemo(
    () => [
      {
        Header: "Turkey - Date",
        columns: [
          {
            Header: "Confirmed",
            accessor: "confirmed",
          },
          {
            Header: "Recovered",
            accessor: "recovered",
          },
          {
            Header: "Deaths",
            accessor: "deaths",
          },
        ],
      },
    ],

    []
  );

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //   columns,
  //   data,
  // });
  const tableInstance = useTable({
    columns: totalDataColumns,
    data: totalData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

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

export default Table;
