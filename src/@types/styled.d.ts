import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeTypes = typeof defaultTheme

// não estar sendo declarado novas propriedades por isso
// a importação do styled-components, para replicar as propriedades
// do ThemeTypes para o DefaultTheme do styled-components.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
