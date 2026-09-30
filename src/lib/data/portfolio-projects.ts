export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  filter: "Websites";
  seoTitle: string;
  seoDescription: string;
  summary: string;
  designSystem: {
    overview: string;
    principles: { title: string; description: string }[];
  };
  enhancements: { title: string; description: string }[];
  testimonial: { quote: string; name: string };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "frogr",
    title: "Frogr",
    description:
      "A household-task website that makes booking local help feel as simple as choosing a category.",
    category: "Websites",
    image: "/images/portfolio/frogr.png",
    imageAlt: "Frogr website hero, Get Any Household Task Done in Anytime",
    imageWidth: 1440,
    imageHeight: 4455,
    tags: ["Marketplace", "Design System"],
    filter: "Websites",
    seoTitle: "Frogr — Website Case Study",
    seoDescription:
      "How the Frogr website uses a warm design system, color-coded tasks, and a clearer booking path for household help.",
    summary:
      "Frogr needed a website that explains a busy marketplace in one glance: people looking for help, taskers ready to work, and a path from browse to booking.",
    designSystem: {
      overview:
        "The system is built on a warm paper background, one sunflower yellow for action, and soft illustrations so the service feels neighbourly rather than corporate. Task types each get their own color so a long list stays easy to scan.",
      principles: [
        {
          title: "One action color",
          description:
            "Yellow is reserved for Register and the primary steps. Everything else stays cream, ink, or a category tint.",
        },
        {
          title: "Illustrated, not stock",
          description:
            "Small scenes of home tasks sit beside the headline so visitors understand the offer before they read a paragraph.",
        },
        {
          title: "Color-coded tasks",
          description:
            "Plumbing, electrical, carpentry, cleaning, and the rest each live in a distinct tile. Color does the sorting; the label does the naming.",
        },
        {
          title: "Trust before the footer",
          description:
            "KYC verification and customer reviews sit as a pair, so proof shows up before the FAQ.",
        },
      ],
    },
    enhancements: [
      {
        title: "A three-step story",
        description:
          "Browse, Task, and Earn replace a long explanation of how the marketplace works. Each step is a card with one job.",
      },
      {
        title: "Tasks you can see",
        description:
          "The category grid covers the real work people book, from plumbing and painting to pool care, instead of a generic services menu.",
      },
      {
        title: "Signup in the hero",
        description:
          "Register sits with the headline, and a short line tells visitors they can connect with verified taskers in minutes.",
      },
      {
        title: "Questions after proof",
        description:
          "The FAQ comes after verification and reviews, so the page answers doubts only once trust is already on screen.",
      },
    ],
    testimonial: {
      quote:
        "The new site finally looks like the product we run. People understand the tasks, see that taskers are verified, and register without a walkthrough from our team.",
      name: "Meera Krishnan",
    },
  },
  {
    slug: "the-banik",
    title: "The Banik",
    description:
      "An about page that tells the vision, mission, and story through people, numbers, and a clear orange system.",
    category: "Websites",
    image: "/images/portfolio/the-banik.png",
    imageAlt: "The Banik about page hero, vision mission and story",
    imageWidth: 1440,
    imageHeight: 3235,
    tags: ["Storytelling", "Design System"],
    filter: "Websites",
    seoTitle: "The Banik — Website Case Study",
    seoDescription:
      "How The Banik about page pairs a peach and orange design system with photos, impact numbers, and leadership portraits.",
    summary:
      "The Banik had a mission people cared about and an about page that read like a document. The new page leads with the story, then proves it with faces and numbers.",
    designSystem: {
      overview:
        "Peach is the ground, orange is the voice, and marker underlines pick out the words that matter. Photos sit in mixed rounded frames so the page feels assembled by hand, not dropped into a template.",
      principles: [
        {
          title: "Orange as emphasis",
          description:
            "Orange blocks carry the mission statement and the words we want remembered. Body copy stays quiet on the peach field.",
        },
        {
          title: "Collage over a banner",
          description:
            "Portraits, stat tiles, and short lines share one band. No single hero photo has to carry the whole organization.",
        },
        {
          title: "Numbers next to people",
          description:
            "85% and 200+ sit beside the communities they describe, so impact is never a floating statistic.",
        },
        {
          title: "Leadership you can meet",
          description:
            "Portraits use different frames on purpose. The variety keeps a team of four from looking like a staff directory.",
        },
      ],
    },
    enhancements: [
      {
        title: "Story in the first line",
        description:
          "The headline names vision, mission, and story, with a hand-drawn circle on the words that define the organization.",
      },
      {
        title: "Proof in the same scroll",
        description:
          "Impact stats and a short invitation to join sit inside the opening collage, not on a later page.",
      },
      {
        title: "Watch. Learn. Grow.",
        description:
          "A media row gives the work a second way in: film stills with play marks, dated and titled, instead of another paragraph.",
      },
      {
        title: "People close the page",
        description:
          "Leadership portraits finish the story. Visitors meet who is accountable before they reach the footer.",
      },
    ],
    testimonial: {
      quote:
        "Visitors used to leave our about page without knowing who we are. Now they see the mission, the numbers, and the people in one pass, and they write to us ready to help.",
      name: "Surya Prakash",
    },
  },
  {
    slug: "the-brand",
    title: "The Brand",
    description:
      "A purpose-led brand website in cocoa and tangerine, from the opening film to the contact band.",
    category: "Websites",
    image: "/images/portfolio/the-brand.png",
    imageAlt: "The Brand website hero with a family photo and play button",
    imageWidth: 2160,
    imageHeight: 7778,
    tags: ["Brand", "Design System"],
    filter: "Websites",
    seoTitle: "The Brand — Website Case Study",
    seoDescription:
      "How The Brand website uses a cocoa and tangerine design system to explain purpose, leadership, and a clear way to get in touch.",
    summary:
      "The Brand needed a site that felt like the company: warm, a little playful, and serious about the work. The page carries one palette from the drip in the header to the form at the end.",
    designSystem: {
      overview:
        "Cocoa brown and tangerine orange split the page into clear bands. A chocolate drip marks the top, cloud shapes separate sections, and every card shares the same radius and icon style.",
      principles: [
        {
          title: "Two colors, used fully",
          description:
            "Brown holds the story and the footer. Orange holds the work: capabilities, leadership, and the contact close.",
        },
        {
          title: "Shapes that repeat",
          description:
            "The drip, the clouds, and the small spark marks show up more than once so the page feels like one system.",
        },
        {
          title: "Equal capability cards",
          description:
            "Six cards share one size. Icons and a single line of detail keep major concern, cause, and progress easy to compare.",
        },
        {
          title: "Leadership on color",
          description:
            "Portraits sit on solid panels instead of a white grid, so the team belongs to the brand rather than floating above it.",
        },
      ],
    },
    enhancements: [
      {
        title: "A film in the hero",
        description:
          "The opening still has a play control, so the brand story can be watched before it is read.",
      },
      {
        title: "Purpose, then the work",
        description:
          "The capability grid comes immediately after the promise, with six named areas instead of a vague what-we-do paragraph.",
      },
      {
        title: "Mission beside the picture",
        description:
          "Copy and a second film sit side by side, so the mission is both said and shown.",
      },
      {
        title: "Contact in the same system",
        description:
          "The form uses the cocoa band and the same orange button as the hero, instead of a generic contact block.",
      },
    ],
    testimonial: {
      quote:
        "We finally have a website that looks like our brand in the room. Partners mention the color and the clarity, and the contact form actually gets finished.",
      name: "Amina Cole",
    },
  },
  {
    slug: "rush",
    title: "Rush",
    description:
      "A dark product website for Rush, with an emerald light system and the product shown in glass cards.",
    category: "Websites",
    image: "/images/portfolio/rush.png",
    imageAlt: "Rush website hero, Unlock Your Productivity Potential",
    imageWidth: 1440,
    imageHeight: 4823,
    tags: ["Product", "Design System"],
    filter: "Websites",
    seoTitle: "Rush — Website Case Study",
    seoDescription:
      "How the Rush website uses a dark emerald design system to explain the product, plans, and questions on one page.",
    summary:
      "Rush is a productivity product that was being explained on a light, generic page. The new site puts the interface in a dark field and lets one green light lead the eye.",
    designSystem: {
      overview:
        "The canvas is near black. Emerald is the only bright color: it draws the hero wave, the plan highlight, and the newsletter button. Product UI sits in dark glass cards with quiet borders.",
      principles: [
        {
          title: "Light as a path",
          description:
            "The green wave under the headline is the brand signal. It returns in small glows so the page never needs a second accent.",
        },
        {
          title: "Glass product cards",
          description:
            "Screens of the product live in inset panels. Visitors see the tool, not a mockup floating on white.",
        },
        {
          title: "Type stays thin and calm",
          description:
            "Headlines are large and light. Body copy is small and gray so the interface shots remain the loudest thing.",
        },
        {
          title: "Plans without a new theme",
          description:
            "Pricing uses the same dark cards. One plan is marked so the choice is visible without a brighter page.",
        },
      ],
    },
    enhancements: [
      {
        title: "The product in the first screen",
        description:
          "Dashboard cards appear as soon as the headline ends, so the promise is backed by the actual interface.",
      },
      {
        title: "A wave instead of a stock banner",
        description:
          "The emerald ribbon replaces a generic hero image and ties the top of the page to the close.",
      },
      {
        title: "Plans after the story",
        description:
          "Pricing arrives once the product has been shown, with three choices in one row.",
      },
      {
        title: "Questions, then a quiet signup",
        description:
          "The FAQ handles objections. The newsletter is a single line at the end, in the same green as the hero.",
      },
    ],
    testimonial: {
      quote:
        "The dark site made Rush feel like a product people want open on their desk. Demos start further along because visitors have already seen the interface.",
      name: "Jonah Ellis",
    },
  },
  {
    slug: "relate",
    title: "Relate",
    description:
      "A CRM website that explains customer work as four stages: prospect, close, retain, and recycle.",
    category: "Websites",
    image: "/images/portfolio/relate.png",
    imageAlt: "Relate website hero, Customer Relationship in good hands",
    imageWidth: 1440,
    imageHeight: 7125,
    tags: ["CRM", "Design System"],
    filter: "Websites",
    seoTitle: "Relate — Website Case Study",
    seoDescription:
      "How the Relate website uses a pale blue design system and four pipeline stages to explain a CRM without a feature dump.",
    summary:
      "Relate had a capable CRM and a homepage that listed features. The new page walks through the pipeline the way a team actually works.",
    designSystem: {
      overview:
        "A pale blue wash holds the page. Product screens sit in white frames with soft shadows so the UI stays readable. Blue is the link and the button; the product itself supplies the other colors.",
      principles: [
        {
          title: "Air around the product",
          description:
            "Screenshots never touch the edge of a section. The blue field gives them room so a dense CRM still feels calm.",
        },
        {
          title: "Stages, not a feature list",
          description:
            "Prospect, Close, Retain, and Recycle are the chapters. Each one shows the screen that belongs to that moment.",
        },
        {
          title: "White frames",
          description:
            "Every product view uses the same frame, radius, and shadow. The system is the frame; the product is what changes inside it.",
        },
        {
          title: "A soft close",
          description:
            "The customer section and footer stay in the same blue family, with a small heart as the only playful mark.",
        },
      ],
    },
    enhancements: [
      {
        title: "A headline a buyer understands",
        description:
          "“Customer relationship in good hands” replaces a product-name hero. Two actions sit under it: start a trial, or watch it.",
      },
      {
        title: "The pipeline is the page",
        description:
          "Four stages replace a grid of twenty features. Each stage has one screen and a short line about what the team does there.",
      },
      {
        title: "Features after the story",
        description:
          "Track, pipeline, and related tools appear only once the visitor has seen the flow.",
      },
      {
        title: "Customers named simply",
        description:
          "The close is a short customer note, not a wall of logos competing with the product.",
      },
    ],
    testimonial: {
      quote:
        "Sales calls used to start with a tour of the product. Now people arrive having already followed prospect, close, retain, and recycle on the site.",
      name: "Priya Nair",
    },
  },
  {
    slug: "elementum",
    title: "Elementum",
    description:
      "An editorial website for a studio of thinkers and doers, built from type, green highlights, and circular portraits.",
    category: "Websites",
    image: "/images/portfolio/elementum.jpg",
    imageAlt: "Elementum website hero, thinkers and doers changing the status quo",
    imageWidth: 1920,
    imageHeight: 6665,
    tags: ["Editorial", "Design System"],
    filter: "Websites",
    seoTitle: "Elementum — Website Case Study",
    seoDescription:
      "How the Elementum website uses an editorial design system, moss-green highlights, and circular portraits to present the studio.",
    summary:
      "Elementum wanted a website that felt like the studio: direct, human, and a little unexpected. The page is mostly type and faces, with green used only where a word or a block needs weight.",
    designSystem: {
      overview:
        "White space does most of the work. Moss green highlights words in the headline, fills the newsletter, and marks the current idea. Portraits are always circles, so people are the repeating shape.",
      principles: [
        {
          title: "Highlight the few words",
          description:
            "Green sits behind “doers” and “status quo”, and later behind “can” and “customer”. The rest of the type stays black.",
        },
        {
          title: "Circles for people",
          description:
            "Every portrait uses the same circular crop. Groups of faces ring the headline and the quote so the studio is present throughout.",
        },
        {
          title: "Lists, not card grids",
          description:
            "What the studio offers is a short list with arrows. It reads faster than a wall of equal boxes.",
        },
        {
          title: "One green field",
          description:
            "The newsletter is the only full green section. It closes the page the way the highlights opened it.",
        },
      ],
    },
    enhancements: [
      {
        title: "A point of view in the hero",
        description:
          "The headline takes a position. Faces around it show who holds that position, before any service is named.",
      },
      {
        title: "Two ideas, side by side",
        description:
          "“Tomorrow should be better than today” and a progress note sit with large circles, so the middle of the page stays editorial.",
      },
      {
        title: "Offers in one column",
        description:
          "Four lines replace a services grid. Each line is a conversation the studio is ready to have.",
      },
      {
        title: "A quote among the team",
        description:
          "The client line sits in the same circle system as the studio, so the testimonial belongs to the design instead of a separate widget.",
      },
    ],
    testimonial: {
      quote:
        "Clients tell us the site feels like a first meeting. They already know how we think, and the first call is about the work, not an introduction.",
      name: "Lena Voss",
    },
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
