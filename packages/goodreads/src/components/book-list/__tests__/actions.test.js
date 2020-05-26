import { FETCH_IMAGES_REQUEST } from '../actions'
import { fetchImages } from '../actions'

test('creates a fetch action', () => {
  const expected = { type: FETCH_IMAGES_REQUEST }
  expect(fetchImages()).toEqual(expected)
})