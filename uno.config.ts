// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
      /* options */
    })
  ]
})
