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
  User,
} from "lucide-react";
import { motion } from "framer-motion";

// === Editable profile data ===
const PROFILE = {
  name: "Kaicheng (Kevin) Guo",
  title:
    "CS & Applied Math @ Brown | Reinforcement Learning, Continual Learning, Partial Observability",
  emailDisplay: "kaicheng_guo@brown.edu", // kept exactly as in CV — update if needed
  emailHref: "mailto:kaicheng%20_guo@brown.edu",
  phone: "(401) 259-4369",
  location: "Providence, RI, USA",
  headshot: "/headshot.jpg", // replace with your uploaded image name in the repo (e.g., headshot.jpg)
  cvPath: "/Kaicheng_Guo_CV.pdf", // place your CV at the project root with this filename
  socials: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=1WVyZK4AAAAJ&hl=en",
    },
    { label: "GitHub", href: "https://github.com/KevinGuo27" },
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
      "Naicheng He*, <strong>Kaicheng Guo</strong>*, Arjun Prakash*, Saket Tiwari, Ruo Yu Tao, Tyrone Serapio, Amy Greenwald, George Konidaris",
    venue: "Under review at ICLR 2026",
    abstract:
      "We investigate why deep neural networks suffer from loss of plasticity in deep continual learning, failing to learn new tasks without reinitializing parameters. We show that this failure is preceded by Hessian spectral collapse at new-task initialization, where meaningful curvature directions vanish and gradient descent becomes ineffective. To characterize the necessary condition for successful training, we introduce the notion of τ-trainability and show that current plasticity preserving algorithms can be unified under this framework. Targeting spectral collapse directly, we then discuss the Kronecker factored approximation of the Hessian, which motivates two regularization enhancements: maintaining high effective feature rank and applying L2 penalties. Experiments on continual supervised and reinforcement learning tasks confirm that combining these two regularizers effectively preserves plasticity.",
    image: "/spectral-collapse-visualization.jpg",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2509.22335" },
      { label: "PDF", href: "https://arxiv.org/pdf/2509.22335.pdf" },
    ],
    badges: [
      "Continual Learning",
      "Optimization",
      "Hessian",
      "Spectral Analysis",
    ],
  },
  {
    title:
      "Benchmarking Partial Observability in Reinforcement Learning with a Suite of Memory-Improvable Domains",
    authors:
      "Ruo Yu Tao*, <strong>Kaicheng Guo</strong>*, Cameron Allen, George Konidaris",
    venue: "Reinforcement Learning Conference (RLC 2025)",
    abstract:
      "Mitigating partial observability is a necessary but challenging task for general reinforcement learning algorithms. To improve an algorithm's ability to mitigate partial observability, researchers need comprehensive benchmarks to gauge progress. Most algorithms tackling partial observability are only evaluated on benchmarks with simple forms of state aliasing, such as feature masking and Gaussian noise. Such benchmarks do not represent the many forms of partial observability seen in real domains, like visual occlusion or unknown opponent intent. We argue that a partially observable benchmark should have two key properties. The first is coverage in its forms of partial observability, to ensure an algorithm's generalizability. The second is a large gap between the performance of agents with more or less state information, all other factors roughly equal. This gap implies that an environment is memory improvable: where performance gains in a domain are from an algorithm's ability to cope with partial observability as opposed to other factors. We introduce best-practice guidelines for empirically benchmarking reinforcement learning under partial observability, as well as the open-source library POBAX: Partially Observable Benchmarks in JAX.",
    image: "/pobax.jpg",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2508.00046" },
      { label: "PDF", href: "https://arxiv.org/pdf/2508.00046.pdf" },
    ],
    badges: ["Partial Observability", "Benchmarks", "JAX", "POBAX"],
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
            className="w-56 h-56 rounded-2xl object-cover shadow"
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
            </div>
            <div className="mt-4 text-sm text-slate-600 leading-relaxed">
              <p>
                I am a fourth year undergraduate student concentrated in
                Computer Science and Applied Mathematics at Brown University. I
                currently conduct research in the{" "}
                <a
                  href="http://irl.cs.brown.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Intelligent Robot Lab (IRL)
                </a>
                advised by{" "}
                <a
                  href="https://cs.brown.edu/people/gdk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Prof. George Konidaris
                </a>
                . My current research interest lies in continual learning and
                reinforcement learning in partially observable environments.
                Outside of research, I enjoy everything about
                science-fiction—favorites include Interstellar, Westworld, and
                The Three-Body Problem.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
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
      <Section icon={BookOpen} title="Publications">
        <div className="grid gap-4">
          {PUBLICATIONS.map((p, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-5">
                {p.image && (
                  <div className="mb-4">
                    {p.image.endsWith(".pdf") ? (
                      <embed
                        src={p.image}
                        type="application/pdf"
                        className="w-full max-w-2xl mx-auto rounded-lg shadow-sm"
                        style={{ height: "500px" }}
                      />
                    ) : (
                      <img
                        src={p.image}
                        alt={`${p.title} visualization`}
                        className="w-full max-w-2xl mx-auto rounded-lg shadow-sm"
                      />
                    )}
                  </div>
                )}
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                <p
                  className="mt-1 text-sm text-slate-700"
                  dangerouslySetInnerHTML={{ __html: p.authors }}
                ></p>
                <p className="mt-1 text-sm text-slate-600">{p.venue}</p>
                {p.abstract && (
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {p.abstract}
                  </p>
                )}
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
      <Section icon={BookOpen} title="Undergraduate Teaching Assistant">
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
