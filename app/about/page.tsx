export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-3xl font-bold text-green-800">About Univents</h1>

            <div className="mx-auto max-w-3xl">
                <div className="rounded-lg border p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">Our Mission</h2>
                    <p className="mb-6 text-gray-700">
                        At Univents, we're dedicated to connecting people with the best events and venues in Azerbaijan. Our platform makes it easy to discover, explore, and attend a wide variety of events - from concerts and festivals to conferences
                        and cultural gatherings.
                    </p>

                    <h2 className="mb-4 text-xl font-semibold">Who We Are</h2>
                    <p className="mb-6 text-gray-700">
                        Founded in 2023, Univents has quickly become the premier destination for event discovery in Azerbaijan. Our team of passionate event enthusiasts works tirelessly to curate the most comprehensive and up-to-date listings of
                        events and venues across the country.
                    </p>

                    <h2 className="mb-4 text-xl font-semibold">What We Offer</h2>
                    <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
                        <li>Comprehensive listings of events across Azerbaijan</li>
                        <li>Detailed information about venues and their facilities</li>
                        <li>Latest news about upcoming events and entertainment</li>
                        <li>Interactive maps to help you find your way</li>
                        <li>User-friendly search to quickly find what you're looking for</li>
                    </ul>

                    <h2 className="mb-4 text-xl font-semibold">Our Values</h2>
                    <p className="text-gray-700">
                        We believe in making cultural and entertainment experiences accessible to everyone. Our platform is built on the principles of inclusivity, accuracy, and user-friendliness. We're committed to supporting the vibrant cultural
                        scene in Azerbaijan and helping our users discover new experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
