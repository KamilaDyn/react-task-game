import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from './store/initialState'

test('check cards in app', () => {
  const mockStore = configureStore()
  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  const title = screen.getByText(/Games DB/i)
  expect(title).toBeInTheDocument()
})
