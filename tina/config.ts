import { type } from "os";
import { defineConfig } from "tinacms";

// Define your available branches or fallbacks
const branches = [
  process.env.GITHUB_BRANCH,
  process.env.VERCEL_GIT_COMMIT_REF,
  process.env.HEAD,
];

// Default to "main" if no branch is specified
const branch = branches.find(branch => branch) || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "about",
        label: "About",
        path: "content/english/about",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            ui: {
              validate: (value, data) => {
                const lengthOfTitle = value?.length || 0;
                const lengthOfDescription = data?.description?.length || 0;
                if (lengthOfTitle >= lengthOfDescription) {
                  return "The description must be longer than the title";
                }
              },
            },
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "image",
            name: "bg_image",
            label: "Background Image(about page)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
      {
        name: "contact",
        label: "Contact",
        path: "content/english/contact",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            ui: {
              validate: (value, data) => {
                const lengthOfTitle = value?.length || 0;
                const lengthOfDescription = data?.description?.length || 0;
                if (lengthOfTitle >= lengthOfDescription) {
                  return "The description must be longer than the title";
                }
              },
            },
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "image",
            name: "bg_image",
            label: "Background Image(about page)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
      {
        name: "news",
        label: "News",
        path: "content/english/news",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            ui: {
              validate: (value, data) => {
                const lengthOfTitle = value?.length || 0;
                const lengthOfDescription = data?.description?.length || 0;
                if (lengthOfTitle >= lengthOfDescription) {
                  return "The description must be longer than the title";
                }
              },
            },
          },
          {
            type: "datetime",
            name: "publish_date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Cover Image(News Tab)",
            required: true,
          },
          {
            type: "image",
            name: "bg_image",
            label: "Banner Image(News Page)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Types",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
      {
        name: "publication",
        label: "Publication",
        path: "content/english/publication",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            ui: {
              validate: (value, data) => {
                const lengthOfTitle = value?.length || 0;
                const lengthOfDescription = data?.description?.length || 0;
                if (lengthOfTitle >= lengthOfDescription) {
                  return "The description must be longer than the title";
                }
              },
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "download_link",
            label: "Download Link(documents)",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Types",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/english/services",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            ui: {
              validate: (value, data) => {
                const lengthOfTitle = value?.length || 0;
                const lengthOfDescription = data?.description?.length || 0;
                if (lengthOfTitle >= lengthOfDescription) {
                  return "The description must be longer than the title";
                }
              },
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Cover Image(Home Page)",
            required: true,
          },
          {
            type: "image",
            name: "bg_image",
            label: "Banner Image(Service Page)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Categories",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Types",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
