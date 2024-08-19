import { act } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Resources from "./Resources";

afterEach(() => {
  cleanup();
});

describe("Contact Form - Validation Tests", () => {
  let nameInput;
  let emailInput;
  let messageInput;
  let button;
  let validData = { name: "adsf", email: "email@gmail.com", message: "sss" };

  const setupForm = () => {
    render(<Resources />);

    nameInput = screen.getByLabelText(/Name/i);
    emailInput = screen.getByLabelText(/Email/i);
    messageInput = screen.getByLabelText(/Message/i);
    button = screen.getByText(/Submit/i);
  };

  // Form entered with valid data.
  test("Correct form entries", async () => {
    setupForm();
    const user = userEvent.setup();

    await act(async () => {
      await user.type(nameInput, validData.name);
      await user.type(emailInput, validData.email);
      await user.type(messageInput, validData.message);
    });

    expect(nameInput).toHaveValue(validData.name);
    expect(emailInput).toHaveValue(validData.email);
    expect(messageInput).toHaveValue(validData.message);
  });

  // Error for missing name appears and is removed.
  test("Form returns missing name error.", async () => {
    setupForm();
    const user = userEvent.setup();

    expect(nameInput).toHaveValue("");

    await user.click(button);

    expect(await screen.findByText(/Name is required/i)).toBeVisible();

    await act(async () => {
      await user.type(nameInput, validData.name);
      await user.click(button);
    });

    expect(screen.queryByText(/Name is required/i)).toBeNull();
  });

  // Error for missing email appears and is removed.
  test("Form returns missing email error.", async () => {
    setupForm();
    const user = userEvent.setup();

    expect(emailInput).toHaveValue("");

    await user.click(button);

    expect(await screen.findByText(/Email is required/i)).toBeVisible();

    await act(async () => {
      await user.type(emailInput, validData.email);
      await user.click(button);
    });

    expect(screen.queryByText(/Email is required/i)).toBeNull();
  });

  // Error for wrong email appears.
  test("Form returns incorrect email error.", async () => {
    setupForm();
    const user = userEvent.setup();

    await act(async () => {
      await user.type(emailInput, "e@");
    });

    expect(emailInput).toHaveValue("e@");

    await user.click(button);

    expect(
      await screen.findByText(/Please enter a valid email./i),
    ).toBeVisible();

    await act(async () => {
      await user.clear(emailInput);
      await user.type(emailInput, validData.email);
      await user.click(button);
    });

    expect(screen.queryByText(/Please enter a valid email./i)).toBeNull();
  });

  // Error for missing message appears and is removed.
  test("Form returns missing message error.", async () => {
    setupForm();
    const user = userEvent.setup();

    expect(messageInput).toHaveValue("");

    await user.click(button);

    expect(await screen.findByText(/Message is required/i)).toBeVisible();

    await act(async () => {
      await user.type(messageInput, validData.message);
      await user.click(button);
    });

    expect(screen.queryByText(/Message is required/i)).toBeNull();
  });
});
