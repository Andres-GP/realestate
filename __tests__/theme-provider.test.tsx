import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";
import { vi } from "vitest";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
});

describe("ThemeProvider Component", () => {
  it("renders children correctly", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Hello Theme</div>
      </ThemeProvider>
    );

    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Hello Theme");
  });

  it("accepts and passes props to NextThemesProvider", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div data-testid="child">Test Props</div>
      </ThemeProvider>
    );

    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Test Props");
  });
});
