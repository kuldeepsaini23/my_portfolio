import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'document',
      fields: [
        {
          type: "markdown",
          description: "A Github flavored markdown field with image uploading",
          name: "bio"
        }
      ]
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'reference',
      to: {type: 'icon'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',      
      media: 'mainImage',
    },
  },
})
