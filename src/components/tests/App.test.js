import React from 'react'
import {unmountComponentAtNode } from "react-dom";
import { shallow } from 'enzyme';
import {act} from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react'
import {GDCContextProvider} from "../../context";
import App from '../App'
import FormLine from "../FormLine";
import Header from "../Header";
import Result from "../Result";
import Results from "../Results";
import EnterEmailSection from "../EnterEmailSection";


const renderWithContext = (
  component) => {
  return {
    ...render(
      <GDCContextProvider>
        {component}
      </GDCContextProvider>
    )
  }
}


// describe('Header', () => {
//   it('title is displayed', () => {
//     renderWithContext(<App />)
//     expect(screen.getByRole('heading', {name: 'Club Member'})).toBeInTheDocument()
//   })
// });
//
// describe('FormLine', () => {
//   it('submit button is displayed', async () => {
//     renderWithContext(<App />)
//
//     // fireEvent.click(screen.getByRole('button',{name: 'Up'}))
//
//     const submitButton = await screen.getByRole('button', {name: 'Submit'})
//
//     expect(submitButton).toBeInTheDocument()
//   })
//
//   it('send an error when you click on the submit button and the input is empty', () => {
//     render(<App />)
//     fireEvent.click(screen.getByTestId('button-submit'))
//     expect(screen.getByTestId('input-error')).toHaveTextContent("Email required")
//   })
// });


// describe('fetchDB', () => {
//   it('fetches data from server when server returns a successful response', done => { // 1
//     const mockSuccessResponse = {};
//     const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
//     const mockFetchPromise = Promise.resolve({ // 3
//       json: () => mockJsonPromise,
//     });
//     jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
//
//     const wrapper = shallow(<App />); // 5
//
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(global.fetch).toHaveBeenCalledWith('http://www.json-generator.com/api/json/get/bQrQrLgMEi?indent=2');
//
//     process.nextTick(() => { // 6
//       expect(wrapper.state()).toEqual({
//         // ... assert the set state
//       });
//
//       global.fetch.mockClear(); // 7
//       done(); // 8
//     });
//   });
// });
