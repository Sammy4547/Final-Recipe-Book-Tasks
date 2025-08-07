import React from "react";
import { it, expect, describe, vi } from "vitest";
import Recipes from "../../pages/Recipes";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

vi.mock("../../lib/usefetch.jsx", () => ({
  default: () => ({
    data: [
      {
        id: 1,
        recipes: "Paneer Tikka",
        cusines: "Indian",
        desciption: "Best Dish in the world",
        meal: "Lunch",
        diet: "Vegan",
      },
    ],
    loading: false,
  }),
}));

vi.mock("../../lib/useLoacalStorage.jsx", () => ({
  default: () => ([
    [
      {
        id: 2,
        recipes: "Manchurian",
        cusines: "Chinese",
        desciption: "Best Chinese Dish in the world",
        user: {
          meal: "Dinner",
          diet: "Pescatarian",
        },
      },
    ],
    vi.fn(), // ✅ This mocks the setValue function
  ]),
}));


const mockData = vi.fn();

vi.mock("react-router-dom", async () => {
  const resData = await vi.importActual("react-router-dom");
  return {
    ...resData,
    useNavigate: () => mockData,
  };
});
function renderWithRouter() {
  return render(
    <BrowserRouter>
      <Recipes />
    </BrowserRouter>
  );
}
describe("Recipes", () => {
  it("check the data is fetch from api and localStorage", () => {
    renderWithRouter()
    expect(screen.getByText("Recipe Lists")).toBeInTheDocument();
    expect(screen.getByText("Paneer Tikka")).toBeInTheDocument();
    expect(screen.getByText("Manchurian")).toBeInTheDocument();
    expect(screen.getByText("Indian")).toBeInTheDocument();
    expect(screen.getByText("Chinese")).toBeInTheDocument();
    expect(screen.getByText("Dinner")).toBeInTheDocument();
    expect(screen.getByText("Pescatarian")).toBeInTheDocument();

  });
    it('check the button is navigates to /addrecipes when button is clicked', () => {
    renderWithRouter()
    const button = screen.getByRole('button', { name: /\+ Add Recipes/i })
    fireEvent.click(button)
    expect(mockData).toHaveBeenCalledWith('/addrecipes')
  })
});
