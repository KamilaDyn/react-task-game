import { render, fireEvent, screen } from '@testing-library/react'
import SearchByPageForm from './index'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from 'store/initialState'

test('check if input has number', async () => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  render(
    <Provider store={store}>
      <SearchByPageForm />
    </Provider>,
  )
  const pageNumber = screen.getByTestId('page-number')
  fireEvent.change(pageNumber, {
    target: { value: 1 },
  })
  expect(pageNumber).toHaveValue(1)
  expect(pageNumber).toBeInTheDocument()
  expect(screen.queryByText('Write number pages min 1')).not.toBeInTheDocument()
  fireEvent.submit(pageNumber)
})
