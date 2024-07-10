import 'styled-components'
import { defaultTheme } from '~/themes'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}