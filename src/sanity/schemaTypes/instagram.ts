// ./src/sanity/schemaTypes/author.ts
import { defineField, defineType } from "sanity";
//import { CharacterCounter } from "../../components/studio/CharacterCounter";
import { InstagramUrl } from "../../components/studio/InstagramUrl";
import { FaInstagram } from "react-icons/fa6";

export const instagramType = defineType({
  name: "instagram",
  title: "Instagram",
  type: "document",
  fields: [
    defineField({
      title: "Platform",
      name: "platform",
      initialValue: "Instagram",
      type: "string",
    }),
    defineField({
      title: "Handle",
      name: "handle",
      description: "Do NOT include the @ symbol",
      type: "string",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      options: { sourceField: "handle" } as any, // <-- specify the field to mirror
      components: {
        input: InstagramUrl,
      },
    }),
  ],
  icon: FaInstagram,
  preview: {
    select: {
      title: "platform",
      description: "handle",
    },
    prepare({ title, description }) {
      return {
        title: description || "No description",
        subtitle: title,
        media: FaInstagram,
      };
    },
  },
});
