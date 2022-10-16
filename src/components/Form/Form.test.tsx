import { describe, expect, it } from "vitest";
import { render, screen, userEvent, waitFor, act } from "@utils/test-utils";
import Form from "./Form";

describe("Form component", () => {
  it("should display the form input", () => {
    render(<Form />);
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Email address" })
    ).toBeInTheDocument();
  });

  it("should display the form submit button", () => {
    render(<Form />);
    expect(screen.getByText(/Notify Me/i)).toBeInTheDocument();
  });

  it("should display error when there is no email", async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(<Form />);
    });
    user.click(screen.getByText(/Notify Me/i));
    expect(
      await screen.findByText(
        /Whoops! It looks like you forgot to add your email/i
      )
    ).toBeInTheDocument();
  });

  it("should display error when the email is not valid", async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(<Form />);
    });
    user.type(
      screen.getByRole("textbox", { name: "Email address" }),
      "badEmail"
    );
    user.click(screen.getByText(/Notify Me/i));
    expect(await screen.findByText(/Please provide a valid email address/i));
  });

  it("should not display error when the email is valid", async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(<Form />);
    });
    user.type(
      screen.getByRole("textbox", { name: "Email address" }),
      "test@test.com"
    );
    user.click(screen.getByText(/Notify Me/i));
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
  });
});
