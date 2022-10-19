import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Button from "./Button";

describe("Footer component", () => {
  it("should display the footer copyright", () => {
    render(<Button type="button">Awesome button</Button>);
    const button = screen.getByText(/Awesome button/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });
});
