import React from 'react';
import styled, { css } from 'styled-components';

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
      <label htmlFor='donation--resultAsTable'>
        Results Table (£)
        <div style={{ paddingTop: '20px' }}>
          <table id='donation-inputs__resultTable'>
            <thead>
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
            </thead>

            <tbody id='dataGoesHere'></tbody>
          </table>
        </div>
      </label>
      <div className='donation-inputs__resetButton' style={{ padding: '20px' }}>
        <Button
          type='reset'
          onClick='resetCalculator()'
          id='reset--button'
          name='reset--button'
          style={{ width: '70px' }}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default Table;
