"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  FileText,
  GraduationCap,
  BookOpen,
  Briefcase,
  Layers,
  ExternalLink,
  CircleUserRound,
} from "lucide-react";
import { motion } from "framer-motion";

// === Editable profile data ===
const PROFILE = {
  name: "Kaicheng (Kevin) Guo",
  title: "CS & Applied Math @ Brown | RL + Representation Learning",
  emailDisplay: "kaicheng guo@brown.edu", // kept exactly as in CV — update if needed
  emailHref: "mailto:kaicheng%20guo@brown.edu",
  phone: "(401) 259-4369",
  location: "Providence, RI, USA",
  status: "US Permanent Resident (Green Card)",
  headshot: "/headshot.jpg", // replace with your uploaded image name in the repo (e.g., headshot.jpg)
  cvPath: "/Kaicheng_Guo_CV.pdf", // place your CV at the project root with this filename
  socials: [
    // { label: "Google Scholar", href: "#" },
    // { label: "Twitter", href: "#" },
    // { label: "GitHub", href: "#" },
  ],
};

const EDUCATION = [
  {
    school: "Brown University",
    degree: "B.S. in Computer Science & Applied Mathematics (Honors)",
    time: "Sept 2022 – May 2026",
    details: [
      "Overall GPA: 3.92/4.00",
      "Selected courses: Robust Algorithms for ML, Deep Learning, Computer Vision, Optimization, Learning & Sequential Decision Making, Systems for ML, Probabilistic Methods in CS, Functional Analysis, PDE, Honors Statistical Inference, Graph Theory, Abstract Algebra",
    ],
  },
];

const PUBLICATIONS = [
  {
    title:
      "Spectral Collapse Drives Loss of Plasticity in Deep Continual Learning",
    authors:
      "Naicheng He*, Kaicheng Guo*, Arjun Prakash*, Saket Tiwari, Tyrone Serapio, Ruo Yu Tao, Amy Greenwald, George Konidaris",
    venue: "Under review at ICLR 2026 (2025)",
    links: [{ label: "Paper (placeholder)", href: "#" }],
    badges: ["Continual Learning", "Optimization", "Hessian"],
  },
  {
    title:
      "Benchmarking Partial Observability in RL with a Suite of Memory‑Improvable Domains",
    authors: "Ruo Yu Tao*, Kaicheng Guo*, Cameron Allen, George Konidaris",
    venue: "Reinforcement Learning Conference (RLC 2025)",
    links: [
      // If you have a public link, add here
    ],
    badges: ["Partial Observability", "Benchmarks", "JAX"],
  },
  {
    title:
      "Mitigating Loss of Plasticity by Preventing Hessian Spectral Collapse",
    authors:
      "Naicheng He*, Kaicheng Guo*, Arjun Prakash*, Saket Tiwari, Tyrone Serapio, Ruo Yu Tao, Amy Greenwald, George Konidaris",
    venue: "NeurIPS 2025 Workshop on ARLET",
    links: [
      // If you have a public link, add here
    ],
    badges: ["Workshop", "Hessian", "Plasticity"],
  },
  {
    title: "RNNs as Superior Function Approximators",
    authors: "Kaicheng Guo, George Konidaris",
    venue: "Preprint / Ongoing (2024–)",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2509.22335" },
      {
        label: "OpenReview",
        href: "https://openreview.net/forum?id=HUTCbYOW5E",
      },
    ],
    badges: ["RNN", "Function Approximation", "Theory"],
  },
];

const RESEARCH = [
  {
    project: "Exploration in POMDPs (In Progress)",
    org: "Brown University",
    time: "Apr 2025 – Present",
    bullets: [
      "Investigating exploration strategies in partially observable domains using memory traces.",
      "Trajectory‑level exploration methods that handle unobserved states.",
    ],
  },
  {
    project: "RNNs as Superior Function Approximators",
    org: "Brown University",
    time: "May 2024 – Present",
    bullets: [
      "RNNs outperform MLPs in fully observable environments via lower approximation error.",
      "Proposed RNN‑Skip: removes recurrence while preserving benefits of RNN representations.",
    ],
  },
  {
    project:
      "Benchmarking Partial Observability in RL with a Suite of Memory‑Improvable Domains",
    org: "Brown University",
    time: "Dec 2024 – Feb 2025",
    bullets: [
      "Introduced POBAX (Partially Observable Benchmarks in JAX) for standardized evaluation.",
      "Characterized types of partial observability; curated representative tasks and best‑practice guidelines.",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Research Intern: RL for Manipulation in Unknown Environments",
    org: "Robotics Institute, Carnegie Mellon University (PI: Maxim Likhachev)",
    time: "May 2025 – Jul 2025",
    bullets: [
      "Designed a manipulation framework under complete visual occlusion using tactile + proprioception only.",
      "Enabled actions on target objects without visual input for robust real‑world systems.",
    ],
  },
];

const TEACHING = [
  {
    course: "CS2951F: Learning and Sequential Decision Making (Graduate)",
    org: "Brown University",
    time: "Fall 2025",
  },
  {
    course: "APMA1200: Operations Research",
    org: "Brown University",
    time: "Spring 2025",
  },
];

const SKILLS = [
  "Python",
  "JAX",
  "TensorFlow",
  "MATLAB",
  "Java",
  "React Native",
  "Reinforcement Learning",
  "Optimization",
  "Computer Vision",
];

const HOBBIES = ["Sailing", "Long‑distance Swimming", "Basketball"];

// === UI helpers ===
const Section = ({ icon: Icon, title, children }: any) => (
  <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
    <div className="flex items-center gap-3 mb-5">
      <Icon className="w-5 h-5" />
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }: any) => (
  <Badge className="rounded-2xl px-3 py-1 text-sm">{children}</Badge>
);

// === Page ===
export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header / Hero */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            src={PROFILE.headshot}
            alt={`${PROFILE.name} headshot`}
            className="w-28 h-28 rounded-2xl object-cover shadow"
          />
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl font-bold tracking-tight"
            >
              {PROFILE.name}
            </motion.h1>
            <p className="mt-1 text-slate-600">{PROFILE.title}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <span className="inline-flex items-center gap-1">
                <Mail className="w-4 h-4" /> {PROFILE.emailDisplay}
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <CircleUserRound className="w-4 h-4" /> {PROFILE.status}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild size="sm" className="rounded-2xl">
                <a href={PROFILE.emailHref}>Email me</a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="rounded-2xl"
              >
                <a href={PROFILE.cvPath} target="_blank" rel="noreferrer">
                  <FileText className="w-4 h-4 mr-1" /> CV
                </a>
              </Button>
              {/* Optional social links */}
              {PROFILE.socials.map((s) => (
                <Button
                  key={s.label}
                  asChild
                  size="sm"
                  variant="ghost"
                  className="rounded-2xl"
                >
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label} <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Education */}
      <Section icon={GraduationCap} title="Education">
        <div className="grid gap-4">
          {EDUCATION.map((e) => (
            <Card key={e.school} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{e.school}</h3>
                    <p className="text-sm text-slate-600">{e.degree}</p>
                  </div>
                  <div className="text-sm text-slate-600">{e.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {e.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section icon={BookOpen} title="Publications & Preprints">
        <div className="grid gap-4">
          {PUBLICATIONS.map((p, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-5">
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{p.authors}</p>
                <p className="mt-1 text-sm text-slate-600">{p.venue}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <Pill key={b}>{b}</Pill>
                  ))}
                </div>
                {!!p.links?.length && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <Button
                        key={l.href}
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-2xl"
                      >
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center"
                        >
                          {l.label} <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Research */}
      <Section icon={Layers} title="Research">
        <div className="grid gap-4">
          {RESEARCH.map((r, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{r.project}</h3>
                    <p className="text-sm text-slate-600">{r.org}</p>
                  </div>
                  <div className="text-sm text-slate-600">{r.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {r.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section icon={Briefcase} title="Experience">
        <div className="grid gap-4">
          {EXPERIENCE.map((x, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{x.role}</h3>
                    <p className="text-sm text-slate-600">{x.org}</p>
                  </div>
                  <div className="text-sm text-slate-600">{x.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {x.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Teaching */}
      <Section icon={BookOpen} title="Teaching">
        <div className="grid gap-4">
          {TEACHING.map((t, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{t.course}</h3>
                    <p className="text-sm text-slate-600">{t.org}</p>
                  </div>
                  <div className="text-sm text-slate-600">{t.time}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills & Hobbies */}
      <Section icon={Github} title="Skills & Hobbies">
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {HOBBIES.map((h) => (
                  <Pill key={h}>{h}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-14">
        <Card className="rounded-2xl">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-700">
            <div className="flex flex-wrap items-center gap-3">
              <a className="inline-flex items-center" href={PROFILE.emailHref}>
                <Mail className="w-4 h-4 mr-1" /> Email
              </a>
              <span className="inline-flex items-center">
                <Phone className="w-4 h-4 mr-1" /> {PROFILE.phone}
              </span>
              <span className="inline-flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> {PROFILE.location}
              </span>
              <a
                className="inline-flex items-center"
                href={PROFILE.cvPath}
                target="_blank"
                rel="noreferrer"
              >
                <FileText className="w-4 h-4 mr-1" /> CV
              </a>
            </div>
            <div className="text-slate-500">
              © {new Date().getFullYear()} {PROFILE.name}
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
