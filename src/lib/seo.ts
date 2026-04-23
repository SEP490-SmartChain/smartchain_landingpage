export const generateJsonLd = (url: string = "https://yourdomain.com", title: string = "Your Brand") => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: url,
    description: "Giải pháp web chuyên nghiệp, thiết kế hiện đại và tối ưu hiệu suất cao.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
};
