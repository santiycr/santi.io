/**
 * All public copy for santi.io.
 * Edit this file to change the words on the site.
 * Do not add a phone number.
 *
 * Inline links use markdown: [label](https://example.com)
 */

export const site = {
  name: "Santi Suarez Ordoñez",
  // Public title. Use this string exactly.
  title: "Head of Momentum @ Salesforce",
  location: "Rosario, Argentina",
  url: "https://santi.io",
  email: "santiycr@gmail.com",
  description:
    "Santi Suarez Ordoñez is Head of Momentum at Salesforce. He co-founded Momentum and lives in Rosario, Argentina.",
  updated: "2026-11-26",
  portrait: {
    src: "/santi.jpg",
    alt: "Santi Suarez Ordoñez standing in a garden doorway, smiling, with vines overhead.",
    width: 1200,
    height: 630,
  },
  nav: [
    { label: "Now", href: "#now" },
    { label: "Earlier", href: "#earlier" },
    { label: "Talks and writing", href: "#talks" },
    { label: "Contact", href: "#contact" },
  ],
  intro: [
    "I co-founded [Momentum](https://momentum.io). We build AI conversation insights and revenue orchestration software. Salesforce acquired the company in 2026, and it now ships as Momentum on Sales Cloud.",
  ],
  now: {
    id: "now",
    heading: "Now",
    paragraphs: [
      "Salesforce acquired Momentum in 2026. I wrote [the announcement](https://www.momentum.io/blog/salesforce-signs-definitive-agreement-to-acquire-momentum). Momentum on Sales Cloud became generally available in early November 2026.",
      "I started the company in May 2020 with Ashley Wilson and Moiz Virani, and I was CEO until May 2026.",
    ],
  },
  earlier: {
    id: "earlier",
    heading: "Earlier",
    items: [
      {
        years: "2019 to 2020",
        org: "Whyline",
        role: "CTO",
        detail:
          "I was CTO from February 2019 to February 2020. Whyline let people see live wait times and join a line remotely. [CLEAR acquired the company](https://ir.clearme.com/news-events/press-releases/detail/35/clear-acquires-virtual-queuing-company-whyline) in January 2022.",
      },
      {
        years: "2017 to 2018",
        org: "Blameless",
        href: "https://www.blameless.com",
        role: "Co-founder and CTO",
        detail: "I co-founded Blameless and was CTO from June 2017 to September 2018.",
      },
      {
        years: "2016 to 2017",
        org: "MuleSoft",
        href: "https://www.mulesoft.com",
        role: "Principal engineer, Core Platform as a Service",
        detail:
          "I was a principal engineer and team lead on the Core Platform as a Service team, from September 2016 to October 2017. The company went public in March 2017, while I was there.",
      },
      {
        years: "2009 to 2016",
        org: "Sauce Labs",
        href: "https://saucelabs.com",
        role: "First employee, later Director of Engineering",
        detail:
          "I joined as the first employee and later led Core Services as Director of Engineering. I was there about seven years. The title changed along the way.",
      },
      {
        years: "Since 2007",
        org: "Selenium",
        href: "https://www.selenium.dev",
        role: "Core contributor",
        detail:
          "I started contributing to Selenium in 2007. I kept contributing as a core member of the project while I was at Sauce Labs.",
      },
    ],
  },
  talks: {
    id: "talks",
    heading: "Talks and writing",
    writingHeading: "Writing",
    writingNote:
      "The three older pieces are on [Medium](https://medium.com/@santiycr).",
    writing: [
      {
        title: "Salesforce Signs Definitive Agreement to Acquire Momentum",
        href: "https://www.momentum.io/blog/salesforce-signs-definitive-agreement-to-acquire-momentum",
        detail: "18 February 2026. Momentum blog.",
      },
      {
        title: "Goal Driven Versioning: A Better Schema for Product Releases",
        href: "https://medium.com/swlh/goal-driven-versioning-a-better-schema-for-product-releases-b084baef84f2",
        detail: "9 June 2020.",
      },
      {
        title: "The Alliance: A Framework for Hiring at Startups",
        href: "https://medium.com/@santiycr/the-alliance-a-framework-for-hiring-at-startups-59eb06e9179f",
        detail: "6 June 2020.",
      },
      {
        title: "The ultimate guide to cold showers",
        href: "https://medium.com/@santiycr/the-ultimate-guide-to-cold-showers-a07815274437",
        detail: "12 April 2017.",
      },
    ],
    talksHeading: "Talks",
    talksNote:
      "These decks are also on [Speaker Deck](https://speakerdeck.com/santiycr).",
    talks: [
      {
        title: "Selenium is dead, long live Selenium!",
        href: "https://speakerdeck.com/santiycr/selenium-is-dead-long-live-selenium",
        detail: "20 November 2013. Speaker Deck.",
      },
      {
        title: "Selenium for Pythonistas",
        href: "https://speakerdeck.com/santiycr/selenium-for-pythonistas",
        detail: "8 May 2013. SF Python Meetup at Yelp.",
      },
      {
        title:
          "Integrating Selenium and Sauce Labs into your Continuous Integration Build",
        href: "https://speakerdeck.com/santiycr/pycon-workshop-slides",
        detail: "14 March 2013. PyCon US sponsor tutorial, with Jason Carr.",
        more: [
          {
            label: "Event page",
            href: "https://pycon-archive.python.org/2013/schedule/sponsor-tutorials/",
          },
        ],
      },
      {
        title: "Automation, Selenium and Sauce",
        href: "https://speakerdeck.com/santiycr/automation-selenium-and-sauce",
        detail: "5 October 2012. Speaker Deck.",
      },
      {
        title: "Optimizing Selenium for build performance",
        href: "https://speakerdeck.com/santiycr/optimi",
        detail: "1 September 2012. Speaker Deck.",
      },
      {
        title: "So You're Automated...Now Let's Make It Fast!",
        href: "https://youtu.be/GBRLFvx1UwQ",
        detail: "16 to 18 April 2012. SeleniumConf, London. Video.",
        more: [
          {
            label: "Conference page",
            href: "https://confpad.io/conferences/seleniumconf-2012-london/so-you-re-automated-now-let-s-make-it-fast",
          },
        ],
      },
      {
        title: "Stripping down RemoteWebDriver",
        href: "https://speakerdeck.com/santiycr/stripping-down-remotewebdriver",
        detail: "Speaker Deck.",
      },
      {
        title: "Tips From Our Codebase To Help You Write Reliable Selenium Tests",
        href: "https://speakerdeck.com/santiycr/tips-from-our-codebase-to-help-you-write-reliable-selenium-tests",
        detail: "Speaker Deck.",
      },
      {
        title: "Testing Automatizado",
        href: "https://speakerdeck.com/santiycr/testing-automatizado",
        detail: "Speaker Deck.",
      },
    ],
  },
  contact: {
    id: "contact",
    heading: "Contact",
    body: "Email is the best way to reach me.",
    links: [
      { label: "santiycr@gmail.com", href: "mailto:santiycr@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/santiycr",
        me: true,
      },
      { label: "X @santiycr", href: "https://x.com/santiycr", me: true },
      {
        label: "GitHub santiycr",
        href: "https://github.com/santiycr",
        me: true,
      },
    ],
  },
  notFound: {
    title: "Page not found",
    body: "That page is not on this site.",
    home: "Back to the homepage",
  },
} as const;

export type TimelineItem = (typeof site.earlier.items)[number];
export type TalkItem = (typeof site.talks.talks)[number];
export type WritingItem = (typeof site.talks.writing)[number];
