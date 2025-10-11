import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "@/components/contact";
import * as lucide from "lucide-react";

vi.mock("lucide-react", () => {
  return {
    Mail: () => <div data-testid="icon-mail" />,
    Phone: () => <div data-testid="icon-phone" />,
    MapPin: () => <div data-testid="icon-mappin" />,
    Send: () => <div data-testid="icon-send" />,
  };
});

describe("Contact Component", () => {
  it("renders the main heading and subheading", () => {
    render(<Contact />);
    expect(screen.getByText("Get In")).toBeInTheDocument();
    expect(screen.getByText("Touch")).toBeInTheDocument();
    expect(
      screen.getByText(/Ready to find your dream property/i)
    ).toBeInTheDocument();
  });

  it("renders all form fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /Send Message/i });
    expect(button).toBeInTheDocument();
  });

  it("allows typing in form fields and submitting the form", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Phone");
    const messageInput = screen.getByLabelText("Message");
    const button = screen.getByRole("button", { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: "Andrés" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "+1234567890" } });
    fireEvent.change(messageInput, { target: { value: "Hello world" } });

    expect((nameInput as HTMLInputElement).value).toBe("Andrés");
    expect((emailInput as HTMLInputElement).value).toBe("test@example.com");
    expect((phoneInput as HTMLInputElement).value).toBe("+1234567890");
    expect((messageInput as HTMLTextAreaElement).value).toBe("Hello world");

    const consoleLogSpy = vi.spyOn(console, "log");
    fireEvent.click(button);
    expect(consoleLogSpy).toHaveBeenCalledWith("Form submitted:", {
      name: "Andrés",
      email: "test@example.com",
      phone: "+1234567890",
      message: "Hello world",
    });
    consoleLogSpy.mockRestore();
  });
});
