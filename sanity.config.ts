import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import { zhHansLocale } from '@sanity/locale-zh-hans'

export default defineConfig({
  name: 'default',
  title: 'emptyarea',

  projectId: 'k7xaxt1p',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media(), zhHansLocale()],

  schema: {
    types: schemaTypes,
  },
})
