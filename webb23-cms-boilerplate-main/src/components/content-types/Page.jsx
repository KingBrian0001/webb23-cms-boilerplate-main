import { useEffect, useState } from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";
// import "@/components/styling/index.css";

export default function Page({ blok }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (blok) {
      setContent(blok);
    }
  }, [blok]);

  if (!content) {
    return <div className="text-center py-10">Loading page...</div>;
  }

  return (
    <main className="flex flex-col">
      {content.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
