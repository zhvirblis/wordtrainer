import { Component } from "react";
import { Alert } from "react-bootstrap";

export interface ErrorBoundaryState {
    hasError: boolean,
    errorMessage?: string
}
export default class ErrorBoundary extends Component<any, ErrorBoundaryState> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, errorMessage: error.message };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Alert key="danger" variant="danger">
                    {this.state.errorMessage || "Something went wrong."}
                </Alert>
            )
        } else {
            return this.props.children;
        }
    }
}