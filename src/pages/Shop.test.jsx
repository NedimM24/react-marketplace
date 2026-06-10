import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import { MemoryRouter, useOutletContext } from "react-router-dom"

const mockProducts = Array.from({length: 20}, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
    }));

    vi.mock("react-router-dom", async () => {
        const actual = await vi.importActual("react-router-dom");

        return{
            ...actual,
            useOutletContext: () => ({
                productsArray: mockProducts,
                cart: [],
                setCart: vi.fn()
            })
        }
    })

    describe("Testing Shop page", () => {
        it("renders 20 cards", () => {
            render(<Shop />)
            expect(screen.getAllByRole("button", {name: /add/i}))
                .toHaveLength(20);
        })
    })
