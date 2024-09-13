import React from "react";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import Hero from "@/components/nestable/Hero";
import Footer from "@/components/nestable/Footer";
import Header from "@/components/nestable/Header";
import Grid from "@/components/nestable/Grid";
import ImageWithText from "@/components/nestable/ImageWithText";
import About from "@/components/nestable/About";

// Map Storyblok component names to React components
const components = {
  page: Page,
  teaser: Teaser,
  hero: Hero,
  header: Header,
  footer: Footer,
  grid: Grid,
  image_with_text: ImageWithText,
  about: About,
};

// Initialize Storyblok with API token and components
try {
  storyblokInit({
    accessToken: StoryblokCMS.TOKEN,
    use: [apiPlugin],
    components,
  });
} catch (error) {
  console.error("Error initializing Storyblok:", error);
}

// StoryblokProvider component wrapper
export default function StoryblokProvider({ children }) {
  return <>{children}</>;
}
