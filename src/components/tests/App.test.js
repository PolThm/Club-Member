import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act } from '@testing-library/react'
import {GDCContextProvider, useGDCContent} from "../../context";
import App from '../App'
import FormLine from "../FormLine";
import Header from "../Header";
import Result from "../Result";
import Results from "../Results";
import EnterEmailSection from "../EnterEmailSection";

configure({adapter: new Adapter()});

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

// describe ('FetchDB', () => {
//   const TestComponent = () => {
//     const {dataBase, submitEmail} = useGDCContent();
//
//     return (
//       <>
//         <div data-testid="value">{dataBase.toString()}</div>
//         <button onClick={submitEmail}>submitEmail</button>
//       </>
//     )
//   }
//   const wrapper = mount(
//     <GDCContextProvider>
//       <TestComponent />
//     </GDCContextProvider>
//   )
//
//   expect(wrapper.find('[data-testid="value"]').text().toEqual(["isLoading"]))
// })

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve(
        ["nicolas@outlook.fr", "celine@outlook.fr", "kevin@gmail.com", "sylvie@gmail.com"]
      )
  })
)

describe('FetchDB', () => {
  it ('loads FormLine on mount', async () => {
    await act(async () => render(<App />));

    const submitButton = await screen.getByRole('button', {name: 'Submit'})
    expect(submitButton).toBeInTheDocument()
  });
});

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
