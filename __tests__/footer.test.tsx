import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "@/components/footer";

vi.mock("lucide-react", () => {
  return {
    Facebook: () => <div data-testid="icon-facebook" />,
    Twitter: () => <div data-testid="icon-twitter" />,
    Instagram: () => <div data-testid="icon-instagram" />,
    Linkedin: () => <div data-testid="icon-linkedin" />,
  };
});

describe("Footer Component", () => {
  it("renders the main logo text", () => {
    render(<Footer />);
    expect(screen.getByText("ESTATE")).toBeInTheDocument();
  });

  it("renders all footer sections and links", () => {
    render(<Footer />);

    const sections = ["Company", "Properties", "Resources", "Legal"];
    sections.forEach((section) => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Buy")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("renders social media icons with aria-labels", () => {
    render(<Footer />);
    const socialLabels = ["Facebook", "Twitter", "Instagram", "LinkedIn"];
    socialLabels.forEach((label) => {
      const link = screen.getByLabelText(label);
      expect(link).toBeInTheDocument();
    });

    expect(screen.getByTestId("icon-facebook")).toBeInTheDocument();
    expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
    expect(screen.getByTestId("icon-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("icon-linkedin")).toBeInTheDocument();
  });

  it("renders copyright texts", () => {
    render(<Footer />);
    expect(
      screen.getByText("© 2025 Estate. All rights reserved.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Designed with excellence for discerning clients worldwide."
      )
    ).toBeInTheDocument();
  });
});
