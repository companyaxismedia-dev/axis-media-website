import React from "react";

export default function HomeVisibilitySection() {
    const stats = [
        {
            value: "50%",
            text: "of Indian shoppers check online before making an actual purchase.",
        },
        {
            value: "52%",
            text: "of Indian shoppers now start their product searches on Instagram, YouTube, or Amazon.",
        },
        {
            value: "61%",
            text: "of Indian users trust Google results for brands that shine on social media platforms.",
        },
        {
            value: "44%",
            text: "of young users turn to AI-generated overviews instead of scrolling through traditional search results.",
        },
    ];

    return (
        <section className="py-12 bg-[#F7F7F7]">
            <div className="max-w-7xl mx-auto px-6">
                {/* TOP HEADING */}
                <div className="text-center max-w-5xl mx-auto mb-10">
                    <div className="w-14 h-[4px] bg-[#1EA4E9] mx-auto mb-4 rounded-full" />

                    <h2 className="text-[22px] md:text-[30px] font-semibold uppercase text-[#178FD0] leading-snug tracking-wide">
                        A Results-Driven Digital Marketing Company in Delhi for Growing Brands
                    </h2>

                    <p className="mt-5 text-[14px] md:text-[15px] leading-[1.7] text-gray-800 max-w-4xl mx-auto">
                        Axis Media is a leading digital marketing services company in Delhi,
                        created to help ambitious brands grow across every searchable
                        platform in this age of AI and response marketing. We utilize modern
                        digital marketing tools and practical strategies to strengthen your
                        social presence and online performance across platforms. From PPC
                        and AI SEO to social media, content, website development, social
                        listening and influencer marketing, we blend data and technology to
                        help brands make smarter decisions and unlock new opportunities.
                    </p>
                </div>

                {/* CONTENT ROW */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">
                    {/* LEFT TEXT */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-[20px] md:text-[26px] font-bold text-[#6D28D9] leading-snug mb-4">
                            But what hasn&apos;t changed is the value of Visibility
                        </h3>

                        <div className="space-y-4 text-gray-800 text-[14px] md:text-[15px] leading-[1.7]">
                            <p>
                                The search you knew for decades has changed and nothing is same
                                anymore. With the evolution of technology, the way people
                                search, discover and buy has also evolved. Gone are the days
                                when visibility meant ranking on Google alone. Today, people
                                search everywhere, on every digital platform wherever possible,
                                making it imperative for brands to be present and consistent
                                across every platform like Google, Instagram, YouTube, LinkedIn,
                                marketplaces and even AI-generated results.
                            </p>

                            <p>
                                Modern shoppers, especially younger audiences, research products
                                thoroughly on social platforms before making a purchase. On top
                                of that AI has changed the way people search and evaluate
                                products, making it essential for brands to be future-ready by
                                being present exactly where your audience is looking.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="h-full">
                        <div className="overflow-hidden rounded-sm h-full min-h-[320px]">
                            <img
                                src="/Eurofish.webp"
                                alt="Digital marketing visibility and analytics"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {stats.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="shrink-0 leading-none">
                                <span className="text-[32px] md:text-[44px] font-bold text-gray-800 tracking-tight">
                                    {item.value.slice(0, -1)}
                                </span>
                                <span className="text-[32px] md:text-[44px] font-bold text-[#1EA4E9] tracking-tight">
                                    %
                                </span>
                            </div>

                            <p className="text-[14px] md:text-[15px] leading-[1.6] text-gray-800 pt-1 max-w-xl">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}