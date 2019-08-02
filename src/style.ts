import { style } from 'typestyle'
import { fontFace } from 'typestyle'
import { url } from 'csx'

export default {
  hello: style({
    color: 'blue',
    fontFamily: 'Untru',
    fontSize: 17,
  }),
}

fontFace({
  fontFamily: 'Untru',
  fontStyle: 'normal',
  fontWeight: 200,
  src: url('./Lacquer-Regular.ttf'),
})
