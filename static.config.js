import axios from 'axios'

export default {
  withSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/people-and-items',
        component: 'src/containers/PeopleAndItems',
      },
      {
        path: '/final-bids',
        component: 'src/containers/FinalBids',
      },
      {
        path: '/total-per-person',
        component: 'src/containers/TotalPerPerson',
      },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
