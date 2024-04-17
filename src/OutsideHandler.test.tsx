import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react";
import {OutsideHandler} from "./OutsideHandler";


test('event on outside click', () => {
    render(<OutsideHandler defaultValue={false} />)
    const button = screen.getByTestId('button')
    fireEvent.click(button)
    expect(button).toBeDisabled()
})
