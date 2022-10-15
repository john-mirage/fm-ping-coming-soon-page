import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Form from "./Form";

describe("Footer component", () => {
  it("should display the form input", () => {
    render(<Form />);
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
  });

  it("should display the form submit button", () => {
    render(<Form />);
    expect(screen.getByText(/Notify Me/i)).toBeInTheDocument();
  });
});
