import type { SanityDocument } from "@sanity/client";
import { client } from "../sanity/lib/client";

export async function getSiteSettings() {
  const { data: siteSettings } = await client<SanityDocument>({
    query: `*[_type == "siteSettings"][0]`,
  });
  return siteSettings;
}

export async function getLandingPage() {
  const { data: landingPage } = await client<SanityDocument>({
    query: `*[_type == "landingPage"][0]`,
  });
  return landingPage;
}

export async function getNavigation() {
  const { data: pages } = await client<SanityDocument>({
    query: `*[_type == "page"]{ title, "slug": slug.current, menuLocation }`,
  });

  return pages.map((page: any) => ({
    href: `/${page.slug}`,
    label: page.title,
    menuLocation: page.menuLocation ?? [],
  }));
}

export async function getLinktree() {
  const { data: linktree } = await client<SanityDocument>({
    query: `*[_type == "linktree"] {
      ...,
      link-> {
        _id,
        handle,
        url,
        priority,
        platform
      }
    } | order(orderRank)`,
  });
  console.log("Linktree data:", linktree);
  return linktree;
}

export async function getPosts() {
  const { data: posts } = await client<SanityDocument[]>({
    query: `*[_type == "post"]{
      localizedTitle {
        en
      },
      slug,
      publishedAt
    }`,
  });
  return posts;
}
