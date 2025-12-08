// ./src/sanity/schemaTypes/author.ts
import { defineField, defineType } from "sanity";
import { Url } from "../../components/studio/Url";
import { FaLink } from "react-icons/fa6";

export const webLinkType = defineType({
  name: "webLink",
  type: "document",
  fields: [
    defineField({
      title: "Platform",
      name: "platform",
      type: "string",
      initialValue: "Web Link",
    }),
    defineField({
      title: "Label",
      name: "handle",
      type: "string",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      placeholder: "https://example.com",
    }),
  ],
  icon: FaLink,
  preview: {
    select: {
      title: "platform",
      description: "handle",
    },
    prepare({ title, description }) {
      return {
        title: title || "No title",
        subtitle: description || "No description",
        media: FaLink,
      };
    },
  },
});
