import { screen, render } from '@testing-library/react'
import Paginator from '../Paginator'
import PokemonList from '../../pokemonList/PokemonList';

jest.mock('../../pokemonList/PokemonList');

describe("Prueba la funcionalidad del paginador" , ()=> {
    beforeEach(() => {
        PokemonList.mockImplementation(() => { return "El componente fue renderizado" });
    });

    test("Prueba que se renderize el Paginador", () => {
        render(<Paginator previous next onPrevious onNext/>);
        expect(screen.getByText(/Next/i)).toBeInTheDocument();
        expect(screen.getByText(/Previous/i)).toBeInTheDocument();
      });

    test("Prueba que no se renderize el boton previous en la primera pagina", () => {
        render(<Paginator next onPrevious onNext/>);
        
        expect(screen.queryByText(/Previous/i)).not.toBeInTheDocument();
      });
    
})