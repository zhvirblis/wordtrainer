import useIndexDB from "../../common/indexDB/hooks";
import { render } from "../../test-utils";
import { DBState, DBStatus } from "../../common/indexDB/types";
import HomePage from "./Page";

let dbSuccessState: DBState = {
    status: DBStatus.Done
}

let dbFaildedState: DBState = {
    status: DBStatus.Failed,
    error: "Some Error"
};

let dbLoadingState: DBState = {
    status: DBStatus.Loading
}

let dbLoadingNotConnected: DBState = {
    status: DBStatus.NotConnected
}

jest.mock("../../common/indexDB/hooks");

describe("test error message", () => {
    it("show error message if db connection is failed", () => {
        (useIndexDB as any).mockReturnValue(dbFaildedState);
        const { getByText } = render(<HomePage />);
        expect(getByText("Connect to database failed"));
    });
    it("don\'t show error message if db connection is success", () => {
        (useIndexDB as any).mockReturnValue(dbSuccessState);
        const { queryByText } = render(<HomePage />);
        expect(queryByText("Connect to database failed")).toBeNull();
    });
})

describe("test loading message", () => {
    it("show loading message if db connection is loading", () => {
        (useIndexDB as any).mockReturnValue(dbLoadingState);
        const { getByText } = render(<HomePage />);
        expect(getByText("Loading..."));
    });

    it("show loading message if db connection is notConnected", () => {
        (useIndexDB as any).mockReturnValue(dbLoadingNotConnected);
        const { getByText } = render(<HomePage />);
        expect(getByText("Loading..."));
    });
});

describe("\"add module part\" is exist", () => {
    it("show Add New Module", () => {
        (useIndexDB as any).mockReturnValue(dbSuccessState);
        const { getByText } = render(<HomePage />);
        expect(getByText("Add New Module"));
    });
});
