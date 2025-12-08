// ./src/sanity/schemaTypes/author.ts
import { defineField, defineType } from "sanity";
//import { CharacterCounter } from "../../components/studio/CharacterCounter";
import { FacebookUrl } from "../../components/studio/FacebookUrl";
import { FaFacebookF } from "react-icons/fa6";

export const facebookType = defineType({
  name: "facebook",
  title: "Facebook",
  type: "document",
  fields: [
    defineField({
      title: "Platform",
      name: "platform",
      initialValue: "Facebook",
      type: "string",
    }),
    defineField({
      title: "Handle",
      name: "handle",
      description: "Facebook profile handle",
      type: "string",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      options: { sourceField: "handle" } as any, // <-- specify the field to mirror
      components: {
        input: FacebookUrl,
      },
    }),
  ],
  icon: FaFacebookF,
  preview: {
    select: {
      title: "platform",
      description: "handle",
    },
    prepare({ title, description }) {
      return {
        title: description || "No description",
        subtitle: title,
        media: FaFacebookF,
      };
    },
  },
});
