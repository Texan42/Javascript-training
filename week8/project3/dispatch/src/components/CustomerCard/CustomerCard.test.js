import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CustomerCard from "./index";

describe("Customer card compopnent", () => {
    test("It renders and displays props", () => {
        const { getByText } = render(<CustomerCard
            id={1}
            name={"Jest Test"}
            phone={"9121234567"}
            address={{
                street1: "1 Cabbage Crossing",
                city: "Savannah",
                state: "GA",
                zip: 31411,
                deliveryInstructions: "Insert here"
            }}
            selectClass={""}
        />);

        const p = getByText("Jest Test");
        getByText("9121234567");
        getByText("1 Cabbage Crossing");
        getByText("Savannah, GA, 31411");
        getByText("Insert here");

        // Expect it not to have a class of active by default
        expect(p.parentElement.classList.contains("active")).toBe(false);
    });
});