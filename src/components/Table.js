import React from 'react';
import styled, { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  table {
  margin: 0 auto;
  margin-bottom: 20px;
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}
  td,
  th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px 20px;
  }
  th {
    background-color: rgb(235, 235, 235);
}
  td {
    text-align: center;
}
  tr:nth-child(even) td {
    background-color: rgb(250, 250, 250);
}
  tr:nth-child(odd) td {
    background-color: rgb(245, 245, 245);
}
`;

const Button = styled.button`
  margin: 0 auto;
  height: 25px;
  width: 100px;
  background-color: lightsteelblue;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`;

const Table = () => {
  return (
    <>
      <GlobalStyle />
      <label htmlFor='donation--resultAsTable'>
        Results Table (£)
        <div style={{ paddingTop: '20px' }}>
          <table id='donation-inputs__resultTable'>
            <thead>
              <tr>
                <th>Amount(£)</th>
                <th>Split Type</th>
                <th>Day 1</th>
                <th>Day 2</th>
                <th>Day 3</th>
                <th>Day 4</th>
                <th>Day 5</th>
                <th>Day 6</th>
                <th>Day 7</th>
                <th>Day 8</th>
                <th>Day 9</th>
                <th>Day 10</th>
              </tr>
            </thead>

            <tbody id='dataGoesHere'></tbody>
          </table>
        </div>
      </label>
    </>
  );
};

export default Table;
