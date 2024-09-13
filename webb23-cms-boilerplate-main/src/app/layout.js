// pages/_app.js
import { useEffect, useState } from 'react';
import Layout from "@/components/layout";
import { StoryblokProvider } from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import "@/styles/globals.css"; // Adjust path if necessary

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({ Component, pageProps }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const currentConfig = await StoryblokCMS.getConfig();
        setConfig(currentConfig);
      } catch (error) {
        console.error("Failed to fetch Storyblok config:", error);
        setConfig({}); // or default configuration
      }
    }

    fetchConfig();
  }, []);

  if (config === null) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <StoryblokProvider>
      <Layout config={config}>
        <Component {...pageProps} />
      </Layout>
    </StoryblokProvider>
  );
}
