import { type SchemaTypeDefinition } from 'sanity'
import { author } from '@/sanity/schemaTypes/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author],
}
