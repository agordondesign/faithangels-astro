// ./src/sanity/schemaTypes/post.ts
import { defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const pageType = defineType({
  name: "page",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "page", hidden: false }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "menuLocation",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Main Menu", value: "mainMenu" },
          { title: "Footer Menu", value: "footerMenu" },
          { title: "Side Menu", value: "sideMenu" },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
