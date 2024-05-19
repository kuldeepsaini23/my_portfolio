import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'approach',
  title: 'Approach',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'phase',
      title: 'Phase',
      type: 'string',
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
      phase: 'phase',
    },
  },
})
