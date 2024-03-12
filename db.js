module.exports = {
  films: [
    { id: 1, title: 'Lorem Ipsum', views: 254, categories_id: 123 },
    { id: 2, title: 'Sic Dolor amet', views: 65, categories_id: 456 },
  ],
  categories: [
    { id: 123, name: 'Fantasy' },
    { id: 456, name: 'Triller' },
  ],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: 'Consectetur adipiscing elit',
      date: new Date('2017-07-03'),
    },
    {
      id: 995,
      post_id: 2,
      body: 'Nam molestie pellentesque dui',
      date: new Date('2017-08-17'),
    },
    {
      id: 996,
      post_id: 2,
      body: 'Nam molestie pellentesque dui',
      date: new Date('2017-08-17'),
    },
  ],
};
