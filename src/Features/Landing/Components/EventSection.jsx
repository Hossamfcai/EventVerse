import {
  cardVariants,
  sectionVariants,
} from "../../../utils/constantsVariants";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MapPin, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function EventsSection({
  text,
  icon,
  headText,
  paragraph,
  sectionName,
}) {
  const navigate = useNavigate();
  return (
    <motion.section
      className="w-full py-space-xl bg-surface-container-lowest"
      id={sectionName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="max-w-[1360px] mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
              {icon}
              {text}
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mt-2">
              {headText}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              {paragraph}
            </p>
          </div>
          <a
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group"
            data-path="discover-events"
            onClick={() => {
              navigate("/Authentication/Login");
            }}
          >
            <span>View all 120+ events</span>
            <ArrowRight
              className="text-[18px] group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          <motion.article
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Ethereal live ambient electronic synthesizer concert at Berlin Kulturforum, laser reflections bouncing off Brutalist concrete architecture, soft ambient smoke, deep shadows."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXmQewgomsrcLzLQ0eg8CAcIk0T7wiWZfQlnXQ8yMgeEe1bSNB0f4BeQAXIId1n0iYj7MNfFvid1gTZL_TISh7mnAkh7Mx0Kd6t2P0W2r9tk5YwkHQcFPAK_VRuGQyKx9uxLNuAyZsutRXG_VOjLruLZOnCVj_ZiQIt8L4BR2LXpdRkKRvilDMuYyCklLar3lJGD58hrMMiyx5mqDa37eoEqTVyU73B2vlzlsTlzB3Xxbeq2nkcmeL')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

                <div className="absolute top-space-md left-space-md right-space-md flex items-center justify-between pointer-events-none">
                  <span className="pointer-events-auto bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                    Featured
                  </span>
                  <button
                    aria-label="Save Event"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary hover:bg-surface-container-lowest flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Heart aria-hidden="true" />
                  </button>
                </div>

                <div className="absolute bottom-space-md left-space-md text-on-primary flex items-center gap-1.5 font-label-sm text-label-sm">
                  <MapPin className="text-[16px]" aria-hidden="true" />
                  <span>Berlin Kulturforum, DE</span>
                </div>
              </div>

              <div className="p-space-lg">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
                  <span>Oct 24, 2025</span>
                  <span>•</span>
                  <span>19:30 CET</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                  Symphony of Lights: Ambient Electronic Live
                </h3>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  A spatial quadraphonic sound installation featuring premier
                  European ambient artists and synchronized geometric lighting.
                </p>
                <div className="mt-space-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-on-surface">
                    K
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface font-medium">
                    Klangwerk Collective
                  </span>
                </div>
              </div>
            </div>

            <div className="p-space-lg pt-space-md bg-surface-container-low/50 flex items-center justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">
                  Entry tier
                </span>
                <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  From $48
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/Authentication/Login");
                }}
                className="cursor-pointer font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-md py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Book Ticket</span>
                <Ticket className="text-[16px]" aria-hidden="true" />
              </button>
            </div>
          </motion.article>

          <motion.article
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Vast sunlit converted warehouse in Brooklyn Navy Yard with architectural physical maquettes, industrial steel beams, refined professionals discussing urban models, crisp editorial photo."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1yZzQ3pw2iTr1rsXULhSeZ7P5XBc0oto4HRpaph_KOpN63EDw86sRNOSdd6hbby4jm_A7DppsMSPe0Ug7jsDETK-AJE5pgKncGPMScCxmgNN0DUDnJmAZijIWnSdcYygTc76NhX_joHZgd89Mrv40pGegVtP9f2g76kU9WO8y9cQsart6MT8oRP3ZsqnfUnyXsAIhwo0a0Cc4mU7YupeMLcj-Xs1hgfbNRNKL5hyBhRzo6TEdQ1gw')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute top-space-md left-space-md right-space-md flex items-center justify-between pointer-events-none">
                  <span className="pointer-events-auto bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                    Featured
                  </span>
                  <button
                    aria-label="Save Event"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary hover:bg-surface-container-lowest flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Heart aria-hidden="true" />
                  </button>
                </div>
                <div className="absolute bottom-space-md left-space-md text-on-primary flex items-center gap-1.5 font-label-sm text-label-sm">
                  <MapPin className="text-[16px]" aria-hidden="true" />
                  <span>Brooklyn Navy Yard, NYC</span>
                </div>
              </div>

              <div className="p-space-lg">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
                  <span>Nov 12-14, 2025</span>
                  <span>•</span>
                  <span>3-Day Pass</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                  Global Architecture & Design Forum 2025
                </h3>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Three days of critical dialogue exploring regenerative
                  materials, public spaces, and computational structural design.
                </p>
                <div className="mt-space-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-on-surface">
                    A
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface font-medium">
                    ArchPulse Institute
                  </span>
                </div>
              </div>
            </div>

            <div className="p-space-lg pt-space-md bg-surface-container-low/50 flex items-center justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">
                  Delegate Pass
                </span>
                <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  From $185
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/Authentication/Login");
                }}
                className="cursor-pointer font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-md py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Book Ticket</span>
                <Ticket className="text-[16px]" aria-hidden="true" />
              </button>
            </div>
          </motion.article>

          <motion.article
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Intimate Nordic open-kitchen studio in Stockholm with brass and dark granite surfaces, chefs garnishing seasonal plates with delicate herbs under warm narrow spotlights."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLArSC0AalI38wI9tXFHmo3yb2bbLphs2rj77Qm7cpZmvfSP-RHCrfDG4UXrhILPhOkutgJZKUNvkgXjABlPG7qY7qj-jMzaj0BDbtXJ60Wi3bXuAAwp6zxMa7bZuUYqDh_mCWU5JgmHeZY8EAytg8mutU9mz1cJEDq0NTk2EOtXiX3zZ7utRsO3yThAsWW33pK6VkZtbrdaOnVEpzrpT3Z5cfB8XML0pPWnGgburbACYlgDc_I8Uz')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute top-space-md left-space-md right-space-md flex items-center justify-between pointer-events-none">
                  <span className="pointer-events-auto bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
                    Featured
                  </span>
                  <button
                    aria-label="Save Event"
                    className="pointer-events-auto w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary hover:bg-surface-container-lowest flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Heart aria-hidden="true" />
                  </button>
                </div>
                <div className="absolute bottom-space-md left-space-md text-on-primary flex items-center gap-1.5 font-label-sm text-label-sm">
                  <MapPin className="text-[16px]" aria-hidden="true" />
                  <span>Stockholm Food Lab, SE</span>
                </div>
              </div>

              <div className="p-space-lg">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
                  <span>Nov 02, 2025</span>
                  <span>•</span>
                  <span>20 Seats Only</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-secondary transition-colors">
                  Nordic Culinary Residency & Harvest Table
                </h3>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Ten-course seasonal foraging tasting menu paired with natural
                  biodynamic wines by Michelin-recognized guest culinarians.
                </p>
                <div className="mt-space-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-on-surface">
                    S
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface font-medium">
                    Atelier Sol
                  </span>
                </div>
              </div>
            </div>

            <div className="p-space-lg pt-space-md bg-surface-container-low/50 flex items-center justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">
                  Experience & Wine
                </span>
                <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  From $120
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/Authentication/Login");
                }}
                className="cursor-pointer font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-md py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Book Ticket</span>
                <Ticket className="text-[16px]" aria-hidden="true" />
              </button>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}
