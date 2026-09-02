const clientId = import.meta.env.PUBLIC_WIX_CLIENT_ID || 'f01534eb-38ea-4c2c-a131-c54a6ed803fb';

async function visitorToken() {
  const response = await fetch('https://www.wixapis.com/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId, grantType: 'anonymous' }),
  });
  if (!response.ok) throw new Error(`Wix visitor auth failed: ${response.status}`);
  return response.json();
}

async function wixFetch(url: string, body: unknown) {
  const tokens = await visitorToken();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: tokens.access_token,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Wix API failed: ${response.status}`);
  return response.json();
}

export async function getPublishedPosts(limit = 24) {
  const data = await wixFetch('https://www.wixapis.com/v3/posts/query', {
    query: { cursorPaging: { limit } },
    fieldsets: ['URL', 'CONTENT_TEXT', 'SEO'],
  });
  return data.posts ?? [];
}

export async function getPublishedPostBySlug(slug: string) {
  const data = await wixFetch('https://www.wixapis.com/v3/posts/query', {
    query: { filter: { slug }, cursorPaging: { limit: 1 } },
    fieldsets: ['URL', 'CONTENT_TEXT', 'SEO', 'RICH_CONTENT'],
  });
  return data.posts?.[0] ?? null;
}
