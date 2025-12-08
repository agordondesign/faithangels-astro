import { CogIcon } from "@sanity/icons";
import { HomeIcon } from "@sanity/icons";
import { SchemaIcon } from "@sanity/icons";
import { AddDocumentIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const structure = (S: any, context: any) =>
  S.list()
    .title("Site Content")
    .items([
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(
          S.editor()
            .id("landingPage")
            .schemaType("landingPage")
            .documentId("homePage")
            .title("Home Page"),
        ),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "page",
        title: "Pages", // Optional: Set a custom title
        icon: AddDocumentIcon, // Optional: Set a custom icon
        S,
        context,
      }),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "linktree",
        title: "Linktree", // Optional: Set a custom title
        icon: SchemaIcon, // Optional: Set a custom icon
        S,
        context,
      }),
      /*
      S.listItem()
        .title("Linktree")
        .icon(SchemaIcon)
        .child(
          S.documentTypeList("linktree")
            .title("Links")
            .menuItems(S.documentTypeList("linktree").getMenuItems()),
        ),
        */
      /*
      S.listItem()
        .title("Client Projects")
        .icon(ProjectsIcon)
        .child(
          S.documentTypeList("project")
            .title("Projects")
            .menuItems(S.documentTypeList("project").getMenuItems()),
        ),
      S.listItem()
        .title("Tech Stacks")
        .icon(ProjectsIcon)
        .child(
          S.documentTypeList("techStack")
            .title("Tech Stack")
            .menuItems(S.documentTypeList("techStack").getMenuItems()),
        ),
      */
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings"),
        ),
      ...S.documentTypeListItems().filter(
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (listItem: any) =>
          ![
            "siteSettings",
            "landingPage",
            "website",
            "post",
            "category",
            "author",
            "linktree",
            "page",
            "webLink",
            "facebook",
            "instagram",
            "localization",
          ].includes(listItem.getId()),
      ),
    ]);
