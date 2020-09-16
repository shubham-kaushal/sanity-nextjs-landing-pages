export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f62522b13131e12d0846c9d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iaex19g6',
                  apiId: '143fd00b-8281-409b-ad63-27c9bc875163'
                },
                {
                  buildHookId: '5f62522b085c9d0dfd8d86b6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3vgu614h',
                  apiId: 'baca977e-1a5b-4aef-b551-08fab24cf97f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shubham-kaushal/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3vgu614h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
