import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '45a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a70'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '993'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3c2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6b2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '65e'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9bc'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3bb'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'a6e'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'aea'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ba1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f45'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '300'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4b1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e34'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'de1'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '93b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '570'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a8e'),
    routes: [
      {
        path: '/docs/category/adversarial-ner',
        component: ComponentCreator('/docs/category/adversarial-ner', 'da3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/compute-canada-cloud',
        component: ComponentCreator('/docs/category/compute-canada-cloud', 'd79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/compute-canada-hpc',
        component: ComponentCreator('/docs/category/compute-canada-hpc', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/compute-resources',
        component: ComponentCreator('/docs/category/compute-resources', '7b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/google-cloud-platform',
        component: ComponentCreator('/docs/category/google-cloud-platform', '340'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/human-trafficking-detection',
        component: ComponentCreator('/docs/category/human-trafficking-detection', '19c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/image-linking',
        component: ComponentCreator('/docs/category/image-linking', 'b67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/inductive-link-prediction',
        component: ComponentCreator('/docs/category/inductive-link-prediction', '685'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/lab-resources',
        component: ComponentCreator('/docs/category/lab-resources', '515'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/mila',
        component: ComponentCreator('/docs/category/mila', '008'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/misinformation-baselines',
        component: ComponentCreator('/docs/category/misinformation-baselines', '031'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/political-polarization',
        component: ComponentCreator('/docs/category/political-polarization', 'f67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/reading-group',
        component: ComponentCreator('/docs/category/reading-group', '06a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/rl-lab',
        component: ComponentCreator('/docs/category/rl-lab', 'bd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/temporal-graph-learning',
        component: ComponentCreator('/docs/category/temporal-graph-learning', '4eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-ht/ilp/overview',
        component: ComponentCreator('/docs/proj-ht/ilp/overview', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-ht/image-linking/overview',
        component: ComponentCreator('/docs/proj-ht/image-linking/overview', '2b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-ht/ner/overview',
        component: ComponentCreator('/docs/proj-ht/ner/overview', 'd06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-ht/overview',
        component: ComponentCreator('/docs/proj-ht/overview', '5a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-polarization/misinfo-baselines/overview',
        component: ComponentCreator('/docs/proj-polarization/misinfo-baselines/overview', '5d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-polarization/overview',
        component: ComponentCreator('/docs/proj-polarization/overview', 'b48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/proj-polarization/tgl/overview',
        component: ComponentCreator('/docs/proj-polarization/tgl/overview', 'f0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/compute/cc-cloud/overview',
        component: ComponentCreator('/docs/resources/compute/cc-cloud/overview', 'b13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/compute/cc-hpc/overview',
        component: ComponentCreator('/docs/resources/compute/cc-hpc/overview', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/compute/gcp/overview',
        component: ComponentCreator('/docs/resources/compute/gcp/overview', '6bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/compute/mila/overview',
        component: ComponentCreator('/docs/resources/compute/mila/overview', '3ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/compute/overview',
        component: ComponentCreator('/docs/resources/compute/overview', 'c63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/compute/rl/overview',
        component: ComponentCreator('/docs/resources/compute/rl/overview', '4f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/meetings',
        component: ComponentCreator('/docs/resources/meetings', '176'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/overview',
        component: ComponentCreator('/docs/resources/overview', 'f36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/rg/overview',
        component: ComponentCreator('/docs/resources/rg/overview', 'ac8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '43d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
