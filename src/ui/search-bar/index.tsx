import { Search, X } from 'lucide-react'
import {
  WrapperSearchBar,
  SearchField,
  SearchInput,
  ClearButton
} from './search-bar.styles'

export type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Buscar item...'
}: SearchBarProps) => (
  <WrapperSearchBar>
    <SearchField>
      <Search size={18} />
      <SearchInput
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar item"
      />
      {value && (
        <ClearButton
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
        >
          <X size={16} />
        </ClearButton>
      )}
    </SearchField>
  </WrapperSearchBar>
)

export default SearchBar
