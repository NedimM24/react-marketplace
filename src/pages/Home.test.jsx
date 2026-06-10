import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom"

describe("Test home page", () => {
    it("renders a photo", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(screen.getByRole("img", {name: /Picture of a retail store/i}))
            .toBeInTheDocument();
    })

    it("renders about us title and paragraph", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(screen.getByText(/who we are/i))
            .toBeInTheDocument();

        expect(screen.getByText(/Lorem ipsum /i))
            .toBeInTheDocument()
    })
})