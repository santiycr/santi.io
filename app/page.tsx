import Image from "next/image";
import { site } from "@/content/site";
import { RichText, TextLink } from "@/components/rich-text";

export const metadata = {
  title: {
    absolute: site.name,
  },
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="mx-auto max-w-[40rem] px-5 sm:px-6">
        <header className="pb-8 pt-14 sm:pt-20">
          <h1 className="font-display text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl">{site.title}</p>
          <p className="mt-1 text-muted">{site.location}</p>
          <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Sections">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="link min-h-11 inline-flex items-center">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main id="content">
          <section aria-label="Intro" className="pb-12">
            <div className="space-y-4 text-[1.075rem] leading-7">
              {site.intro.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
            <figure className="mt-8">
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                width={site.portrait.width}
                height={site.portrait.height}
                priority
                sizes="(min-width: 640px) 608px, 100vw"
                className="h-auto w-full border border-line"
              />
            </figure>
          </section>

          <section
            id={site.now.id}
            aria-labelledby="now-heading"
            className="border-t border-line py-12"
          >
            <h2 id="now-heading" className="font-display text-3xl tracking-tight">
              {site.now.heading}
            </h2>
            <div className="mt-6 space-y-4 text-[1.075rem] leading-7">
              {site.now.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          </section>

          <section
            id={site.earlier.id}
            aria-labelledby="earlier-heading"
            className="border-t border-line py-12"
          >
            <h2 id="earlier-heading" className="font-display text-3xl tracking-tight">
              {site.earlier.heading}
            </h2>
            <ol className="mt-6">
              {site.earlier.items.map((item) => (
                <li
                  key={item.org}
                  className="grid gap-1 border-t border-line py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-8"
                >
                  {item.years ? (
                    <p className="text-sm leading-6 text-muted sm:pt-1">{item.years}</p>
                  ) : (
                    <span className="hidden sm:block" aria-hidden="true" />
                  )}
                  <div>
                    <h3 className="font-display text-2xl leading-tight tracking-tight">
                      {"href" in item && item.href ? (
                        <TextLink href={item.href}>{item.org}</TextLink>
                      ) : (
                        item.org
                      )}
                    </h3>
                    <p className="mt-1 text-muted">{item.role}</p>
                    {item.detail ? (
                      <p className="mt-3 text-[1.075rem] leading-7">
                        <RichText text={item.detail} />
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            id={site.talks.id}
            aria-labelledby="talks-heading"
            className="border-t border-line py-12"
          >
            <h2 id="talks-heading" className="font-display text-3xl tracking-tight">
              {site.talks.heading}
            </h2>

            <h3 className="mt-8 font-display text-2xl tracking-tight">
              {site.talks.writingHeading}
            </h3>
            <ul className="mt-4">
              {site.talks.writing.map((piece) => (
                <li key={piece.href} className="border-t border-line py-5">
                  <h4 className="text-lg leading-snug">
                    <TextLink href={piece.href}>{piece.title}</TextLink>
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-muted">{piece.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[1.075rem] leading-7">
              <RichText text={site.talks.writingNote} />
            </p>

            <h3 className="mt-10 font-display text-2xl tracking-tight">
              {site.talks.talksHeading}
            </h3>
            <ul className="mt-4">
              {site.talks.talks.map((talk) => (
                <li key={talk.href} className="border-t border-line py-5">
                  <h4 className="text-lg leading-snug">
                    <TextLink href={talk.href}>{talk.title}</TextLink>
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-muted">{talk.detail}</p>
                  {"more" in talk && talk.more ? (
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {talk.more.map((link) => (
                        <TextLink key={link.href} href={link.href}>
                          {link.label}
                        </TextLink>
                      ))}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[1.075rem] leading-7">
              <RichText text={site.talks.talksNote} />
            </p>
          </section>

          <section
            id={site.contact.id}
            aria-labelledby="contact-heading"
            className="border-t border-line py-12"
          >
            <h2 id="contact-heading" className="font-display text-3xl tracking-tight">
              {site.contact.heading}
            </h2>
            <p className="mt-6 text-[1.075rem] leading-7">{site.contact.body}</p>
            <ul className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-8">
              {site.contact.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href} me={"me" in link ? link.me : false}>
                    <span className="inline-flex min-h-11 items-center">{link.label}</span>
                  </TextLink>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="border-t border-line py-8 text-sm text-muted">
          <p>
            {site.name}. {site.location}.
          </p>
        </footer>
      </div>
    </>
  );
}
