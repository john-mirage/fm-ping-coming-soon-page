import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Message from "./Message";

describe("Message component", () => {
  it("should display a blue message by default", () => {
    render(<Message>A nice message</Message>);
    const p = screen.getByText(/A nice message/i);
    expect(p).toHaveClass("text-blue");
  });

  it("should display a blue message", () => {
    render(<Message color="blue">A nice message</Message>);
    const p = screen.getByText(/A nice message/i);
    expect(p).toHaveClass("text-blue");
  });

  it("should display a red message", () => {
    render(<Message color="red">A nice message</Message>);
    const p = screen.getByText(/A nice message/i);
    expect(p).toHaveClass("text-light-red");
  });
});
