import h, { render } from '@rex/h'
import schema from './schema.json'
import trackJs from './track'

trackJs(schema.token)

render(document.head, <script src='https://cdn.trackjs.com/releases/current/tracker.js' async />)
