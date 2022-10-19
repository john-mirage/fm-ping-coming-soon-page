import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Message from "./Message";

describe("Message component", () => {
  it("should display the message", () => {
    render(<Message color="red">A nice message</Message>);
    const message = screen.getByText(/A nice message/i);
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("text-light-red");
  });
});
