// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { localizationType } from "./localization";
import { siteSettingsType } from "./siteSettings";
import { landingPageType } from "./landingPage";
import { pageType } from "./page";
import { linktreeType } from "./linktree";
import { webLinkType } from "./webLink";
import { facebookType } from "./facebook";
import { instagramType } from "./instagram";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    authorType,
    blockContentType,
    categoryType,
    postType,
    localizationType,
    siteSettingsType,
    landingPageType,
    pageType,
    linktreeType,
    webLinkType,
    facebookType,
    instagramType,
  ],
};
