import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-08-28","projectId":"wwfac1ax","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
