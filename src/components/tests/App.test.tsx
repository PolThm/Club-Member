import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react'
import {GDCContextProvider} from "../../context";
import App from '../App'

const renderWithContext = (
  component: any) => {
  return {
    ...render(
      <GDCContextProvider>
        {component}
      </GDCContextProvider>
    )
  }
}


describe('FormLine', () => {
  it('checks if an empty input return an error', () => {
    renderWithContext(<App />)
    expect(screen.getByTestId('input-error')).toHaveTextContent("Email required")
  })

  it('checks if an empty input return an error', () => {
    renderWithContext(<App />)
    expect(screen.getByTestId('input-error')).toHaveTextContent("")
  })
});
