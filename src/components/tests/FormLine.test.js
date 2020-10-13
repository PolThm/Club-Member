import React from 'react'
import { shallow, configure, mount} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act } from '@testing-library/react'
import {GDCContextProvider, useGDCContent} from "../../context";
import App from '../App'
import FormLine from "../FormLine";


it('submit button is displayed', () => {

  render(<FormLine/>)

  // fireEvent.click(screen.getByRole('button',{name: 'Up'}))

  expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument()
})
