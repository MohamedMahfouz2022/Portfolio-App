"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const GITHUB_REPOS_URL =
  "https://api.github.com/users/MohamedMahfouz2022/repos?per_page=100&sort=updated";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();

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

  const filteredRepos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return repos;
    return repos.filter((repo) =>
      [repo.name, repo.description, repo.language]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedQuery))
    );
  }, [query, repos]);

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6" aria-labelledby="projects-heading">
      <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 id="projects-heading" className="text-center text-2xl font-bold sm:text-left sm:text-3xl">My GitHub Projects</h1>
          <p className="mt-2 text-center text-sm text-white/65 sm:text-left">Explore my latest work and the technologies behind it.</p>
        </div>
        <label className="w-full sm:max-w-xs">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or technologies"
            className="w-full rounded-lg border border-white/15 bg-[#232329] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/50"
          />
        </label>
      </div>

      {status === "loading" && <p className="py-12 text-center text-white/70" role="status">Loading projects…</p>}
      {status === "error" && (
        <div className="mx-auto max-w-xl rounded-xl border border-white/10 bg-[#232329] p-6 text-center" role="alert">
          <p className="font-semibold">Projects could not be loaded right now.</p>
          <p className="mt-2 text-sm text-white/65">Please try again later or browse the GitHub profile directly.</p>
          <a href="https://github.com/MohamedMahfouz2022" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
            <FaGithub aria-hidden="true" /> Visit GitHub
          </a>
        </div>
      )}
      {status === "success" && filteredRepos.length === 0 && (
        <p className="py-12 text-center text-white/70" role="status">
          {repos.length === 0 ? "No public projects are available yet." : "No projects match your search."}
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
                  <h2 className="min-w-0 break-words text-lg font-semibold text-white">{repo.name}</h2>
                  {repo.language && <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs text-accent">{repo.language}</span>}
                </div>
                <p className="mb-5 flex-1 break-words text-sm leading-6 text-white/65">
                  {repo.description || "No description has been added for this project yet."}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-sm">
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="rounded text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                      Live demo <span className="sr-only">for {repo.name}</span>
                    </a>
                  )}
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                    <FaGithub aria-hidden="true" /> Source <span className="sr-only">for {repo.name}</span>
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
