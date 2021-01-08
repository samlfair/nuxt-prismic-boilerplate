export default (context, inject) => {
  const seo = (path, title, description, image) => {
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
    return { meta, title };
  };
  inject("seo", seo);
  context.$seo = seo;
};