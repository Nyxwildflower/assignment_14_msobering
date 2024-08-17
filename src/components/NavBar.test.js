import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./Navbar";

afterEach(() => {
  cleanup();
});

describe("Navbar Section", () => {
  // Basic Tests for default large screen links.
  test("Test about link visibility and click", async () => {
    render(<NavBar />);

    const aboutLink = screen.getByRole("link", { name: /Madison Sobering/i });
    expect(aboutLink).toBeVisible();
    expect(aboutLink).toHaveAttribute("href", "#about");
  });

  test("Test work link visibility and click", async () => {
    render(<NavBar />);

    const workLink = screen.getByRole("link", { name: /Past Work/i });
    expect(workLink).toBeVisible();
    expect(workLink).toHaveAttribute("href", "#work");
  });

  test("Test skills link visibility and click", async () => {
    render(<NavBar />);

    const skillsLink = screen.getByRole("link", { name: /Skills/i });
    expect(skillsLink).toBeVisible();
    expect(skillsLink).toHaveAttribute("href", "#skills");
  });

  test("Test dev link visibility and click", async () => {
    render(<NavBar />);

    const devLink = screen.getByRole("link", { name: /Dev Setup/i });
    expect(devLink).toBeVisible();
    expect(devLink).toHaveAttribute("href", "#dev");
  });

  test("Test resources link visibility and click", async () => {
    render(<NavBar />);

    const resourcesLink = screen.getByRole("link", { name: /Hire Me/i });
    expect(resourcesLink).toBeVisible();
    expect(resourcesLink).toHaveAttribute("href", "#resources");
  });

  // Test mobile display for changing screen size.
  test.skip("Mobile display only appears for screen sizes less than 768px wide", () => {});

  // Test mobile display visibility before and after menu expansion.
});
