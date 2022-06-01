export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'innsiktImage',
      title: 'Innsikt image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'innsikt',
      title: 'Innsikt',
      type: 'blockContent',
    },
    {
      name: 'innsikt2Image',
      title: 'Innsikt2 image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'innsikt2',
      title: 'Innsikt2',
      type: 'blockContent',
    },
  ],
}
