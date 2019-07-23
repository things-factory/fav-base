import { store } from '@things-factory/shell'

import favorite from './reducers/favorite'

export default function bootstrap() {
  store.addReducers({
    favorite
  })
}
