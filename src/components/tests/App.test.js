import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act } from '@testing-library/react'
import {GDCContextProvider, useGDCContent} from "../../context";
import App from '../App'
import FormLine from "../FormLine";
import Header from "../Header";
import Result from "../Result";
import Results from "../Results";
import EnterEmailSection from "../EnterEmailSection";
import * as constants from '../EnterEmailSection';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});


// describe('FormLine', () => {
  // it('contains the correct number of components', (done) => {
  //   const wrapper = mount(<FormLine />);
  //
  //   //This is not working - the length of ChildComponent is always 0
  //   // expect(wrapper.find(ChildComponent).length).to.equal(status.length);
  //   expect(wrapper.find('button')).toBeInTheDocument()
  // });


  // it('submit button is displayed', () => {
  //
  //   render(<FormLine/>)
  //
  //   // fireEvent.click(screen.getByRole('button',{name: 'Up'}))
  //
  //   expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument()
  // })

//   it('snapshot test', () => {
//     const setRouteLeaveHook = jest.fn();
//     let wrapper = shallow(
//       <FormLine params={{id : 25, router: setRouteLeaveHook}}/>
//     );
//     expect(toJson(wrapper)).toMatchSnapshot();
//   })
// })


// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve(
//         ["nicolas@outlook.fr", "celine@outlook.fr", "kevin@gmail.com", "sylvie@gmail.com"]
//       )
//   })
// )
//
// describe('FetchDB', () => {
//   it ('loads FormLine on mount', async () => {
//     await act(async () => render(<App />));
//
//     const submitButton = await screen.getByRole('button', {name: 'Submit'})
//     expect(submitButton).toBeInTheDocument()
//   });
// });


// const renderWithContext = (
//   component) => {
//   return {
//     ...render(
//       <GDCContextProvider>
//         {component}
//       </GDCContextProvider>
//     )
//   }
// }
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
