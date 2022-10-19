import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Illustration from "./Illustration";

describe("Illustration component", () => {
  it("should display the image", () => {
    render(<Illustration src="pathToImage" />);
    const image = screen.getByRole("img", { hidden: true });
    expect(image).toHaveAttribute("src", "pathToImage");
  });
});
