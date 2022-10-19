import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Navigation from "./Navigation";

describe("Navigation component", () => {
  it("should display the navigation links", () => {
    render(<Navigation />);
    const facebookLink = screen.getByRole("link", {
      name: /Ping facebook page/i,
    });
    const twitterLink = screen.getByRole("link", {
      name: /Ping twitter page/i,
    });
    const instagramLink = screen.getByRole("link", {
      name: /Ping instagram page/i,
    });
    expect(facebookLink).toHaveAttribute("href", "#");
    expect(twitterLink).toHaveAttribute("href", "#");
    expect(instagramLink).toHaveAttribute("href", "#");
  });

  it("should display the navigation icons", () => {
    const { container } = render(<Navigation />);
    expect(
      container.querySelector('svg > use[href="#icon-facebook"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('svg > use[href="#icon-twitter"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('svg > use[href="#icon-instagram"]')
    ).toBeInTheDocument();
  });

  it("should display the navigation link texts when user print the page", () => {
    render(<Navigation />);
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
