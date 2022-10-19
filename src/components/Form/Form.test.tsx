import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "@utils/test-utils";
import Form from "./Form";

describe("Form component", () => {
  it("should display the form input with its label", () => {
    render(<Form />);
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
  });

  it("should display the form submit button", () => {
    render(<Form />);
    expect(
      screen.getByRole("button", { name: /Notify Me/i })
    ).toBeInTheDocument();
  });

  it("should display no message if user has not submitted yet", () => {
    render(<Form />);
    expect(screen.queryAllByRole("alert")).toHaveLength(0);
  });

  it("should display error when submitted with no value", async () => {
    const user = userEvent.setup();
    render(<Form />);
    await user.click(screen.getByRole("button", { name: /Notify Me/i }));
    expect(screen.queryAllByRole("alert")).toHaveLength(1);
    expect(
      screen.queryByText(/Whoops! It looks like you forgot to add your email/i)
    ).toBeInTheDocument();
  });

  it("should display error when submitted with wrong value", async () => {
    const user = userEvent.setup();
    render(<Form />);
    await user.type(
      screen.getByRole("textbox", { name: /Email address/i }),
      "badEmail"
    );
    await user.click(screen.getByRole("button", { name: /Notify Me/i }));
    expect(screen.queryAllByRole("alert")).toHaveLength(1);
    expect(
      screen.queryByText(/Please provide a valid email address/i)
    ).toBeInTheDocument();
  });

  it("should display success message when successfully submitted", async () => {
    const user = userEvent.setup();
    render(<Form />);
    await user.type(
      screen.getByRole("textbox", { name: /Email address/i }),
      "test@test.com"
    );
    await user.click(screen.getByRole("button", { name: /Notify Me/i }));
    expect(screen.queryAllByRole("alert")).toHaveLength(1);
    expect(
      screen.queryByText(
        /test@test.com has been successfully added to the notification list./i
      )
    ).toBeInTheDocument();
  });
});
