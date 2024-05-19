import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }), 
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
