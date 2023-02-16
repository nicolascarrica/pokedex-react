import { render, screen } from "@testing-library/react";
import Modal from "../modal";
import ShowPokemon from "../../showpokemon/ShowPokemon";



jest.mock("../../showpokemon/ShowPokemon");

describe("Prueba funcionalidad Modal", () => {
  beforeEach(() => {
    ShowPokemon.mockImplementation(() => { return "El componente fue renderizado" });
  });

  test("Prueba que se renderize el Modal con la prop trigger", () => {
    render(<Modal trigger />);
    expect(
      screen.getByText(/El componente fue renderizado/i)).toBeInTheDocument();
  });

  test("Prueba que NO se renderize el modal SIN la prop trigger", () => {
    render(<Modal />);
    expect(
      screen.queryByText(/El componente fue renderizado/i)).not.toBeInTheDocument();
  });
});