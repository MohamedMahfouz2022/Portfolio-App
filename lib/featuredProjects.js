export const featuredProjects = [
  {
    name: "Dukaan Hudum",
    repoName: "dukaan-hudum",
    category: "E-commerce",
    description:
      "An Arabic-first menswear storefront for exploring collections, product details, new arrivals, and quick-add actions.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/dukaan-hudum.webp",
    imageAlt: "Dukaan Hudum Arabic menswear storefront homepage",
    liveUrl: "https://dukaan-hudum.vercel.app",
    sourceUrl: "https://github.com/MohamedMahfouz2022/dukaan-hudum",
  },
  {
    name: "Egyptian Food Restaurant",
    repoName: "Egyptian-Food-Restaurant",
    category: "Restaurant ordering",
    description:
      "An Arabic RTL restaurant experience with a categorized digital menu, customer details, and an order flow designed for WhatsApp.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/egyptian-food-restaurant.webp",
    imageAlt: "Arabic restaurant landing page with Egyptian food menu styling",
    liveUrl: "https://egyptian-food-restaurant.vercel.app",
    sourceUrl: "https://github.com/MohamedMahfouz2022/Egyptian-Food-Restaurant",
  },
  {
    name: "Maxim Café",
    repoName: "maxim-cafe",
    category: "Café ordering",
    description:
      "An Arabic café menu with category filters, a shared order basket, table-based ordering, and a WhatsApp handoff.",
    technologies: ["Next.js", "React Context", "Tailwind CSS"],
    image: "/projects/maxim-cafe.webp",
    imageAlt: "Maxim Café Arabic ordering homepage with coffee menu calls to action",
    liveUrl: "https://maxim-cafe.vercel.app",
    sourceUrl: "https://github.com/MohamedMahfouz2022/maxim-cafe",
  },
];

export const FEATURED_PROJECT_NAMES = new Set(
  featuredProjects.map((project) => project.repoName.toLowerCase())
);
