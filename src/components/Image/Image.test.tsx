import { describe, expect, it } from "vitest";
import { render } from "@utils/test-utils";
import Image from "./Image";
import dashboardIllustration from "@images/illustration-dashboard.png";

describe("Image component", () => {
  it("should display the image", () => {
    const { container } = render(<Image />);
    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", dashboardIllustration);
  });
});
