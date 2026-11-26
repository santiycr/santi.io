/**
 * All public copy for santi.io.
 * Edit this file to change the words on the page, the links, and the meta description.
 * formalName is used only in structured data. It is not shown on the page.
 */

export const site = {
  name: "Santi Suarez Ordoñez",
  formalName: "Santiago Suarez Ordoñez",
  role: "Head of Momentum at Salesforce",
  location: "Rosario, Argentina",
  url: "https://santi.io",
  email: "santiycr@gmail.com",
  updated: "2026-11-26",
  description:
    "Santi Suarez Ordoñez is Head of Momentum at Salesforce. He co-founded Momentum and lives in Rosario, Argentina.",
  skip: "Skip to content",
  navLabel: "Sections",
  footer: "Santi Suarez Ordoñez",
  theme: {
    toDark: "Use dark theme",
    toLight: "Use light theme",
  },
  nav: [
    { href: "#now", label: "Now" },
    { href: "#past", label: "Past" },
    { href: "#talks", label: "Talks" },
    { href: "#contact", label: "Contact" },
  ],
  portrait: {
    src: "/portrait.jpg",
    width: 1200,
    height: 630,
    alt: "Santi Suarez Ordoñez smiling in a doorway framed by vines, with hills behind him.",
  },
  hero: [
    "I co-founded Momentum. Salesforce acquired the company in 2026, and I still lead it. The product is part of Sales Cloud.",
  ],
  now: {
    id: "now",
    heading: "Now",
    paragraphs: [
      "Momentum is the company Ashley Wilson, Moiz Virani, and I founded. We work on AI conversation insights for revenue teams. The product is at [momentum.io](https://momentum.io). [South Park Commons](https://www.southparkcommons.com/companies/momentum) lists the three of us as the founders.",
      "On 18 February 2026, Salesforce announced an agreement to acquire Momentum. I wrote about the agreement [on the Momentum blog](https://www.momentum.io/blog/salesforce-signs-definitive-agreement-to-acquire-momentum) that day. The deal [closed on 2 March 2026](https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-momentum/).",
      "Momentum on Sales Cloud became generally available in early November 2026.",
    ],
  },
  past: {
    id: "past",
    heading: "Past",
    intro: "Earlier roles, newest first.",
    roles: [
      {
        period: "2020 to March 2026",
        title: "Co-founder and CEO",
        org: "Momentum",
        href: "https://momentum.io",
        body: "I was CEO from 2020 until the acquisition closed.",
      },
      {
        // whyline.com currently redirects to clearme.com, so this entry has no link.
        period: "February 2019 to February 2020",
        title: "CTO",
        org: "Whyline",
      },
      {
        period: "June 2017 to September 2018",
        title: "Co-founder and CTO",
        org: "Blameless",
        href: "https://www.blameless.com",
      },
      {
        period: "September 2016 to October 2017",
        title: "Principal Engineer",
        org: "MuleSoft",
        href: "https://www.mulesoft.com",
        body: "I was a principal engineer and team lead on the Core PaaS team. I was there for the IPO in March 2017.",
      },
      {
        period: "About 2009 to 2016",
        title: "First employee, later Director of Engineering",
        org: "Sauce Labs",
        href: "https://saucelabs.com",
        body: "I was the first employee and stayed about seven years. I later led engineering for Core Services. A SeleniumConf 2012 speaker page listed me as a customer success engineer, so the job was not one title the whole time.",
      },
      {
        period: "",
        title: "Core contributor",
        org: "Selenium",
        href: "https://www.selenium.dev",
        body: "I am a core contributor to the Selenium project. I spoke about it at conferences while I was at Sauce Labs.",
      },
    ],
  },
  talks: {
    id: "talks",
    heading: "Talks and writing",
    intro:
      "The talks are mostly from my Sauce Labs years. Slides live on [Speaker Deck](https://speakerdeck.com/santiycr).",
    talksHeading: "Talks",
    writingHeading: "Writing",
    writingNote: "My Medium profile is [medium.com/@santiycr](https://medium.com/@santiycr).",
    items: [
      {
        title: "Selenium is dead, long live Selenium!",
        detail: "20 November 2013",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/selenium-is-dead-long-live-selenium",
          },
        ],
      },
      {
        title: "Selenium for Pythonistas",
        detail: "San Francisco Python meetup at Yelp, 8 May 2013",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/selenium-for-pythonistas",
          },
        ],
      },
      {
        title:
          "Integrating Selenium and Sauce Labs into your Continuous Integration Build",
        detail: "PyCon US sponsor tutorial with Jason Carr, 14 March 2013",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/pycon-workshop-slides",
          },
          {
            label: "Schedule",
            href: "https://pycon-archive.python.org/2013/schedule/sponsor-tutorials/",
          },
        ],
      },
      {
        title: "Stripping down RemoteWebDriver",
        detail: "7 October 2012",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/stripping-down-remotewebdriver",
          },
        ],
      },
      {
        title: "Automation, Selenium and Sauce",
        detail: "5 October 2012",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/automation-selenium-and-sauce",
          },
        ],
      },
      {
        title: "Optimizing Selenium for build performance",
        detail: "1 September 2012",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/optimi",
          },
        ],
      },
      {
        title: "So You're Automated...Now Let's Make It Fast!",
        detail: "SeleniumConf London, 17 April 2012",
        links: [
          {
            label: "Video",
            href: "https://www.youtube.com/watch?v=GBRLFvx1UwQ",
          },
          {
            label: "Schedule",
            href: "https://www.selenium.dev/conf-archive/editions/london2012/schedule/index.html",
          },
        ],
      },
      {
        title: "Tips From Our Codebase To Help You Write Reliable Selenium Tests",
        detail: "1 February 2012",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/tips-from-our-codebase-to-help-you-write-reliable-selenium-tests",
          },
        ],
      },
      {
        title: "Testing Automatizado",
        detail: "17 January 2012. The slides are in Spanish.",
        links: [
          {
            label: "Slides",
            href: "https://speakerdeck.com/santiycr/testing-automatizado",
          },
        ],
      },
    ],
    writing: [
      {
        title: "Salesforce signs a definitive agreement to acquire Momentum",
        detail: "18 February 2026, on the Momentum blog",
        href: "https://www.momentum.io/blog/salesforce-signs-definitive-agreement-to-acquire-momentum",
      },
      {
        title: "Goal Driven Versioning: A Better Schema for Product Releases",
        detail: "9 June 2020, on Medium",
        href: "https://medium.com/swlh/goal-driven-versioning-a-better-schema-for-product-releases-b084baef84f2",
      },
      {
        title: "The Alliance: A Framework for Hiring at Startups",
        detail: "6 June 2020, on Medium",
        href: "https://medium.com/@santiycr/the-alliance-a-framework-for-hiring-at-startups-59eb06e9179f",
      },
      {
        title: "The ultimate guide to cold showers",
        detail: "12 April 2017, on Medium",
        href: "https://medium.com/@santiycr/the-ultimate-guide-to-cold-showers-a07815274437",
      },
    ],
  },
  contact: {
    id: "contact",
    heading: "Contact",
    intro: "You can reach me by email or on the profiles below.",
    links: [
      {
        label: "santiycr@gmail.com",
        href: "mailto:santiycr@gmail.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/santiycr",
        rel: "me",
      },
      {
        label: "X @santiycr",
        href: "https://x.com/santiycr",
        rel: "me",
      },
      {
        label: "GitHub santiycr",
        href: "https://github.com/santiycr",
        rel: "me",
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/in/santiycr",
    "https://x.com/santiycr",
    "https://github.com/santiycr",
    "https://speakerdeck.com/santiycr",
    "https://medium.com/@santiycr",
  ],
} as const;
