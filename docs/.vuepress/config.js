module.exports = {
  port: 1234,
  open: false, // if you want it to open automatically
  head: [['link', { rel: 'icon', href: '/favicon_dark.png' }]],
  plugins: [
    '@vuepress/plugin-search',
  ],
  themeConfig: {
    logo: '/favicon.png',
    logoDark: '/favicon_dark.png',
    docsDir: 'docs',
    docsRepo: 'https://github.com/topcoat-data/frontend-documentation',
    markdown: {
      extractHeaders: [2, 3]
    },
    sidebarDepth: 2,
    sidebar: [
      {
        text: 'Guide',
        link: '/guide.md',
      },
      {
        text: 'Tools',
        children: [
          {
            text: 'Packages',
            link: '/tools/packages.md'
          },
          {
            text: 'Guidelines',
            link: '/tools/guidelines.md'
          },
          {
            text: 'VScode extensions/tips',
            link: '/tools/vscode.md'
          },
        ],
      },
      {
        text: 'Conventions',
        children: [
          {
            text: 'Code flow',
            link: '/conventions/code_flow.md'
          },
          {
            text: 'Routing and naming',
            link: '/conventions/routing.md'
          },
        ],
      },
      {
        text: 'Testing',
        children: [
          {
            text: 'Unit',
            link: '/testing/unit.md',
          },
          {
            text: 'E2E',
            link: '/testing/e2e.md',
          },
        ],
      },
      {
        text: 'Deployment',
        link: '/deployment.md',
      },
      {
        text: 'Known issues',
        link: '/known_issues.md',
      },
    ],

    //? navbar
    navbar: [
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'Github repos',
        children: [
          {
            text: 'Internal',
            children: [
              {
                text: 'Core frontend 🌠',
                link: 'https://github.com/topcoat-data/topcoat-core-fe',
              },
              {
                text: 'Expandable modules 💅',
                link: 'https://github.com/topcoat-data/expandable-modules',
              },
              {
                text: 'Builder FE ✍️',
                link: 'https://github.com/topcoat-data/topcoat-builder-fe',
              },
              {
                text: 'Core Backend 🚂',
                link: 'https://github.com/topcoat-data/topcoat-core',
              },
              {
                text: '(old) Public 🖌️',
                link: 'https://github.com/topcoat-data/topcoat-public',
              },
              {
                text: 'This documentation 📖',
                link: 'https://github.com/topcoat-data/frontend-documentation',
              },
            ],
          },
        ],
      },
      {
        text: 'Useful links',
        children: [
          {
            text: 'TopCoat Organization 🧑‍🤝‍🧑',
            link: 'https://github.com/topcoat-data',
          },
          {
            text: 'Kanban',
            link: 'https://github.com/orgs/topcoat-data/projects/1',
          },
          {
            text: 'Design System',
            link: 'https://zeroheight.com/955194c45/p/117d4d-topcoat-data---component-design-guide',
          },
        ]
      },
    ],
  }
}
