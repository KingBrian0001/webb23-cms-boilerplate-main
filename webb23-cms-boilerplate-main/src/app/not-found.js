import { StoryblokCMS } from "@/utils/cms";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("404");
}

export default async function NotFoundPage() {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["404"] });

    if (!currentStory) {
      return renderFallback();
    }

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    console.error("Error fetching 404 story:", error);
    return renderFallback();
  }
}

function renderFallback() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-lg font-bold mt-4 text-center">
          404 - Site not found
        </h1>
        <p className="py-2 text-center">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </section>
    </main>
  );
}

export const dynamic = StoryblokCMS.isDevelopment
  ? "force-dynamic"
  : "force-static";
