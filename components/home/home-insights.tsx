import Image from 'next/image';
import Link from 'next/link';

import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { getBlogPosts } from '@/services/api/content';

export async function HomeInsights() {
  const posts = await getBlogPosts({ page: 1, pageSize: 3 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="text-center font-display text-4xl text-ink sm:text-5xl">
          Latest Insights
        </h2>
      </ScrollReveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {posts.items.map((post, index) => (
          <ScrollReveal
            className="h-full"
            delay={0.08 * (index + 1)}
            key={post.id}
          >
            <article className="flex h-full flex-col">
              <Link
                className="block overflow-hidden bg-parchment"
                href={`/blog/${post.slug}`}
              >
                <div className="relative aspect-[1.15/1]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col space-y-4 pt-4">
                <span
                  className="block h-1 w-full bg-beigeDark"
                  aria-hidden="true"
                />
                <h3 className="line-clamp-2 font-display text-3xl leading-tight text-ink font-semibold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="line-clamp-3 text-sm leading-7 text-steel">
                  {post.excerpt}
                </p>
                <Link
                  className="inline-flex text-sm font-semibold text-ink hover:text-accent"
                  href={`/blog/${post.slug}`}
                >
                  Read More
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
