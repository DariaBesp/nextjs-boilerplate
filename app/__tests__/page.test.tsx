import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mock next/link to render as a simple <a> tag
jest.mock("next/link", () => {
  return function MockLink({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("Home Page", () => {
  it("renders the reservation link", () => {
    render(<Home />);
    const reservationLink = screen.getByText("Make a Reservation");
    expect(reservationLink).toBeInTheDocument();
    expect(reservationLink).toHaveAttribute("href", "/reservation");
  });

  it("renders the portal login link", () => {
    render(<Home />);
    const portalLink = screen.getByText("Login to Portal");
    expect(portalLink).toBeInTheDocument();
    expect(portalLink).toHaveAttribute("href", "/work-portal/login");
  });

  it("renders both links", () => {
    render(<Home />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
  });
});
