import { getStoryblokApi } from "@storyblok/react/rsc";

export class StoryblokCMS {
  static IS_PROD = process.env.NODE_ENV === "production";
  static IS_DEV = process.env.NODE_ENV === "development";
  static VERSION = this.IS_PROD ? "published" : "draft";
  static TOKEN = process.env.NEXT_PUBLIC_PREVIEW_TOKEN || "";

  static async sbGet(path, params) {
    try {
      return await getStoryblokApi().get(path, params);
    } catch (error) {
      console.error(`Failed to fetch from Storyblok: ${path}`, error);
      throw error; // Rethrow the error for further handling if needed
    }
  }

  static async getStory(params) {
    if (!params || !params.slug) return {};
    const uri = params.slug.join("/");
    const storyUrl = `cdn/stories/${uri}`;
    try {
      const { data } = await this.sbGet(storyUrl, this.getDefaultSBParams());
      return data.story || {};
    } catch (error) {
      console.error(`Failed to fetch story: ${storyUrl}`, error);
      return {}; // Return an empty object in case of failure
    }
  }

  static getDefaultSBParams() {
    return {
      version: this.VERSION,
      resolve_links: "url",
      cv: Date.now(), // Cache-busting parameter
    };
  }

  static async getConfig() {
    try {
      const { data } = await this.sbGet("cdn/stories/config", this.getDefaultSBParams());
      return data?.story || {};
    } catch (error) {
      console.error("Failed to fetch config", error);
      return {}; // Return an empty object in case of failure
    }
  }

  static async generateMetaFromStory(slug) {
    try {
      const story = await this.getStory({ slug: [slug] });
      return {
        title: story?.seo?.title || "Default Title",
        description: story?.seo?.description || "Default Description",
      };
    } catch (error) {
      console.error(`Failed to generate metadata for slug: ${slug}`, error);
      return {
        title: "Default Title",
        description: "Default Description",
      }; // Provide default values in case of failure
    }
  }

  static async getStaticPaths() {
    try {
      const sbParams = { version: this.VERSION };
      const { data } = await this.sbGet("cdn/links/", sbParams);
      return Object.keys(data.links).map((linkKey) => {
        const link = data.links[linkKey];
        if (link.is_folder || link.slug === "home") return null;
        const slug = link.slug === "home" ? [] : link.slug;
        return slug ? { slug: slug.split("/") } : null;
      }).filter(Boolean); // Filter out null values
    } catch (error) {
      console.error("Failed to fetch static paths", error);
      return []; // Return an empty array in case of failure
    }
  }
}
