import { render, fireEvent, screen } from '@testing-library/react'
import ApiKeyForm from './index'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from 'store/initialState'

test('test api key input ', () => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  render(
    <Provider store={store}>
      <ApiKeyForm />
    </Provider>,
  )
  const apiKey = screen.getByTestId('api-key')
  expect(apiKey).toBeInTheDocument()

  expect(screen.queryByText('Input value is not valid')).not.toBeInTheDocument()

  fireEvent.keyDown(apiKey, { key: 'enter', keyCode: 13 })
  fireEvent.submit(apiKey)
})
