import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

// import {codeInput} from '@sanity/code-input'

export default createConfig({
  name: 'default',
  title: 'thisadrian',

  projectId: 'focy0lfo',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
