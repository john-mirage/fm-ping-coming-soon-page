import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Navigation from "./Navigation";

describe("Navigation component", () => {
  it("should display the navigation items", () => {
    const { container } = render(<Navigation />);
    const facebookLink = screen.getByLabelText(/Go to the Ping facebook page/i);
    const twitterLink = screen.getByLabelText(/Go to the Ping twitter page/i);
    const instagramLink = screen.getByLabelText(
      /Go to the Ping instagram page/i
    );
    expect(facebookLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute("href", "#");
    expect(twitterLink).toHaveAttribute("href", "#");
    expect(instagramLink).toHaveAttribute("href", "#");
    expect(container.querySelector('use[href="#icon-facebook"]')).toBeTruthy();
    expect(container.querySelector('use[href="#icon-twitter"]')).toBeTruthy();
    expect(container.querySelector('use[href="#icon-instagram"]')).toBeTruthy();
    expect(
      screen.getByText(/https:\/\/facebook.com\/ping\//i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/https:\/\/twitter.com\/ping\//i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/https:\/\/instagram.com\/ping\//i)
    ).toBeInTheDocument();
  });
});
