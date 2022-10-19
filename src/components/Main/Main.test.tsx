import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Main from "./Main";

describe("Main component", () => {
  it("should display the main title", () => {
    render(<Main />);
    const h2 = screen.getByText(/We are launching/i, { selector: "h2" });
    const span = screen.getByText(/soon!/i, { selector: "span" });
    expect(h2).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(h2.lastChild === span).toBeTruthy();
  });

  it("should display the main subtitle", () => {
    render(<Main />);
    const p = screen.getByText(/Subscribe and get notified/i, {
      selector: "p",
    });
    expect(p).toBeInTheDocument();
  });
});
