import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should display the footer copyright", () => {
    render(<Footer />);
    const p = screen.getByText(/Copyright Ping. All rights reserved./i, {
      selector: "p",
    });
    const span = screen.getByText(/©/i, { selector: "span" });
    expect(span).toBeInTheDocument();
    expect(span).toHaveAttribute("aria-hidden", "true");
    expect(p).toBeInTheDocument();
    expect(p.firstChild === span).toBeTruthy();
  });
});
