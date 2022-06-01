export default {
    name: 'insight',
    title: 'Insight',
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
            name: 'insightImage',
            title: 'Insight image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'insightTekst',
            title: 'Insight Tekst',
            type: 'blockContent',
          },
    ],
}