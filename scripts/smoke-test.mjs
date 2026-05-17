import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const required = [
  "POLEPROOF",
  "Wayne public proof slice",
  "Storm-ready Wayne packets",
  "Wayne County proof slice",
  "Public layers attached",
  "Click for links",
  "Public source links",
  "NOAA Storm Events",
  "https://www.ncei.noaa.gov/stormevents/",
  "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28",
  "https://sdmdataaccess.nrcs.usda.gov/Default.aspx",
  "https://apps.nationalmap.gov/downloader/",
  "https://earthexplorer.usgs.gov/",
  "https://overpass-turbo.eu/",
  "Audit-ready packets",
  "Estimated benefit",
  "Storm-ready crew list",
  "Find my area",
  "Detroit / Wayne County",
  "Planner test",
  "Pole-level unit",
  "Real public layers attached",
  "Synthetic demo estimate",
  "Needs DTE validation",
  "Scoring formula",
  "Validation plan",
  "Before-storm scenario",
  "NOAA storm history",
  "FEMA flood risk",
  "USDA soil/drainage",
  "USGS elevation/slope",
  "Plain-language reason",
  "What this means for me",
  "Crew packet",
  "Decision audit",
  "Guardrails and source manifest",
  "OpenStreetMap",
  "Export work packets CSV",
  "Export selected receipt JSON"
];

const missing = required.filter((needle) => !html.includes(needle));
if (missing.length) {
  throw new Error(`Missing expected app text: ${missing.join(", ")}`);
}

const banned = [
  "three.module.js",
  "THREE.WebGLRenderer",
  "riskDepthCanvas",
  "Open road Street View",
  "Street View road context",
  "Michigan PoleView",
  "Open Michigan PoleView",
  "Public + synthetic data"
];

const present = banned.filter((needle) => html.includes(needle));
if (present.length) {
  throw new Error(`Found removed feature text: ${present.join(", ")}`);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
if (!scripts.length) {
  throw new Error("No inline app script found.");
}

for (const script of scripts) {
  new Function(script);
}

console.log("PoleProof release smoke test passed.");
