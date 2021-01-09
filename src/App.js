import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Table from './components/Table';

const Container = styled.div`
  background-color: lightsteelblue;
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0 30px 0;
  border-radius: 3px;
`;

const DonationFormWrapper = styled.div`
  background-color: whitesmoke;
  max-width: 1400px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  border-radius: 3px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  box-sizing: border-box;
  & > label {
    padding: 0.5em 1em 0.5em 1em;
    flex: 1;
  }
  & > input,
  select {
    flex: 2;
  }
  & > input {
    padding: 0.5em;
  }
`;

const DonationGuide = styled.div`
  text-align: center;
  background-color: lightsteelblue;
  width: 500px;
  margin: 0 auto;
  padding: 5px;
  border-radius: 3px;
  margin-top: 15px;
  margin-bottom: 20px;
  border: 2px solid grey;
`;

const DonationGuideHighlighting = styled.span`
  font-weight: bold;
`;

const Hr = styled.hr`
  border-top: 3px solid #bbb;
  width: 75%;
  padding: 1px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
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

const DonationInputsResult = styled.div`
  background-color: whitesmoke;
  max-width: 1400px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  border-radius: 3px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectInputValue, setselectInputValue] = useState([]);
  const [arrData, setArrData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    let newArr = [];

    // console.log('handleSubmit clicked');
    // console.log(inputValue, selectInputValue[0]);

    if (selectInputValue[0] === 'equal') {
      console.log('You selected equal');
      for (let i = 0; i < 10; i++) {
        let num = parseFloat(
          (inputValue / 10).toString().match(/\d+(?:\.\d{0,2})?/)
        );
        newArr.push(num);
      }

      let total = newArr.reduce((a, b) => a + b);
      let rounded = Math.round(total * 10) / 10;
      let difference = parseFloat((inputValue - rounded).toFixed(2));

      let lastElem = newArr[newArr.length - 1];
      let lastElemPlusRemainder = parseFloat(
        (lastElem + difference).toFixed(2)
      );
      newArr.splice(newArr.length - 1, 1, lastElemPlusRemainder);

      displayResults(newArr);
    } else if (selectInputValue[0] === 'more-odd') {
      console.log('You selected more-odd');
      Button.disabled = false;

      for (let i = 0; i < 15; i++) {
        let num = parseFloat(
          (inputValue / 15).toString().match(/\d+(?:\.\d{0,2})?/)
        );
        // console.log(num)
        newArr.push(num);
      }

      newArr.splice(10);

      for (let i = 0; i < 10; i += 2) {
        let double = newArr[i] * 2;
        newArr.splice(i, 1, double);
      }

      let total = newArr.reduce((a, b) => a + b);
      let rounded = Math.round(total * 10) / 10;
      let difference = parseFloat((inputValue - rounded).toFixed(2));

      let lastElem = newArr[newArr.length - 1];
      let lastElemPlusRemainder = parseFloat(
        (lastElem + difference).toFixed(2)
      );
      newArr.splice(newArr.length - 1, 1, lastElemPlusRemainder);

      displayResults(newArr);
    }
  };

  const displayResults = newArr => {
    console.log(newArr);
    console.log('displayResults clicked');
    // amountValue = document.getElementById('donation--amount').value;
    // selectedSplitType = document.getElementById('donation--type').value;

    // let tableRows = document.getElementById('dataGoesHere');
    // let row = tableRows.insertRow(0);

    // let cell1 = row.insertCell(0);
    // let cell2 = row.insertCell(1);

    // cell1.innerHTML = `${amountValue}`;
    // cell2.innerHTML = `${selectedSplitType}`;

    // for (let i = 0; i < newArr.length; i++) {
    //   let counter = 3;
    //   let cell = `cell${counter + i}`;
    //   cell = row.insertCell(`${counter - 1 + i}`);
    //   cell.innerHTML = `${newArr[i]}`;
    // }

    // //Reset the inputs
    // newArr = [];
    // amountValue.value = 0;
    // selectedSplitType.value = '';
  };

  const resetCalculator = () => {
    console.log('resetCalculator clicked');
  };

  return (
    <Container>
      <form name='dataFromForm' id='dataFromForm' onSubmit={handleSubmit}>
        <div className='donation-title'>
          <h2>Charity Donations</h2>
          <h4>Please Enter the amount for donation</h4>
        </div>
        <DonationFormWrapper>
          <FormRow>
            <label htmlFor='donation--amount'>
              Amount to Donate (£):
              <input
                type='number'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                id='donation--amount'
                name='donation--amount'
                style={{ width: '100px' }}
                /* onKeyPress='return isNumberKey(event)' */
                /* onInput='javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);' */
                min='1'
                maxLength='8'
              />
            </label>
          </FormRow>

          <FormRow>
            <label htmlFor='donation--type'>
              Please Select a donation type:
              <select
                name='donation--type'
                id='donation--type'
                onChange={e => setselectInputValue([e.target.value])}
              >
                <option hidden>Choose Donation type</option>
                <option value='equal'>Equal</option>
                <option value='more-odd'>More on Odd Days</option>
              </select>
            </label>
          </FormRow>

          <DonationGuide>
            <h3>Guide to donation types:</h3>
            <p>
              <DonationGuideHighlighting>Equal: </DonationGuideHighlighting>The
              same amount to be donated every day
            </p>
            <p>
              <DonationGuideHighlighting>More-Odd: </DonationGuideHighlighting>
              Double the amount to be donated on odd-numbered days
            </p>
          </DonationGuide>

          <Hr />

          <FormRow>
            <Button
              type='submit'
              /* onClick={calculateResults} */
              id='donation--button'
              name='donation--button'
              style={{ width: '70px' }}
            >
              Calculate
            </Button>
          </FormRow>
        </DonationFormWrapper>
      </form>

      <DonationInputsResult>
        <Table />

        <div
          className='donation-inputs__resetButton'
          style={{ padding: '20px' }}
        >
          <Button
            type='reset'
            onClick={resetCalculator}
            id='reset--button'
            name='reset--button'
            style={{ width: '70px' }}
          >
            Reset
          </Button>
        </div>
      </DonationInputsResult>
    </Container>
  );
}

export default App;

/* // import React, { useState, useRef, useEffect } from 'react';
// import TodoList from './TodoList';
// import { v4 as uuidv4 } from 'uuid';

// const LOCAL_STORAGE_KEY = 'todoApp.todos';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const todoNameRef = useRef();
//   // useRef - allows to reference elements inside the html

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (storedTodos) setTodos(storedTodos);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }, [todos]);

//   const toggleTodo = id => {
//     const newTodos = [...todos];
//     const todo = newTodos.find(todo => todo.id === id);
//     todo.complete = !todo.complete;
//     setTodos(newTodos);
//   };

//   const handleAddTodo = e => {
//     const name = todoNameRef.current.value;
//     // current = any element currently referencing
//     if (name === '') return; // prevents adding an empty todo
//     setTodos(prevTodos => {
//       return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
//     });
//     todoNameRef.current.value = null;
//   };

//   const handleClearTodos = () => {
//     const newTodos = todos.filter(todo => !todo.complete);
//     setTodos(newTodos);
//   };

//   return (
//     <>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input type='text' ref={todoNameRef} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <button onClick={handleClearTodos}>Clear Complete</button>
//       <div>{todos.filter(todo => !todo.complete).length} left to do</div>
//     </>
//   );
// }

// export default App; */
