import React from 'react'
import { configure, mount } from 'enzyme';
import { FormLineComponent } from "../form-line/component";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('FormLine', () => {
  it('shows error', () => {
    const wrapper = mount(<FormLineComponent email="" autofocus={false} buttonDisabled={false} emailError="This is an error" />);

    expect(wrapper.contains('This is an error')).toBe(true);
  });

  it('shows error (testing-library)', () => {
    render(<FormLineComponent email="" autofocus={false} buttonDisabled={false} emailError="This is an error" />);

    expect(screen.getByText('This is an error')).toBeInTheDocument()
  });

  it('Always show email as lowercase', () => {
    render(<FormLineComponent email="foo@BAR.com" autofocus={false} buttonDisabled={false} emailError="This is an error" />);

    expect(screen.getByText('foo@bar.com')).toBeInTheDocument()
  })
});
