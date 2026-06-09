import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navabar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar componenet", () => {
    it("renders with a logo, and 3 links", () => {
        render(
            <MemoryRouter>
                <Navbar totalQuantity={0} />
            </MemoryRouter>
        )
        expect(screen.getByRole("img", {name: /company logo/i})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: /home/i})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: /shop/i})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: /🛒/i})).toBeInTheDocument();
    })

    it("Cart renders with matching quantity", () => {
        render(
            <MemoryRouter>
                <Navbar totalQuantity={3} />
            </MemoryRouter>
        )
            expect(screen.getByText("3")).toBeInTheDocument();
    })

    it("Cart renders with 0 quantity", () => {
        render(
            <MemoryRouter>
                <Navbar totalQuantity={0} />
            </MemoryRouter>
        );

        expect(screen.queryByText("0")).not.toBeInTheDocument();
    });

    it("Correctly routes the links", () => {
        render(
            <MemoryRouter>
                <Navbar totalQuantity={0} />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", {name: /home/i})).toHaveAttribute("href", "/");
    })

})