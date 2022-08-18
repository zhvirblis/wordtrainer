import { render } from "../../test-utils";
import user from "@testing-library/user-event";
import { useModules } from "./hooks";
import AddNew from "./AddNew";

const mockAdd = jest.fn();

jest.mock("./hooks", () => {
    return {
        __esModule: true,
        useModules: () => ({ add: mockAdd })
    }
});

describe("check is elements exist" , () => {
    it("Add New Module title is exist", () => {
        const { getByText } = render(<AddNew />);
        expect(getByText("Add New Module"));
    });

    it("Input exists", () => {
        const { getByPlaceholderText } = render(<AddNew />);
        expect(getByPlaceholderText("Name"));
    });

    it("Add button exists", () => {
        const { getByRole } = render(<AddNew />);
        expect(getByRole("button").textContent).toBe("Add");
    });
});

describe("check elements logic", () => {

    it("input should be required", async () => {
        const { getByPlaceholderText } = render(<AddNew />);
        const input = getByPlaceholderText("Name");
        expect(input).toBeInvalid();
        await user.type(input, "Test");
        expect(input).toBeValid();
    });

    it("if input empty don't trigger add function after clicking on add button", async () => {
        const { getByRole, getByPlaceholderText } = render(<AddNew />);
        const input = getByPlaceholderText("Name");
        expect(input).toBeInvalid();
        const addBtn = getByRole("button");
        await user.click(addBtn);
        const { add } = useModules();
        expect((add as any as jest.Mock).mock.calls.length).toBe(0);
    });

    it("if input contains symbols then trigger add function after clicking on add button", async () => {
        const { getByRole, getByPlaceholderText } = render(<AddNew />);
        const input = getByPlaceholderText("Name");
        expect(input).toBeInvalid();
        await user.type(input, "Test");
        const addBtn = getByRole("button");
        const { add } = useModules();
        await user.click(addBtn);
        expect(add as any as jest.Mock).toHaveBeenCalled();
    });
});