"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FEATURED_PROJECT_NAMES } from "@/lib/featuredProjects";

const GITHUB_REPOS_URL =
  "https://api.github.com/users/MohamedMahfouz2022/repos?per_page=100&sort=updated";

const Repos = ({ locale = "en" }) => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const text = locale === "ar"
    ? {
        heading: "المزيد من المشاريع على GitHub",
        description: "تصفّح بقية مستودعاتي العامة.",
        search: "ابحث في مشاريع GitHub الأخرى",
        placeholder: "ابحث عن مشروع أو تقنية",
        loading: "جارٍ تحميل المشاريع الأخرى…",
        error: "تعذّر تحميل مشاريع GitHub حاليًا.",
        fallback: "ما تزال المشاريع المميزة أعلاه متاحة، ويمكنك تصفّح حساب GitHub مباشرة.",
        visit: "زيارة GitHub",
        none: "لا توجد مشاريع عامة إضافية حتى الآن.",
        noMatch: "لا توجد مشاريع تطابق بحثك.",
        noDescription: "لم تتم إضافة وصف لهذا المشروع بعد.",
        demo: "عرض مباشر",
        source: "المصدر",
      }
    : {
        heading: "More projects from GitHub",
        description: "Browse the rest of my public repositories.",
        search: "Search other GitHub projects",
        placeholder: "Search projects or technologies",
        loading: "Loading other projects…",
        error: "GitHub projects could not be loaded right now.",
        fallback: "The featured projects above are still available; you can also browse the GitHub profile directly.",
        visit: "Visit GitHub",
        none: "No additional public projects are available yet.",
        noMatch: "No projects match your search.",
        noDescription: "No description has been added for this project yet.",
        demo: "Live demo",
        source: "Source",
      };

  useEffect(() => {
    const controller = new AbortController();
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_REPOS_URL, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
        const data = await response.json();
        setRepos(Array.isArray(data) ? data : []);
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Unable to load GitHub repositories:", error);
          setStatus("error");
        }
      }
    };
    fetchRepos();
    return () => controller.abort();
  }, []);

  const otherRepos = useMemo(
    () => repos.filter((repo) => !FEATURED_PROJECT_NAMES.has(repo.name.toLowerCase())),
    [repos]
  );
  const filteredRepos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return otherRepos;
    return otherRepos.filter((repo) =>
      [repo.name, repo.description, repo.language]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedQuery))
    );
  }, [otherRepos, query]);

  return (
    <section className="container mx-auto border-t border-white/10 px-4 py-12 sm:px-6" aria-labelledby="more-projects-heading">
      <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="more-projects-heading" className="text-center text-2xl font-bold sm:text-left sm:text-3xl">{text.heading}</h2>
          <p className="mt-2 text-center text-sm text-white/65 sm:text-left">{text.description}</p>
        </div>
        <label className="w-full sm:max-w-xs">
          <span className="sr-only">{text.search}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={text.placeholder}
            className="w-full rounded-lg border border-white/15 bg-[#232329] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/50"
          />
        </label>
      </div>

      {status === "loading" && <p className="py-12 text-center text-white/70" role="status">{text.loading}</p>}
      {status === "error" && (
        <div className="mx-auto max-w-xl rounded-xl border border-white/10 bg-[#232329] p-6 text-center" role="alert">
          <p className="font-semibold">{text.error}</p>
          <p className="mt-2 text-sm text-white/65">{text.fallback}</p>
          <a href="https://github.com/MohamedMahfouz2022" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
            <FaGithub aria-hidden="true" /> {text.visit}
          </a>
        </div>
      )}
      {status === "success" && filteredRepos.length === 0 && (
        <p className="py-12 text-center text-white/70" role="status">
          {otherRepos.length === 0 ? text.none : text.noMatch}
        </p>
      )}
      {status === "success" && filteredRepos.length > 0 && (
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {filteredRepos.map((repo, index) => (
            <motion.li
              key={repo.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, delay: prefersReducedMotion ? 0 : Math.min(index * 0.04, 0.24) }}
              className="min-w-0"
            >
              <article className="flex h-full min-h-56 flex-col rounded-xl border border-white/10 bg-[#232329] p-5 shadow transition-colors hover:border-accent/50">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="min-w-0 break-words text-lg font-semibold text-white">{repo.name}</h3>
                  {repo.language && <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs text-accent">{repo.language}</span>}
                </div>
                <p className="mb-5 flex-1 break-words text-sm leading-6 text-white/65">
                  {repo.description || text.noDescription}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-sm">
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="min-h-11 rounded py-2 text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                      {text.demo} <span className="sr-only">{repo.name}</span>
                    </a>
                  )}
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded py-2 text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                    <FaGithub aria-hidden="true" /> {text.source} <span className="sr-only">{repo.name}</span>
                  </a>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Repos;
