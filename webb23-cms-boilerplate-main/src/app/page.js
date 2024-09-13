import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  try {
    return await StoryblokCMS.generateMetaFromStory("home");
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    // Return default metadata or handle appropriately
    return {
      title: "Default Title",
      description: "Default description",
    };
  }
}

export default async function StartPage() {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["product"] });

    if (!currentStory) {
      // Log and handle case when the story is not found
      console.warn("Story not found for slug: 'product'");
      notFound();
    }

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    console.error("Error fetching story:", error);
    notFound();
  }
}

export const dynamic = StoryblokCMS.isDevelopment
  ? "force-dynamic"
  : "force-static";
