import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Header from "./Header";

describe("Header component", () => {
  it("should display the header logo", () => {
    const { container } = render(<Header />);
    expect(container.querySelector('use[href="#logo"]')).toBeTruthy();
  });

  it("should display the header title", () => {
    render(<Header />);
    const h1 = screen.getByRole("heading", {
      name: /Ping Website/i,
      level: 1,
    });
    expect(h1).toBeInTheDocument();
  });
});
