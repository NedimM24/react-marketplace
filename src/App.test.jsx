import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";


describe("App fetch behavior", () => {
    it("fetches on mount", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce({
            ok:true,
            json: async () => [
                {id: 1, title: "Product 1"},
                {id: 2, title: "Product 2"}
            ]
        }))
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )
            await waitFor(() => {
                expect(fetch).toHaveBeenCalledTimes(1);
            })
    })
})

