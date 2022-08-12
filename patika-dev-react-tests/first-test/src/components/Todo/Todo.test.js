import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";


describe("Todo tests", () => {
    let addBtn, todoInput;

    beforeEach(() => {
        render(<Todo />);
        addBtn = screen.getByText("Add");
        todoInput = screen.getByLabelText("Text");

    } )



    test('Is there a addButton and a addInput ', () => { 

        expect(addBtn).toBeInTheDocument();
        expect(todoInput).toBeInTheDocument();
     })


     test("Add string inside of list while click add button", () => {
        const item = "new Item";
        userEvent.type(todoInput, item);
        userEvent.click(addBtn);

        const newItem = screen.getByText(item);

        expect(newItem).toBeInTheDocument();

     })


})