import styled from 'styled-components'

export const WrapperSearchBar = styled.div`
  /* Barra fixa no topo. As views usam padding: var(--space-4), então as
     margens negativas fazem a barra ocupar toda a largura ao grudar. */
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);

  margin: 0 calc(var(--space-4) * -1) var(--space-4);
  padding: var(--space-3) var(--space-4);

  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-subtle);
`

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);

  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background-color: var(--bg-tertiary);
  transition: border-color var(--transition-normal);

  &:focus-within {
    border-color: var(--purple-500);
  }

  > svg {
    color: var(--text-tertiary);
    flex-shrink: 0;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;

  font-size: var(--font-size-base);
  color: var(--text-primary);

  /* O SearchField já indica o foco pela borda — evita contorno duplo */
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: var(--text-tertiary);
    opacity: 1;
  }

  /* Esconde o "x" nativo do type="search" — usamos o ClearButton */
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  padding: var(--space-1);
  border-radius: var(--radius-full);
  color: var(--text-tertiary);
  transition: color var(--transition-normal);

  &:hover {
    color: var(--text-primary);
  }
`
