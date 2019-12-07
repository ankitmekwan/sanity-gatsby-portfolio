export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5debfe22d6a547ccc94b378a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8b119g9y',
                  apiId: 'de4c5aae-8d71-4048-b440-dacd556f9016'
                },
                {
                  buildHookId: '5debfe23bbc770ab644108a6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v4w1q491',
                  apiId: '9f304168-482e-44be-ac2e-b4ab51e5484c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ankitmekwan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-v4w1q491.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
