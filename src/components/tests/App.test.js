import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { FormLineComponent } from "../form-line/component";
import { useLocalDb } from "../../context/local-db";

describe("FormLine", () => {
  it("shows error", () => {
    render(
      <FormLineComponent
        emailDomain="@gmail.com"
        autofocus={false}
        buttonDisabled={false}
        emailError="This is an error"
      />
    );

    expect(screen.getByText("This is an error")).toBeInTheDocument();
  });

  it("always show email domain as lowercase", () => {
    render(
      <FormLineComponent
        emailDomain="@outLOOK.fr"
        autofocus={false}
        buttonDisabled={false}
        emailError="This is an error"
      />
    );

    expect(screen.getByText("@outlook.fr")).toBeInTheDocument();
  });
});


describe("function submitEmail", () => {
  it("'results' state should contain the email submitted and 'member' is false", () => {
    const { result } = renderHook(() => useLocalDb());

    act(() => {
      result.current.submitEmail('fred@outlook.fr');
    });

    expect(result.current.results).toContainEqual({"email": "fred@outlook.fr", "member": false});
  });

  it("'results' state should contain the email submitted and 'member' is true", () => {
    const { result } = renderHook(() => useLocalDb());

    act(() => {
      result.current.setDataBase(['nicolas@outlook.fr']);
    });

    act(() => {
      result.current.submitEmail('nicolas@outlook.fr');
    });

    expect(result.current.results).toContainEqual({"email": "nicolas@outlook.fr", "member": true});
  });
});
