import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "@/components/hero";

vi.mock("lucide-react", () => {
  return {
    ArrowDown: () => <div data-testid="icon-arrow-down" />,
  };
});

describe("Hero Component", () => {
  it("renders the main heading and subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(/Discover Your/i)).toBeInTheDocument();
    expect(screen.getByText(/Dream Home/i)).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Explore exceptional properties curated for those who appreciate/i
      )
    ).toBeInTheDocument();
  });

  it("renders the Explore Properties button", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /Explore Properties/i })
    ).toBeInTheDocument();
  });

  it("renders the scroll arrow button", () => {
    render(<Hero />);
    expect(screen.getByLabelText("Scroll to properties")).toBeInTheDocument();
    expect(screen.getByTestId("icon-arrow-down")).toBeInTheDocument();
  });
});
