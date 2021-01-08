export default (context, inject) => {
  const seo = (path, title, description, image, emoji) => {
    const meta = [
      {
        property: "og:url",
        content: process.env.baseUrl + path,
        hid: "og:url"
      },
      {
        itemprop: "name",
        content: title,
        hid: "name"
      },
      {
        name: "twitter:title",
        content: title,
        hid: "twitter:title"
      },
      {
        property: "og:title",
        content: title,
        hid: "og:title"
      }
    ];
    if (description) {
      meta.push(
        {
          property: "description",
          content: description
        },
        {
          property: "og:description",
          content: description
        },
        {
          itemprop: "description",
          content: description
        }
      );
    }
    if (image) {
      meta.push(
        {
          property: "og:image",
          content: image.url
        },
        {
          name: "twitter:image",
          content: image.url
        },
        {
          name: "twitter:image:alt",
          content: image.url
        },
        {
          property: "og:image:alt",
          content: image.alt
        },
        {
          itemprop: "image",
          content: image.url
        }
      );
    }
    const link = [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2284%22>${emoji}</text></svg>`
      }
    ]
    return { meta, title, link };
  };
  inject("seo", seo);
  context.$seo = seo;
};