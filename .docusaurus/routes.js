import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cdlab-docs/__docusaurus/debug',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug', 'f19'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/config',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/config', '3c3'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/content',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/content', 'cab'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/globalData', '3ab'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/metadata', 'f0c'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/registry', 'd1a'),
    exact: true
  },
  {
    path: '/cdlab-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/cdlab-docs/__docusaurus/debug/routes', '949'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog',
    component: ComponentCreator('/cdlab-docs/blog', 'b13'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/archive',
    component: ComponentCreator('/cdlab-docs/blog/archive', '339'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/first-blog-post',
    component: ComponentCreator('/cdlab-docs/blog/first-blog-post', '17a'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/long-blog-post',
    component: ComponentCreator('/cdlab-docs/blog/long-blog-post', '0f0'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/mdx-blog-post',
    component: ComponentCreator('/cdlab-docs/blog/mdx-blog-post', '4c3'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags',
    component: ComponentCreator('/cdlab-docs/blog/tags', 'ebe'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/docusaurus',
    component: ComponentCreator('/cdlab-docs/blog/tags/docusaurus', '24f'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/facebook',
    component: ComponentCreator('/cdlab-docs/blog/tags/facebook', '756'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/hello',
    component: ComponentCreator('/cdlab-docs/blog/tags/hello', 'c8e'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/tags/hola',
    component: ComponentCreator('/cdlab-docs/blog/tags/hola', '666'),
    exact: true
  },
  {
    path: '/cdlab-docs/blog/welcome',
    component: ComponentCreator('/cdlab-docs/blog/welcome', '400'),
    exact: true
  },
  {
    path: '/cdlab-docs/markdown-page',
    component: ComponentCreator('/cdlab-docs/markdown-page', 'c06'),
    exact: true
  },
  {
    path: '/cdlab-docs/docs',
    component: ComponentCreator('/cdlab-docs/docs', 'a77'),
    routes: [
      {
        path: '/cdlab-docs/docs/category/adversarial-ner',
        component: ComponentCreator('/cdlab-docs/docs/category/adversarial-ner', 'eb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/compute-canada-cloud',
        component: ComponentCreator('/cdlab-docs/docs/category/compute-canada-cloud', 'e4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/compute-canada-hpc',
        component: ComponentCreator('/cdlab-docs/docs/category/compute-canada-hpc', 'd97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/compute-resources',
        component: ComponentCreator('/cdlab-docs/docs/category/compute-resources', '06b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/google-cloud-platform',
        component: ComponentCreator('/cdlab-docs/docs/category/google-cloud-platform', '438'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/human-trafficking-detection',
        component: ComponentCreator('/cdlab-docs/docs/category/human-trafficking-detection', '1ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/image-linking',
        component: ComponentCreator('/cdlab-docs/docs/category/image-linking', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/inductive-link-prediction',
        component: ComponentCreator('/cdlab-docs/docs/category/inductive-link-prediction', 'b7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/lab-resources',
        component: ComponentCreator('/cdlab-docs/docs/category/lab-resources', 'f9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/mila',
        component: ComponentCreator('/cdlab-docs/docs/category/mila', '6d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/misinformation-baselines',
        component: ComponentCreator('/cdlab-docs/docs/category/misinformation-baselines', 'a5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/political-polarization',
        component: ComponentCreator('/cdlab-docs/docs/category/political-polarization', 'e59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/reading-group',
        component: ComponentCreator('/cdlab-docs/docs/category/reading-group', '434'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/rl-lab',
        component: ComponentCreator('/cdlab-docs/docs/category/rl-lab', 'ece'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/category/temporal-graph-learning',
        component: ComponentCreator('/cdlab-docs/docs/category/temporal-graph-learning', '546'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/intro',
        component: ComponentCreator('/cdlab-docs/docs/intro', '507'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/ilp/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/ilp/overview', 'ebc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/image-linking/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/image-linking/overview', '7ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/ner/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/ner/overview', '131'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-ht/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-ht/overview', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-polarization/misinfo-baselines/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-polarization/misinfo-baselines/overview', 'a3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-polarization/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-polarization/overview', '428'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/proj-polarization/tgl/overview',
        component: ComponentCreator('/cdlab-docs/docs/proj-polarization/tgl/overview', '67d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/cc-cloud/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/cc-cloud/overview', 'a23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/cc-hpc/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/cc-hpc/overview', '3a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/gcp/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/gcp/overview', '9b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/mila/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/mila/overview', '05f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/overview', 'b1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/compute/rl/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/compute/rl/overview', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/meetings',
        component: ComponentCreator('/cdlab-docs/docs/resources/meetings', 'ff4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/overview', '596'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cdlab-docs/docs/resources/rg/overview',
        component: ComponentCreator('/cdlab-docs/docs/resources/rg/overview', '5b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/cdlab-docs/',
    component: ComponentCreator('/cdlab-docs/', 'ac1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
