export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      title: 'My Files',
      name: 'my_files',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description'
        },
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: {type: 'author'}
        }
      ]
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "shortIntro",
      title: "Short Intro",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
