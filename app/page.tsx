import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";
import { Inline } from "@/lib/inline";

export default function HomePage() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        {site.skip}
      </a>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="nav-link font-serif text-lg">
            {site.name}
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <nav aria-label={site.navLabel}>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="nav-link inline-flex min-h-11 items-center">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main id="content" className="mx-auto max-w-2xl px-5 pb-20">
        <article id="top" className="pt-12 sm:pt-16">
          <h1 className="font-serif text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 text-xl text-ink">{site.role}</p>
          <p className="mt-1 font-serif text-lg text-muted italic">{site.location}</p>
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            width={site.portrait.width}
            height={site.portrait.height}
            priority
            quality={55}
            sizes="(min-width: 672px) 640px, 100vw"
            className="mt-8 h-auto w-full rounded-sm border border-line"
          />
          {site.hero.map((paragraph) => (
            <p key={paragraph} className="mt-8 text-pretty">
              {paragraph}
            </p>
          ))}
        </article>

        <section id={site.now.id} className="mt-16 border-t border-line pt-10" aria-labelledby="now-heading">
          <h2 id="now-heading" className="font-serif text-3xl font-medium tracking-tight">
            {site.now.heading}
          </h2>
          {site.now.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-pretty">
              <Inline text={paragraph} />
            </p>
          ))}
        </section>

        <section id={site.past.id} className="mt-16 border-t border-line pt-10" aria-labelledby="past-heading">
          <h2 id="past-heading" className="font-serif text-3xl font-medium tracking-tight">
            {site.past.heading}
          </h2>
          <p className="mt-4 text-muted">{site.past.intro}</p>
          <ol className="mt-8 border-l border-line">
            {site.past.roles.map((role) => (
              <li key={`${role.title}-${role.org}`} className="relative pb-10 pl-6 last:pb-0">
                <span
                  className="absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-paper"
                  aria-hidden="true"
                />
                {role.period ? <p className="text-sm text-muted">{role.period}</p> : null}
                <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight text-balance">
                  {role.title}
                  {role.org ? (
                    <>
                      {", "}
                      {"href" in role && role.href ? <a href={role.href}>{role.org}</a> : role.org}
                    </>
                  ) : null}
                </h3>
                {"body" in role && role.body ? <p className="mt-2 text-pretty">{role.body}</p> : null}
              </li>
            ))}
          </ol>
        </section>

        <section id={site.talks.id} className="mt-16 border-t border-line pt-10" aria-labelledby="talks-heading">
          <h2 id="talks-heading" className="font-serif text-3xl font-medium tracking-tight">
            {site.talks.heading}
          </h2>
          <p className="mt-4 text-pretty">
            <Inline text={site.talks.intro} />
          </p>

          <h3 className="mt-8 font-serif text-2xl font-medium">{site.talks.talksHeading}</h3>
          <ul className="mt-2">
            {site.talks.items.map((item) => (
              <li key={item.title} className="border-b border-line py-5">
                <p className="font-serif text-xl leading-snug font-medium text-balance">
                  {item.links.length === 1 && item.links[0] ? (
                    <a href={item.links[0].href}>{item.title}</a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="mt-1 text-muted">{item.detail}</p>
                {item.links.length > 1 ? (
                  <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>
                          {link.label}
                          <span className="sr-only">: {item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-serif text-2xl font-medium">{site.talks.writingHeading}</h3>
          <ul className="mt-2">
            {site.talks.writing.map((piece) => (
              <li key={piece.href} className="border-b border-line py-5">
                <p className="font-serif text-xl leading-snug font-medium text-balance">
                  <a href={piece.href}>{piece.title}</a>
                </p>
                <p className="mt-1 text-muted">{piece.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Inline text={site.talks.writingNote} />
          </p>
        </section>

        <section id={site.contact.id} className="mt-16 border-t border-line pt-10" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-serif text-3xl font-medium tracking-tight">
            {site.contact.heading}
          </h2>
          <p className="mt-4">{site.contact.intro}</p>
          <ul className="mt-5 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {site.contact.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center"
                  {...("rel" in link ? { rel: link.rel } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto max-w-2xl px-5 py-8 text-sm text-muted">
          <p>{site.footer}</p>
        </div>
      </footer>
    </>
  );
}
