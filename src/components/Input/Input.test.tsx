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
    const label = screen.getByText(/User/i);
    const input = screen.getByRole("textbox");
    const error = screen.queryByRole("alert");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "user-id");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "user-name");
    expect(input).toHaveAttribute("value", "");
    expect(input).toHaveAttribute("id", "user-id");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Enter your username");
    expect(input).toHaveAttribute("aria-invalid", "false");
    expect(input).toHaveClass("border-pale-blue");
    expect(error).not.toBeInTheDocument();
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
    const label = screen.getByText(/User/i);
    const input = screen.getByRole("textbox");
    const error = screen.getByText(/wrong format/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "user-id");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "user-name");
    expect(input).toHaveAttribute("value", "");
    expect(input).toHaveAttribute("id", "user-id");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Enter your username");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass("border-light-red");
    expect(error).toBeInTheDocument();
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(onBlurMock).not.toHaveBeenCalled();
  });

  it("should display the input with red border if there is an error", () => {
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
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-light-red");
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
    const input = screen.getByRole("textbox");
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
    const input = screen.getByRole("textbox");
    await user.type(input, "test{Enter}");
    expect(onChangeMock).toHaveBeenCalledTimes(4);
    expect(onBlurMock).not.toHaveBeenCalled();
  });
});
