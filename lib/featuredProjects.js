export const featuredProjects = [
  {
    name: "Dukaan Hudum",
    repoName: "dukaan-hudum",
    category: "E-commerce",
    categoryAr: "متجر إلكتروني",
    description:
      "An Arabic-first menswear storefront for exploring collections, product details, new arrivals, and quick-add actions.",
    descriptionAr:
      "متجر أزياء رجالية يبدأ من العربية، يتيح استكشاف المجموعات وتفاصيل المنتجات والقطع الجديدة وإضافتها إلى السلة بسهولة.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/dukaan-hudum.webp",
    imageAlt: "Dukaan Hudum Arabic menswear storefront homepage",
    imageAltAr: "الصفحة الرئيسية لمتجر دكان هدوم للأزياء الرجالية باللغة العربية",
    liveUrl: "https://dukaan-hudum.vercel.app",
    sourceUrl: "https://github.com/MohamedMahfouz2022/dukaan-hudum",
  },
  {
    name: "Egyptian Food Restaurant",
    repoName: "Egyptian-Food-Restaurant",
    category: "Restaurant ordering",
    categoryAr: "طلب الطعام",
    description:
      "An Arabic RTL restaurant experience with a categorized digital menu, customer details, and an order flow designed for WhatsApp.",
    descriptionAr:
      "تجربة مطعم عربية باتجاه RTL، تضم قائمة رقمية مصنفة وبيانات العميل ومسار طلب مصمم للإرسال عبر WhatsApp.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/egyptian-food-restaurant.webp",
    imageAlt: "Arabic restaurant landing page with Egyptian food menu styling",
    imageAltAr: "صفحة مطعم عربية بتصميم مستوحى من قائمة الطعام المصري",
    liveUrl: "https://egyptian-food-restaurant.vercel.app",
    sourceUrl: "https://github.com/MohamedMahfouz2022/Egyptian-Food-Restaurant",
  },
  {
    name: "Maxim Café",
    repoName: "maxim-cafe",
    category: "Café ordering",
    categoryAr: "طلبات المقهى",
    description:
      "An Arabic café menu with category filters, a shared order basket, table-based ordering, and a WhatsApp handoff.",
    descriptionAr:
      "قائمة مقهى باللغة العربية، مع تصفية حسب الفئات وسلة طلبات مشتركة وطلب حسب رقم الطاولة وإرسال الطلب عبر WhatsApp.",
    technologies: ["Next.js", "React Context", "Tailwind CSS"],
    image: "/projects/maxim-cafe.webp",
    imageAlt: "Maxim Café Arabic ordering homepage with coffee menu calls to action",
    imageAltAr: "الصفحة الرئيسية لطلبات مقهى ماكسيم العربية مع قائمة القهوة وأزرار الطلب",
    liveUrl: "https://maxim-cafe.vercel.app",
    sourceUrl: "https://github.com/MohamedMahfouz2022/maxim-cafe",
  },
];

export const FEATURED_PROJECT_NAMES = new Set(
  featuredProjects.map((project) => project.repoName.toLowerCase())
);
