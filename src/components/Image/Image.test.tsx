import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Image from "./Image";
import dashboardIllustration from "@images/illustration-dashboard.png";

describe("Image component", () => {
  it("should display the image", () => {
    render(<Image />);
    const image = screen.getByAltText(/dashboard illustration/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", dashboardIllustration);
  });
});
