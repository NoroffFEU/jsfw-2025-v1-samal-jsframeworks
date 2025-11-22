import { fireEvent, render, screen } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  type Mock,
  type MockedFunction,
  vi,
} from "vitest";
import { Contact } from "@/pages/Contact/index";
import type {
  ContactFormErrors,
  ContactFormValues,
} from "@/types/contact.types";

// --- Mocks ---

vi.mock("@/pages/Contact/utils/validation/contactValidation", () => ({
  validateContactForm: vi.fn(),
}));

vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

import { toast } from "react-toastify";
import { validateContactForm } from "@/pages/Contact/utils/validation/contactValidation";

// Typed helpers for the mocks
const mockedValidateContactForm =
  validateContactForm as unknown as MockedFunction<
    (values: ContactFormValues) => ContactFormErrors
  >;

const mockedToast = toast as unknown as {
  success: Mock;
  error: Mock;
};

describe("<Contact />", () => {
  beforeEach(() => {
    mockedValidateContactForm.mockReset();
    mockedToast.success.mockReset();
    mockedToast.error.mockReset();
  });

  it("shows validation errors and error toast when form is invalid", () => {
    mockedValidateContactForm.mockReturnValue({
      name: "Name is required",
    });

    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // validateContactForm called with initial empty values
    expect(mockedValidateContactForm).toHaveBeenCalledWith({
      name: "",
      subject: "",
      email: "",
      message: "",
    });

    // Error message rendered
    expect(screen.getByText("Name is required")).toBeInTheDocument();

    // Toasts
    expect(mockedToast.error).toHaveBeenCalledWith(
      "Please fix the errors in the form."
    );
    expect(mockedToast.success).not.toHaveBeenCalled();
  });

  it("submits successfully, shows success toast and clears form on valid data", () => {
    mockedValidateContactForm.mockReturnValue({});

    render(<Contact />);

    const nameInput = screen.getByPlaceholderText(
      "Your name"
    ) as HTMLInputElement;
    const subjectInput = screen.getByPlaceholderText(
      "Order problem…"
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(
      "roberto@example.com"
    ) as HTMLInputElement;
    const messageTextarea = screen.getByPlaceholderText(
      "helo, why no coming product...?"
    ) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "Franso" } });
    fireEvent.change(subjectInput, { target: { value: "Missing item" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageTextarea, {
      target: { value: "Hello, where product??" },
    });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(mockedValidateContactForm).toHaveBeenCalledWith({
      name: "Franso",
      subject: "Missing item",
      email: "test@example.com",
      message: "Hello, where product??",
    });

    expect(mockedToast.success).toHaveBeenCalledWith(
      "Your message has been sent successfully!"
    );

    // Inputs cleared after submit
    expect(nameInput.value).toBe("");
    expect(subjectInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageTextarea.value).toBe("");
  });
});
