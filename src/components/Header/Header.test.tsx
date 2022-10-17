import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Header from "./Header";

describe("Header component", () => {
  it("should display the header logo", () => {
    const { container } = render(<Header />);
    const svgUse = container.querySelector("use");
    expect(svgUse).toBeInTheDocument();
    expect(svgUse).toHaveAttribute("href", "#logo");
  });

  it("should display the header title", () => {
    render(<Header />);
    const h1 = screen.getByText(/Ping Website/i);
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveAttribute("aria-hidden", "true");
  });
});
