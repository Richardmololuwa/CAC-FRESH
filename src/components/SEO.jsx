
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://cacfresh.org";

export default function SEO({
  title,
  description,
  path = "/",
  image,
}) {
  const pageTitle = title
    ? `${title} | CAC Fresh Apostolic Power District Headquarters`
    : "CAC Fresh Apostolic Power District Headquarters";

  const canonicalUrl = `${SITE_URL}${path}`;

  const pageDescription =
    description ||
    "Welcome to CAC Fresh Apostolic Power District Headquarters. Join us for worship, prayer, fellowship and spiritual growth.";

const imageUrl = image
  ? `${SITE_URL}${image}`
  : `${SITE_URL}/LOGO.png`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CAC Fresh Apostolic Power Ministry" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />

      {imageUrl && (
        <meta property="og:image" content={imageUrl} />
      )}

      {/* Twitter / X */}
<meta name="twitter:card" content="summary" />      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} />
      )}
    </Helmet>
  );
}
