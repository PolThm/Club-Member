import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

configure({adapter: new Adapter()});

describe('Nothing', () => {
  xit('Nothing', () => {

  });
});


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
