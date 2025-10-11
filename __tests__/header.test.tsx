import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Header from "@/components/header";

vi.mock("lucide-react", () => {
  return {
    Menu: () => <div data-testid="icon-menu" />,
    X: () => <div data-testid="icon-x" />,
  };
});

describe("Header Component", () => {
  let scrollIntoViewMock: jest.Mock;

  beforeEach(() => {
    scrollIntoViewMock = vi.fn();
    // @ts-ignore
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });

  it("renders the logo", () => {
    render(<Header />);
    expect(screen.getByText("ESTATE")).toBeInTheDocument();
  });

  it("renders navigation links in desktop view", () => {
    render(<Header />);
    expect(screen.getByText("Properties")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    expect(screen.queryByText("Properties")).toBeInTheDocument();
    expect(screen.queryByText("About")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getAllByText("Properties").length).toBeGreaterThan(1);
    expect(screen.getAllByText("About").length).toBeGreaterThan(1);

    fireEvent.click(toggleButton);

    expect(screen.getAllByText("Properties").length).toBe(1);
  });

  it("changes background class when scrolled", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header.className).toContain("bg-transparent");

    window.scrollY = 100;
    fireEvent.scroll(window);
    expect(header.className).toContain("bg-background/80");
  });
});
