import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: process.env.HEAD || 'main',
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'photos',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'siteContent',
        label: 'Site Content',
        path: 'src/content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => '/',
        },
        fields: [
          {
            type: 'object',
            name: 'site',
            label: 'Site Info',
            fields: [
              { type: 'string', name: 'businessName', label: 'Business Name' },
              { type: 'string', name: 'phone', label: 'Phone (e.g. (515) 230-7250)' },
              { type: 'string', name: 'phoneHref', label: 'Phone link (e.g. tel:+15152307250)' },
              { type: 'string', name: 'email', label: 'Email' },
              { type: 'string', name: 'hours', label: 'Hours (e.g. Mon–Fri, 8am–5pm)' },
              { type: 'string', name: 'siteUrl', label: 'Site URL' },
            ],
          },
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge Text' },
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'headlineAccent', label: 'Headline Accent (yellow text)' },
              { type: 'string', name: 'sub', label: 'Sub-headline', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object',
            name: 'services',
            label: 'Services',
            list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'features', label: 'Features', list: true },
            ],
          },
          {
            type: 'object',
            name: 'howItWorks',
            label: 'How It Works Steps',
            list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Step Title' },
              { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object',
            name: 'whyUs',
            label: 'Why Choose Us',
            list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
        ],
      },
    ],
  },
})
