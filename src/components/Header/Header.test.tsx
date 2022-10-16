import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Header from "./Header";

describe("Header component", () => {
  it("should display the header title", () => {
    render(<Header />);
    const h1 = screen.getByText(/We are launching/i, { selector: "h1" });
    const span = screen.getByText(/soon!/i, { selector: "span" });
    expect(h1).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(h1.lastChild === span).toBeTruthy();
  });

  it("should display the header subtitle", () => {
    render(<Header />);
    expect(
      screen.getByText(/Subscribe and get notified/i, { selector: "p" })
    ).toBeInTheDocument();
  });
});
