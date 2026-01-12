import { WrapperListForm, FormTitle, FormActions } from './list-form.styles'

const ListFormSkeleton = () => (
  <WrapperListForm>
    <FormTitle className="animate-pulse">Nova Lista</FormTitle>

    <div>
      <div
        style={{
          height: '1rem',
          backgroundColor: 'var(--bg-light)',
          borderRadius: 'var(--radius-sm)',
          marginBottom: 'var(--space-2)'
        }}
        className="animate-pulse"
      />
      <div
        style={{
          height: '3rem',
          backgroundColor: 'var(--bg-light)',
          borderRadius: 'var(--radius-md)'
        }}
        className="animate-pulse"
      />
    </div>

    <FormActions>
      <div
        style={{
          height: '2.5rem',
          backgroundColor: 'var(--bg-light)',
          borderRadius: 'var(--radius-md)',
          flex: 1
        }}
        className="animate-pulse"
      />
      <div
        style={{
          height: '2.5rem',
          backgroundColor: 'var(--bg-light)',
          borderRadius: 'var(--radius-md)',
          flex: 1
        }}
        className="animate-pulse"
      />
    </FormActions>
  </WrapperListForm>
)

export default ListFormSkeleton
