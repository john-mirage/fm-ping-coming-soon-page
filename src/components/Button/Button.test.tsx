import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Button from "./Button";

describe("Button component", () => {
  it("should display the button with the correct type", () => {
    render(<Button type="button">Awesome button</Button>);
    const button = screen.getByRole("button", { name: /Awesome button/i });
    expect(button).toHaveAttribute("type", "button");
  });
});
