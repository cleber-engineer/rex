import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from '@rex/markup/src/schema.json'

export default (page) =>
  render(document.head, <meta property='og:site_name' content={f.or(page.title, f.prop('name', schema))} />)
