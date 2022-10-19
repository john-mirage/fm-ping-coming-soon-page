import { describe, expect, it, vi } from "vitest";
import { render, screen, userEvent } from "@utils/test-utils";
import Input from "./Input";

const onChangeMock = vi.fn();
const onBlurMock = vi.fn();

describe("Input component", () => {
  afterEach(() => {
    onChangeMock.mockClear();
    onBlurMock.mockClear();
  });

  it("should display the input", () => {
    render(
      <Input
        name="user-name"
        label="User"
        value=""
        id="user-id"
        type="text"
        placeholder="Enter your username"
        error=""
        onChange={onChangeMock}
        onBlur={onBlurMock}
      />
    );
    const input = screen.getByRole("textbox", { name: /User/i });
    const alerts = screen.queryAllByRole("alert");
    expect(input).toHaveAttribute("name", "user-name");
    expect(input).toHaveAttribute("value", "");
    expect(input).toHaveAttribute("id", "user-id");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Enter your username");
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(input).toHaveClass("border-pale-blue");
    expect(alerts).toHaveLength(0);
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(onBlurMock).not.toHaveBeenCalled();
  });

  it("should display the input with the error message", () => {
    render(
      <Input
        name="user-name"
        label="User"
        value=""
        id="user-id"
        type="text"
        placeholder="Enter your username"
        error="wrong format"
        onChange={onChangeMock}
        onBlur={onBlurMock}
      />
    );
    const input = screen.getByRole("textbox", { name: /User/i });
    const alert = screen.getByText(/wrong format/i);
    expect(input).toHaveAttribute("name", "user-name");
    expect(input).toHaveAttribute("value", "");
    expect(input).toHaveAttribute("id", "user-id");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Enter your username");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass("border-light-red");
    expect(alert).toBeInTheDocument();
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(onBlurMock).not.toHaveBeenCalled();
  });

  it("should call onBlur when input is unfocused", async () => {
    const user = userEvent.setup();
    render(
      <Input
        name="user-name"
        label="User"
        value=""
        id="user-id"
        type="text"
        placeholder="Enter your username"
        error=""
        onChange={onChangeMock}
        onBlur={onBlurMock}
      />
    );
    const input = screen.getByRole("textbox", { name: /User/i });
    await user.click(input);
    expect(input).toHaveFocus();
    await user.click(document.body);
    expect(input).not.toHaveFocus();
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(onBlurMock).toHaveBeenCalledOnce();
  });

  it("should call onChange when input has changed", async () => {
    const user = userEvent.setup();
    render(
      <Input
        name="user-name"
        label="User"
        value=""
        id="user-id"
        type="text"
        placeholder="Enter your username"
        error=""
        onChange={onChangeMock}
        onBlur={onBlurMock}
      />
    );
    const input = screen.getByRole("textbox", { name: /User/i });
    await user.type(input, "test{Enter}");
    expect(onChangeMock).toHaveBeenCalledTimes(4);
    expect(onBlurMock).not.toHaveBeenCalled();
  });
});
