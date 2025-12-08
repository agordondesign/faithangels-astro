// ./src/sanity/schemaTypes/author.ts
import { defineField, defineType } from "sanity";
import { FaLink, FaInstagram, FaFacebookF } from "react-icons/fa";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const linktreeType = defineType({
  name: "linktree",
  type: "document",
  orderings: [orderRankOrdering],
  fieldsets: [
    {
      name: "links",
      title: "Social and other links",
      description: "A collection of social media handles and other links",
    },
  ],
  fields: [
    orderRankField({ type: "linktree", hidden: false }),
    defineField({
      title: "",
      name: "link",
      type: "reference",
      to: [
        { type: "webLink", title: "Web Link", name: "webLink" }, // Allows referencing documents of type 'blogPost'
        { type: "instagram", title: "Instagram", name: "instagram" }, // Allows referencing documents of type 'event'
        { type: "facebook", title: "Facebook", name: "facebook" }, // Allows referencing documents of type 'author'
      ],
    }),
    defineField({
      title: "",
      name: "priority",
      type: "boolean",
      description: "Priority of the link",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    }),
  ],
  icon: FaLink,
  preview: {
    select: {
      type: "link.platform",
      handle: "link.handle",
    },
    prepare({ type, handle }) {
      let media;
      if (type === "Instagram") {
        media = FaInstagram;
      } else if (type === "Web Link") {
        media = FaLink;
      } else if (type === "Facebook") {
        media = FaFacebookF;
      } else {
        media = FaLink; // fallback icon
      }
      return {
        title: type || "Unknown",
        subtitle: handle,
        media,
      };
    },
  },
});
