import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      comapny: 'company',
      media: 'mainImage',
    },
  },
})
