import { defineField, defineType } from "sanity";
//import { getCurrentUser } from "./access.js";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteStatus",
      title: "Site Status",
      //readOnly: ({ currentUser }) => {
      // Optionally make it read-only for other non-admin roles
      //return !currentUser.roles.some((role) => role.name === "administrator");
      //},
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "text",
    }),
    defineField({
      name: "creator",
      title: "Creator",
      type: "string",
    }),
    defineField({
      name: "creatorTwitter",
      title: "Creator Twitter",
      type: "string",
    }),
    defineField({
      name: "Publisher",
      title: "Publisher",
      type: "string",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "promoTitle",
      title: "Promo Title",
      type: "string",
    }),
    defineField({
      name: "promoDescription",
      title: "Promo Description",
      type: "text",
    }),
    defineField({
      name: "ogImageAlt",
      title: "Open Graph Image Alt",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
  ],
});
