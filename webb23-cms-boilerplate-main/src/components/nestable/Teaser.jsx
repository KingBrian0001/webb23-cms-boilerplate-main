export default function Teaser({ blok }) {
    return (
        <section className="w-full bg-red-500 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">{blok?.headline || "Default Headline"}</h1>
            <p className="text-lg text-gray-200">{blok?.desc || "Default description text."}</p>
        </section>
    );
}
