import { describe, expect, it } from "vitest";
import { render } from "@utils/test-utils";
import Illustration from "./Illustration";

describe("Illustration component", () => {
  it("should display the image", () => {
    const { container } = render(<Illustration src="pathToImage" />);
    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "pathToImage");
  });
});
