/**
 * ELEVATES Chapters Pitch Deck — PPTX Generator
 * Run: node scripts/generate-pitch-pptx.mjs
 * Output: elevates-chapters-pitch-2026.pptx (project root)
 */

import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.33 × 7.5 inches

const C = {
  paper:    "F8FFF4",
  flame:    "F26430",
  graphite: "2D2D34",
  olive:    "5C6B2E",
  indigo:   "414066",
  white:    "FFFFFF",
};

function slide_bg(slide) {
  slide.background = { color: C.paper };
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.08, h: 7.5, fill: { color: C.flame }, line: { color: C.flame } });
  return slide;
}

function addTag(s, text, color = C.flame, x = 0.4, y = 0.32) {
  s.addText(text.toUpperCase(), { x, y, w: 2.8, h: 0.24, fontSize: 7, bold: true, fontFace: "Courier New", color: C.white, fill: { color }, align: "center", valign: "middle", margin: [2, 6, 2, 6] });
}

function addHeading(s, text, x = 0.4, y = 0.62, w = 9, size = 30) {
  s.addText(text, { x, y, w, h: 1.0, fontSize: size, bold: true, fontFace: "Arial Black", color: C.graphite, shrinkText: true });
}

function addSlideNum(s, n) {
  s.addText(String(n).padStart(2, "0"), { x: 11.5, y: 5.8, w: 1.8, h: 1.6, fontSize: 72, bold: true, fontFace: "Arial Black", color: C.graphite, transparency: 94, align: "right" });
}

function box(s, text, x, y, w, h, fill, tc = C.white, size = 10) {
  s.addText(text, { x, y, w, h, fontSize: size, bold: true, fontFace: "Courier New", color: tc, fill: { color: fill }, align: "center", valign: "middle", border: { type: "solid", color: C.graphite, pt: 1.5 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.8 } });
}

// ── 01 COVER ──────────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 1);
  s.addText("PITCH DECK · 2026", { x: 0.4, y: 0.28, w: 2.2, h: 0.28, fontSize: 8, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.flame }, align: "center", valign: "middle", rotate: -2 });
  s.addText("ELEVATES", { x: 0.4, y: 0.65, w: 7.5, h: 1.5, fontSize: 80, bold: true, fontFace: "Arial Black", color: C.graphite });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 2.25, w: 0.5, h: 0.04, fill: { color: C.flame }, line: { color: C.flame } });
  s.addText("CHAPTERS", { x: 1.0, y: 2.15, w: 3, h: 0.22, fontSize: 8, bold: true, fontFace: "Courier New", color: C.olive, charSpacing: 4 });
  s.addText("Building Kerala's Largest\nStudent Innovation Network", { x: 0.4, y: 2.5, w: 7.2, h: 0.9, fontSize: 20, bold: true, fontFace: "Arial", color: C.graphite });
  s.addText("A proven model from Ernad Knowledge City, now expanding across campuses.", { x: 0.4, y: 3.5, w: 7.2, h: 0.4, fontSize: 11, fontFace: "Arial", color: C.olive, italic: true });
  const tags = [{ t: "Student-Led", c: C.flame }, { t: "Open Community", c: C.indigo }, { t: "Project-Driven", c: C.olive }, { t: "Cluster-Based", c: C.graphite }];
  tags.forEach((tag, i) => s.addText(tag.t.toUpperCase(), { x: 0.4 + i * 1.95, y: 4.05, w: 1.85, h: 0.28, fontSize: 7, bold: true, fontFace: "Courier New", color: C.white, fill: { color: tag.c }, align: "center", valign: "middle" }));
  s.addShape(pptx.ShapeType.rect, { x: 9.2, y: 0.3, w: 3.8, h: 4.5, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 6, angle: 135 } });
  s.addText("📷 ELEVATES CAMPUS LAUNCH\nErnad Knowledge City", { x: 9.2, y: 0.3, w: 3.8, h: 3.8, fontSize: 9, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 9.2, y: 4.1, w: 3.8, h: 0.7, fill: { color: "111111" }, line: { color: "111111" } });
  s.addText("ELEVATES Campus Launch — Ernad Knowledge City", { x: 9.2, y: 4.12, w: 3.8, h: 0.66, fontSize: 7, fontFace: "Courier New", color: C.white, bold: true, align: "center", valign: "middle" });
}

// ── 02 THE PROBLEM ────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 2);
  addTag(s, "The Problem", C.indigo);
  s.addText("Every Campus Has\nHidden Talent.", { x: 0.4, y: 0.62, w: 7.8, h: 1.8, fontSize: 36, bold: true, fontFace: "Arial Black", color: C.graphite });
  s.addText("HIDDEN TALENT.", { x: 0.4, y: 1.42, w: 7.8, h: 0.85, fontSize: 36, bold: true, fontFace: "Arial Black", color: C.flame });
  s.addText("Every campus has students who…", { x: 0.4, y: 2.5, w: 7, h: 0.32, fontSize: 12, italic: true, fontFace: "Arial", color: C.olive });
  ["Have skills but lack confidence.", "Build quietly but never showcase their work.", "Want to learn but don't know where to start.", "Graduate without real project experience."].forEach((item, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 2.9 + i * 0.7, w: 7.5, h: 0.58, fill: { color: "E8EAF6" }, line: { color: "9FA8DA", pt: 1 } });
    s.addText(`—  ${item}`, { x: 0.55, y: 2.93 + i * 0.7, w: 7.2, h: 0.52, fontSize: 11, fontFace: "Arial", color: C.graphite, valign: "middle" });
  });
  s.addShape(pptx.ShapeType.line, { x: 0.4, y: 5.78, w: 7.5, h: 0, line: { color: C.graphite, pt: 1.5, dashType: "dash" } });
  s.addText("Talent isn't rare.  OPPORTUNITY IS.", { x: 0.4, y: 5.9, w: 7.5, h: 0.4, fontSize: 14, bold: true, fontFace: "Arial", color: C.graphite });
}

// ── 03 OUR MISSION ────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 3);
  addTag(s, "Our Mission", C.flame);
  addHeading(s, "Why Elevates Exists");
  const steps = [
    { l: "Hidden Talent", c: C.graphite }, { l: "Confidence", c: C.indigo },
    { l: "Skills", c: C.olive }, { l: "Projects", c: C.flame }, { l: "Industry Ready", c: C.graphite, dark: true },
  ];
  steps.forEach((st, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.55 + i * 0.82, w: 4.5, h: 0.62, fill: { color: st.dark ? C.graphite : "F9F9F9" }, line: { color: st.c, pt: 2 } });
    s.addText(st.l, { x: 0.4, y: 1.55 + i * 0.82, w: 4.5, h: 0.62, fontSize: 11, bold: true, fontFace: "Arial", color: st.dark ? C.white : st.c, align: "center", valign: "middle" });
    if (i < steps.length - 1) s.addText("↓", { x: 2.5, y: 2.14 + i * 0.82, w: 0.4, h: 0.18, fontSize: 10, color: st.c, align: "center", bold: true });
  });
  s.addText("We don't create talent.", { x: 5.3, y: 1.55, w: 7.8, h: 0.32, fontSize: 11, italic: true, fontFace: "Arial", color: C.graphite, transparency: 40 });
  [{ a: "Discover it.", i: "🔍", d: "We find students with untapped potential hiding in every classroom." },
   { a: "Nurture it.", i: "🌱", d: "We build structured pathways from curiosity to craft." },
   { a: "Showcase it.", i: "🚀", d: "We put real work in front of the world with full name credit." }].forEach((m, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 5.3, y: 1.95 + i * 1.5, w: 7.6, h: 1.35, fill: { color: C.paper }, line: { color: C.graphite, pt: 1.5 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.8 } });
    s.addText(m.i, { x: 5.35, y: 1.98 + i * 1.5, w: 0.55, h: 1.2, fontSize: 20, align: "center", valign: "middle" });
    s.addText(m.a, { x: 5.95, y: 2.03 + i * 1.5, w: 6.8, h: 0.35, fontSize: 11, bold: true, color: C.flame, fontFace: "Arial" });
    s.addText(m.d, { x: 5.95, y: 2.4 + i * 1.5, w: 6.8, h: 0.7, fontSize: 9, color: C.olive, fontFace: "Courier New" });
  });
}

// ── 04 DIFFERENTIATION ────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 4);
  addTag(s, "Differentiation", C.graphite);
  addHeading(s, "What Makes Elevates Different?", 0.4, 0.62, 12, 26);
  box(s, "TRADITIONAL CLUB", 0.5, 1.55, 5.5, 0.5, "DDDDDD", C.graphite, 10);
  ["Membership", "Committee", "Permissions", "Event", "Done"].forEach((t, i) => {
    s.addText(`❌  ${t}`, { x: 1.0, y: 2.18 + i * 0.65, w: 4.5, h: 0.5, fontSize: 10, fontFace: "Courier New", color: C.graphite, align: "center", valign: "middle", transparency: 40, strike: true });
    if (i < 4) s.addText("↓", { x: 3.0, y: 2.64 + i * 0.65, w: 0.5, h: 0.2, fontSize: 9, color: C.graphite, align: "center", transparency: 50 });
  });
  s.addShape(pptx.ShapeType.rect, { x: 6.8, y: 1.55, w: 5.8, h: 0.5, fill: { color: C.flame }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
  s.addText("ELEVATES", { x: 6.8, y: 1.55, w: 5.8, h: 0.5, fontSize: 10, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  ["Everyone", "Open Event", "Cluster", "Projects", "Leadership", "Next Gen"].forEach((t, i) => {
    const isC = t === "Cluster";
    s.addShape(pptx.ShapeType.rect, { x: 7.2, y: 2.18 + i * 0.62, w: 5.0, h: 0.5, fill: { color: isC ? C.flame : C.paper }, line: { color: C.flame, pt: 1.5 } });
    s.addText(`✔  ${t}`, { x: 7.2, y: 2.18 + i * 0.62, w: 5.0, h: 0.5, fontSize: 10, bold: true, fontFace: "Courier New", color: isC ? C.white : C.flame, align: "center", valign: "middle" });
    if (i < 5) s.addText("↓", { x: 9.5, y: 2.64 + i * 0.62, w: 0.4, h: 0.18, fontSize: 9, color: C.flame, align: "center" });
  });
}

// ── 05 OPEN COMMUNITY ─────────────────────────────────────────────────
{
  const s = pptx.addSlide(); addSlideNum(s, 5); s.background = { color: C.graphite };
  s.addText("COMMUNITY MODEL", { x: 4.5, y: 0.3, w: 4, h: 0.28, fontSize: 7, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.olive }, align: "center", valign: "middle" });
  s.addText("Everyone Is An\nELEVATES MEMBER.", { x: 1.5, y: 0.75, w: 10, h: 2.2, fontSize: 44, bold: true, fontFace: "Arial Black", color: C.white, align: "center" });
  s.addText("ELEVATES MEMBER.", { x: 1.5, y: 1.65, w: 10, h: 1.2, fontSize: 44, bold: true, fontFace: "Arial Black", color: C.flame, align: "center" });
  ["Any Department", "Any Year", "Join Anytime", "No Membership Fee", "No Prior Experience", "No Restrictions"].forEach((r, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    s.addShape(pptx.ShapeType.rect, { x: 2.5 + col * 2.8, y: 3.1 + row * 0.8, w: 2.6, h: 0.68, fill: { color: "FFFFFF", transparency: 88 }, line: { color: C.white, pt: 1, transparency: 60 } });
    s.addText(`✔  ${r}`, { x: 2.5 + col * 2.8, y: 3.1 + row * 0.8, w: 2.6, h: 0.68, fontSize: 9, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  });
  s.addText("Innovation belongs to everyone.", { x: 1.5, y: 4.82, w: 10, h: 0.5, fontSize: 16, italic: true, fontFace: "Arial", color: C.flame, align: "center" });
}

// ── 06 MULTI-DISCIPLINARY ─────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 6);
  addTag(s, "Scope", C.indigo);
  addHeading(s, "Technology Has No Department", 0.4, 0.62, 12, 26);
  s.addText("Elevates is not just for Computer Science. We promote innovation across every discipline.", { x: 0.4, y: 1.48, w: 12.5, h: 0.35, fontSize: 10, fontFace: "Arial", color: C.graphite, transparency: 30 });
  ["📈 Digital Marketing", "📐 Civil & Surveying", "🛠️ Hardware & IoT", "🤖 AI & Automation", "🔐 Cybersecurity", "⚡ Workflow Tech"].forEach((d, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + col * 4.2, y: 1.95 + row * 1.95, w: 4.0, h: 1.75, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.8 } });
    s.addText(d, { x: 0.4 + col * 4.2, y: 1.95 + row * 1.95, w: 4.0, h: 1.75, fontSize: 11, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 5.82, w: 12.5, h: 0.45, fill: { color: C.graphite }, line: { color: C.graphite }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135, opacity: 0.9 } });
  s.addText("TECHNOLOGY × EVERY DISCIPLINE", { x: 0.4, y: 5.82, w: 12.5, h: 0.45, fontSize: 11, bold: true, fontFace: "Courier New", color: C.flame, align: "center", valign: "middle" });
}

// ── 07 HOW IT WORKS ───────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 7);
  addTag(s, "The System", C.flame);
  addHeading(s, "How Elevates Works", 0.4, 0.62, 9, 28);
  const steps = [
    { step: "ALL STUDENTS", note: "Everyone on campus", hl: false },
    { step: "OPEN EVENTS", note: "Free, open, no restrictions", hl: false },
    { step: "HANDS-ON WORKSHOP", note: "Build real things together", hl: false },
    { step: "CHALLENGE", note: "Test curiosity & commitment", hl: false },
    { step: "⭐ CLUSTER", note: "Identified, focused, mentored", hl: true },
    { step: "ADVANCED LEARNING", note: "Structured, expert-led", hl: false },
    { step: "PROJECTS", note: "Real platforms, real users", hl: false },
    { step: "LEADERSHIP", note: "Become the next guide", hl: false },
    { step: "INDUSTRY READY", note: "Portfolio · Skills · Network", hl: false, last: true },
  ];
  steps.forEach((item, i) => {
    const bg = item.hl ? C.flame : item.last ? C.graphite : C.paper;
    const tc = item.hl || item.last ? C.white : C.graphite;
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.52 + i * 0.57, w: 3.2, h: 0.48, fill: { color: bg }, line: { color: C.graphite, pt: 1.5 }, shadow: item.hl ? { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.9 } : undefined });
    s.addText(item.step, { x: 0.4, y: 1.52 + i * 0.57, w: 3.2, h: 0.48, fontSize: 8.5, bold: true, fontFace: "Courier New", color: tc, align: "center", valign: "middle" });
    s.addText(item.note, { x: 3.75, y: 1.57 + i * 0.57, w: 3.8, h: 0.38, fontSize: 8, fontFace: "Courier New", color: C.olive, valign: "middle" });
    if (i < steps.length - 1) s.addText("↓", { x: 1.6, y: 1.97 + i * 0.57, w: 0.8, h: 0.15, fontSize: 8, color: item.hl ? C.flame : C.graphite, align: "center", transparency: item.hl ? 0 : 60 });
  });
  [{ t: "The Turning Point", b: "Open attendance transitions into focused mentorship.", bg: C.paper, bc: C.flame, tc: C.flame },
   { t: "Core Rule", b: "Events are open.\nClusters are earned.", bg: C.graphite, bc: C.graphite, tc: C.white },
   { t: "The Result", b: "Students progress from passive learners to real project builders.", bg: C.paper, bc: C.olive, tc: C.graphite }].forEach((c, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 8.0, y: 1.52 + i * 1.87, w: 5.0, h: 1.72, fill: { color: c.bg }, line: { color: c.bc, pt: 2.5 } });
    s.addText(c.t, { x: 8.1, y: 1.6 + i * 1.87, w: 4.8, h: 0.36, fontSize: 10, bold: true, fontFace: "Arial", color: c.tc });
    s.addText(c.b, { x: 8.1, y: 1.98 + i * 1.87, w: 4.8, h: 1.0, fontSize: 9, fontFace: "Courier New", color: c.tc === C.white ? "CCCCCC" : C.graphite, wrap: true });
  });
}

// ── 08 WHY CLUSTERS MATTER ────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 8);
  addTag(s, "Secret Operating Engine", C.indigo);
  addHeading(s, "Why Clusters Matter", 0.4, 0.62, 12, 28);
  s.addText("Turning open workshop attendees into lifelong builders & mentors.", { x: 0.4, y: 1.55, w: 12.5, h: 0.35, fontSize: 11, italic: true, fontFace: "Arial", color: C.olive });
  [
    { step: "01. OPEN WORKSHOPS", action: "Attract Students", desc: "Open to all, zero restrictions.", bg: C.paper, tc: C.graphite, bc: C.graphite },
    { step: "02. ELEVATES CLUSTERS", action: "Identify Committed Learners", desc: "Curiosity, Commitment, Consistency, Problem Solving.", bg: "FFF3EE", tc: C.flame, bc: C.flame },
    { step: "03. REAL PROJECTS", action: "Create Production Builders", desc: "Deployed campus platforms & open source code.", bg: "EEEDF5", tc: C.indigo, bc: C.indigo },
    { step: "04. STUDENT LEADERSHIP", action: "Build Future Mentors", desc: "Builders become the next generation of guides.", bg: C.graphite, tc: C.white, bc: C.graphite },
  ].forEach((c, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + i * 3.2, y: 2.05, w: 3.0, h: 3.0, fill: { color: c.bg }, line: { color: c.bc, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.7 } });
    s.addText(c.step, { x: 0.5 + i * 3.2, y: 2.13, w: 2.8, h: 0.3, fontSize: 7, bold: true, fontFace: "Courier New", color: c.tc, transparency: 30 });
    s.addText(c.action, { x: 0.5 + i * 3.2, y: 2.48, w: 2.8, h: 0.55, fontSize: 11, bold: true, fontFace: "Arial", color: c.tc });
    s.addText(c.desc, { x: 0.5 + i * 3.2, y: 3.1, w: 2.8, h: 1.7, fontSize: 8.5, fontFace: "Courier New", color: c.tc, wrap: true, transparency: 20 });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 5.18, w: 12.5, h: 0.6, fill: { color: C.graphite }, line: { color: C.graphite }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135, opacity: 0.9 } });
  s.addText("💡  Key Difference: Without Clusters, workshops are just one-off events. Clusters turn curiosity into a self-sustaining innovation ecosystem.", { x: 0.55, y: 5.22, w: 12.2, h: 0.54, fontSize: 8.5, fontFace: "Courier New", color: C.white, bold: true, valign: "middle" });
}

// ── 09 CLUSTER SYSTEM ─────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 9);
  addTag(s, "Secret Sauce", C.flame);
  addHeading(s, "The Cluster System", 0.4, 0.62, 9, 28);
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.5, w: 2.8, h: 3.8, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
  s.addText("📷 OPEN WORKSHOP\n100+ Students", { x: 0.4, y: 1.5, w: 2.8, h: 3.8, fontSize: 9, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 3.4, y: 1.5, w: 2.8, h: 3.8, fill: { color: C.graphite }, line: { color: C.flame, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
  s.addText("📷 CLUSTER SESSION\nFocused Mentorship", { x: 3.4, y: 1.5, w: 2.8, h: 3.8, fontSize: 9, bold: true, fontFace: "Courier New", color: C.flame, align: "center", valign: "middle" });
  s.addText("CLUSTER", { x: 3.5, y: 1.62, w: 1.0, h: 0.28, fontSize: 7, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.flame }, align: "center", valign: "middle" });
  [{ title: "Every Workshop is Open", desc: "Everyone participates without restriction or prior prerequisites." },
   { title: "Identify Four Core Traits", desc: "Curiosity, Commitment, Consistency, Problem Solving." },
   { title: "Enter the Elevates Cluster", desc: "Selected students unlock advanced mentorship, projects, and leadership roles." }].forEach((p, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 6.5, y: 1.5 + i * 1.52, w: 6.5, h: 1.35, fill: { color: C.paper }, line: { color: C.graphite, pt: 1.5 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.8 } });
    s.addText(p.title, { x: 6.6, y: 1.58 + i * 1.52, w: 6.2, h: 0.36, fontSize: 10, bold: true, fontFace: "Arial", color: C.graphite });
    s.addText(p.desc, { x: 6.6, y: 1.96 + i * 1.52, w: 6.2, h: 0.72, fontSize: 9, fontFace: "Courier New", color: C.olive });
  });
  s.addShape(pptx.ShapeType.rect, { x: 6.5, y: 6.1, w: 6.5, h: 0.6, fill: { color: "EEF0F8" }, line: { color: C.indigo, pt: 3 } });
  s.addText("Second Chance Rule: Students not initially selected can still enter the Cluster. No hidden talent left behind.", { x: 6.6, y: 6.15, w: 6.2, h: 0.5, fontSize: 8.5, fontFace: "Courier New", color: C.indigo, valign: "middle" });
}

// ── 10 PROJECTS ───────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 10);
  addTag(s, "Proof of Work", C.flame);
  s.addText("We Don't Just Teach Technology.\nWE BUILD WITH IT.", { x: 0.4, y: 0.62, w: 12.5, h: 1.35, fontSize: 26, bold: true, fontFace: "Arial Black", color: C.graphite });
  s.addText("WE BUILD WITH IT.", { x: 0.4, y: 1.22, w: 7, h: 0.8, fontSize: 26, bold: true, fontFace: "Arial Black", color: C.flame });
  [
    { title: "BUILDING VIBRANIUM", sub: "Students coding the engine", badge: "REAL WORKSHOP", shadow: C.flame },
    { title: "VIBRANIUM SYSTEM", sub: "Tech Fest Platform Engine", badge: "400K+ REQS", shadow: C.graphite },
    { title: "AAROH PLATFORM", sub: "Arts Fest Engine", badge: "ARTS FEST", shadow: C.graphite },
  ].forEach((p, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + i * 4.3, y: 2.1, w: 4.0, h: 2.8, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: p.shadow, blur: 0, offset: 4, angle: 135, opacity: 0.9 } });
    s.addText(`📷\n${p.title}`, { x: 0.4 + i * 4.3, y: 2.1, w: 4.0, h: 2.15, fontSize: 10, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
    s.addText(p.badge, { x: 0.5 + i * 4.3, y: 2.2, w: 1.2, h: 0.25, fontSize: 6, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.flame }, align: "center", valign: "middle" });
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + i * 4.3, y: 4.25, w: 4.0, h: 0.65, fill: { color: C.graphite }, line: { color: C.graphite } });
    s.addText(p.title, { x: 0.45 + i * 4.3, y: 4.3, w: 3.9, h: 0.3, fontSize: 8, bold: true, fontFace: "Arial", color: C.white });
    s.addText(p.sub, { x: 0.45 + i * 4.3, y: 4.58, w: 3.9, h: 0.28, fontSize: 7, fontFace: "Courier New", color: "AAAAAA" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 5.05, w: 12.5, h: 0.55, fill: { color: "F5F5F5" }, line: { color: C.graphite, pt: 1.5 } });
  s.addText("Deployed Platforms:   ✔ Vibranium Tech Fest   ✔ Aaroh Arts Fest   ✔ Sports Management System   ✔ Elevates Platform", { x: 0.55, y: 5.08, w: 12.2, h: 0.49, fontSize: 8, bold: true, fontFace: "Courier New", color: C.graphite, valign: "middle" });
}

// ── 11 STARTED AT EKC ─────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 11);
  addTag(s, "Origin Story", C.olive);
  addHeading(s, "Elevates Isn't An Idea. It Already Happened.", 0.4, 0.62, 12, 22);
  s.addText("IT ALREADY HAPPENED.", { x: 5.15, y: 0.62, w: 7, h: 0.9, fontSize: 22, bold: true, fontFace: "Arial Black", color: C.flame });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.55, w: 3.5, h: 2.6, fill: { color: C.graphite }, line: { color: C.flame, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 6, angle: 135, opacity: 0.9 } });
  s.addText("📷 FOUNDING TEAM\nErnad Knowledge City\nManjeri, Malappuram", { x: 0.4, y: 1.55, w: 3.5, h: 2.1, fontSize: 9, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 4.2, w: 3.5, h: 3.0, fill: { color: C.graphite }, line: { color: C.graphite }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135 } });
  ["ELEVATES Founded", "→ First Workshop", "→ Cluster System Built", "→ 13+ Events", "→ Exec Selection", "→ Next Generation"].forEach((t, i) =>
    s.addText(t, { x: 0.55, y: 4.3 + i * 0.43, w: 3.2, h: 0.38, fontSize: 8, fontFace: "Courier New", color: t.startsWith("→") ? "AAAAAA" : C.flame, bold: !t.startsWith("→") })
  );
  s.addText("8 months. One campus. A student-led initiative that became EKC's most active innovation community.", { x: 4.2, y: 1.55, w: 8.8, h: 0.5, fontSize: 10, italic: true, fontFace: "Arial", color: C.olive });
  [{ v: "13+", l: "Events" }, { v: "8 mo", l: "To Scale" }, { v: "350+", l: "New Admissions" }, { v: "126", l: "Exec Applications" }, { v: "30", l: "Exec Members" }, { v: "2", l: "Events by New Team" }].forEach((stat, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    s.addShape(pptx.ShapeType.rect, { x: 4.2 + col * 3.0, y: 2.15 + row * 1.55, w: 2.8, h: 1.35, fill: { color: C.paper }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
    s.addText(stat.v, { x: 4.2 + col * 3.0, y: 2.22 + row * 1.55, w: 2.8, h: 0.68, fontSize: 24, bold: true, fontFace: "Arial Black", color: C.flame, align: "center" });
    s.addText(stat.l.toUpperCase(), { x: 4.2 + col * 3.0, y: 2.88 + row * 1.55, w: 2.8, h: 0.45, fontSize: 7, bold: true, fontFace: "Courier New", color: C.olive, align: "center" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 4.2, y: 5.38, w: 8.8, h: 0.62, fill: { color: "F0F4E4" }, line: { color: C.olive, pt: 3 } });
  s.addText('"Look what happened at EKC. Now imagine this at your campus."', { x: 4.35, y: 5.43, w: 8.5, h: 0.52, fontSize: 9, fontFace: "Arial", italic: true, color: C.graphite, valign: "middle" });
}

// ── 12 REAL IMPACT ────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 12);
  addTag(s, "Scale & Performance Proof", C.flame);
  addHeading(s, "400,000+ Requests. Built In 5 Days.", 0.4, 0.62, 12, 22);
  s.addText("BUILT IN 5 DAYS.", { x: 5.85, y: 0.62, w: 6.5, h: 0.9, fontSize: 22, bold: true, fontFace: "Arial Black", color: C.flame });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.45, w: 7.5, h: 5.3, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135 } });
  s.addText("VIBRANIUM TECH FEST", { x: 0.55, y: 1.62, w: 5, h: 0.3, fontSize: 8, bold: true, fontFace: "Courier New", color: C.flame });
  s.addText("REAL METRICS", { x: 5.6, y: 1.58, w: 1.8, h: 0.28, fontSize: 6.5, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.flame }, align: "center", valign: "middle" });
  s.addText("Campus Platform Scale", { x: 0.55, y: 1.92, w: 7.0, h: 0.36, fontSize: 14, bold: true, fontFace: "Arial", color: C.white });
  s.addText("400,000+", { x: 0.55, y: 2.35, w: 7.0, h: 1.3, fontSize: 56, bold: true, fontFace: "Arial Black", color: C.flame });
  s.addText("API REQUESTS IN 24 HOURS", { x: 0.55, y: 3.62, w: 7.0, h: 0.3, fontSize: 8, bold: true, fontFace: "Courier New", color: "AAAAAA", charSpacing: 2 });
  s.addShape(pptx.ShapeType.rect, { x: 0.55, y: 4.05, w: 7.1, h: 1.52, fill: { color: "111111" }, line: { color: "333333", pt: 1 } });
  s.addText("📊 Vibranium Analytics Dashboard", { x: 0.55, y: 4.05, w: 7.1, h: 1.52, fontSize: 9, fontFace: "Courier New", color: C.flame, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 0.55, y: 5.65, w: 7.1, h: 0.45, fill: { color: "FFFFFF", transparency: 92 }, line: { color: "FFFFFF", pt: 1, transparency: 80 } });
  s.addText("✔ Zero Agency Fees  ·  100% Student Built  ·  Zero Downtime", { x: 0.55, y: 5.67, w: 7.1, h: 0.41, fontSize: 8, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  [{ i: "⏱️", t: "Speed & Agility", b: "5 DAYS", d: "Built scratch to deployment — event registry, entry passes, volunteer QR scanners in under a week.", tc: C.flame },
   { i: "🎭", t: "Aaroh Arts Fest", b: "100+ EVENTS", d: "Real-time result tabulation, judge scoring, live campus leaderboard feeds.", tc: C.indigo },
   { i: "🏆", t: "Sports & Launch", b: "PAPERLESS", d: "Replaced physical tokens with digital entry passes and instant smartphone verification.", tc: C.graphite }].forEach((p, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 8.1, y: 1.45 + i * 1.8, w: 5.2, h: 1.65, fill: { color: C.paper }, line: { color: C.graphite, pt: 1.5 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135 } });
    s.addText(`${p.i}  ${p.t}`, { x: 8.2, y: 1.52 + i * 1.8, w: 3.5, h: 0.32, fontSize: 9, bold: true, fontFace: "Arial", color: p.tc });
    s.addText(p.b, { x: 11.4, y: 1.52 + i * 1.8, w: 1.7, h: 0.28, fontSize: 6.5, bold: true, fontFace: "Courier New", color: p.tc, fill: { color: p.tc === C.flame ? "FFF3EE" : p.tc === C.indigo ? "EEEDF5" : "EEEEEE" }, align: "center", valign: "middle" });
    s.addText(p.d, { x: 8.2, y: 1.9 + i * 1.8, w: 4.9, h: 1.05, fontSize: 8, fontFace: "Courier New", color: C.olive, wrap: true });
  });
}

// ── 13 LEADERSHIP PIPELINE ────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 13);
  addTag(s, "Leadership", C.indigo);
  addHeading(s, "Building Leaders, Not Just Events", 0.4, 0.62, 9, 24);
  s.addText("NOT JUST EVENTS", { x: 5.6, y: 0.62, w: 4, h: 0.9, fontSize: 24, bold: true, fontFace: "Arial Black", color: C.flame });
  [{ l: "126 Applications", w: 5.8, bg: "F0F0F0", tc: C.graphite }, { l: "80 Shortlisted", w: 4.6, bg: "EEEDF5", tc: C.indigo }, { l: "30 Selected", w: 3.5, bg: "FFF3EE", tc: C.flame }, { l: "Executive Team", w: 2.5, bg: C.flame, tc: C.white }].forEach((f, i) => {
    const x = 0.4 + (5.8 - f.w) / 2;
    s.addShape(pptx.ShapeType.rect, { x, y: 1.7 + i * 1.05, w: f.w, h: 0.82, fill: { color: f.bg }, line: { color: f.tc, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 2, angle: 135, opacity: 0.5 } });
    s.addText(f.l, { x, y: 1.7 + i * 1.05, w: f.w, h: 0.82, fontSize: 11, bold: true, fontFace: "Arial", color: f.tc, align: "center", valign: "middle" });
    if (i < 3) s.addText("▼", { x: 0.4 + (5.8 - 0.5) / 2, y: 2.48 + i * 1.05, w: 0.5, h: 0.22, fontSize: 8, color: C.graphite, align: "center" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 5.98, w: 5.8, h: 0.72, fill: { color: "EEF0F8" }, line: { color: C.indigo, pt: 2.5 } });
  s.addText("Succession Proof: New Exec Team independently ran 2 events. Elevates continues beyond its founding team.", { x: 0.55, y: 6.03, w: 5.55, h: 0.62, fontSize: 8, fontFace: "Arial", color: C.indigo, valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 6.7, y: 1.6, w: 6.0, h: 2.3, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
  s.addText("📷 SELECTION PROOF\n126+ Registrations", { x: 6.7, y: 1.6, w: 6.0, h: 1.9, fontSize: 10, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 6.7, y: 4.05, w: 6.0, h: 2.65, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
  s.addText("📷 2026–27 EXECUTIVE TEAM\nIndependent Events", { x: 6.7, y: 4.05, w: 6.0, h: 2.3, fontSize: 10, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
}

// ── 14 INDUSTRY SESSIONS ──────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 14);
  addTag(s, "Industry Exposure", C.graphite);
  addHeading(s, "Learning Beyond The Classroom", 0.4, 0.62, 9, 24);
  s.addText("THE CLASSROOM", { x: 5.3, y: 0.62, w: 5, h: 0.9, fontSize: 24, bold: true, fontFace: "Arial Black", color: C.flame });
  s.addText("Students learn directly from industry professionals & ecosystem leaders — real sessions, real interaction.", { x: 0.4, y: 1.5, w: 12.5, h: 0.38, fontSize: 10, fontFace: "Arial", color: C.graphite, transparency: 30 });
  [{ n: "Jobin · Brototype", r: "Vibe Coding Workshop", b: "REAL SESSION" }, { n: "Shiju Roy", r: "LinkedIn Top Voice · Speaker", b: "REAL SESSION" }, { n: "Shibili Rahman KP", r: "Founder & Chairman, RAC GLOBAL", b: "CHIEF GUEST" }, { n: "Mehar MP", r: "Co-founder & CEO, TinkerHub", b: "CHIEF GUEST" }].forEach((g, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + i * 3.2, y: 2.0, w: 2.9, h: 4.1, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
    s.addText(`📷\n${g.n}`, { x: 0.4 + i * 3.2, y: 2.0, w: 2.9, h: 3.3, fontSize: 9, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
    s.addText(g.b, { x: 0.5 + i * 3.2, y: 2.1, w: 1.3, h: 0.25, fontSize: 6, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.flame }, align: "center", valign: "middle" });
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + i * 3.2, y: 5.3, w: 2.9, h: 0.8, fill: { color: "111111" }, line: { color: "111111" } });
    s.addText(g.n, { x: 0.45 + i * 3.2, y: 5.35, w: 2.8, h: 0.32, fontSize: 8, bold: true, fontFace: "Arial", color: C.white });
    s.addText(g.r, { x: 0.45 + i * 3.2, y: 5.65, w: 2.8, h: 0.4, fontSize: 7, fontFace: "Courier New", color: "888888" });
  });
}

// ── 15 INSTITUTIONAL IMPACT ───────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 15);
  addTag(s, "Institutional Impact", C.olive);
  addHeading(s, "What Elevates Does For Institutions", 0.4, 0.62, 12, 22);
  s.addText("FOR INSTITUTIONS", { x: 7.55, y: 0.62, w: 5, h: 0.9, fontSize: 22, bold: true, fontFace: "Arial Black", color: C.flame });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.5, w: 4.0, h: 2.4, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135 } });
  s.addText("📷 EKC MAGAZINE FEATURE", { x: 0.4, y: 1.5, w: 4.0, h: 2.0, fontSize: 9, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  s.addText("EKC MAGAZINE FEATURE", { x: 0.5, y: 1.62, w: 1.8, h: 0.25, fontSize: 6, bold: true, fontFace: "Courier New", color: C.white, fill: { color: C.flame }, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 4.0, w: 4.0, h: 2.0, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 } });
  s.addText("EKC ADMISSIONS  ·  DURING SAME PERIOD", { x: 0.5, y: 4.07, w: 3.8, h: 0.28, fontSize: 7, bold: true, fontFace: "Courier New", color: C.flame });
  s.addText("350+", { x: 0.5, y: 4.38, w: 3.8, h: 0.75, fontSize: 36, bold: true, fontFace: "Arial Black", color: C.white });
  s.addText("New admissions welcomed", { x: 0.5, y: 5.0, w: 3.8, h: 0.3, fontSize: 8, fontFace: "Courier New", color: "AAAAAA" });
  s.addText("Many factors contribute. Elevates strengthened student engagement, innovation culture, and campus visibility.", { x: 0.5, y: 5.32, w: 3.8, h: 0.55, fontSize: 7, fontFace: "Courier New", color: "AAAAAA", wrap: true });
  [{ i: "🔥", l: "Innovation Culture", d: "Students build real things, not just attend classes" }, { i: "📈", l: "Engagement", d: "Consistent participation across departments" }, { i: "👑", l: "Student Leadership", d: "Students run the community, not faculty" }, { i: "🤝", l: "Industry Interaction", d: "Real sessions with real professionals" }, { i: "🌐", l: "Campus Visibility", d: "Student-built platforms showcase the college" }, { i: "💼", l: "Career Readiness", d: "Portfolio, projects, GitHub contributions" }].forEach((item, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    s.addShape(pptx.ShapeType.rect, { x: 4.7 + col * 4.1, y: 1.5 + row * 1.68, w: 3.9, h: 1.52, fill: { color: C.paper }, line: { color: C.graphite, pt: 1.5 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 2, angle: 135, opacity: 0.7 } });
    s.addText(`${item.i}  ${item.l}`, { x: 4.8 + col * 4.1, y: 1.58 + row * 1.68, w: 3.7, h: 0.38, fontSize: 10, bold: true, fontFace: "Arial", color: C.graphite });
    s.addText(item.d, { x: 4.8 + col * 4.1, y: 1.98 + row * 1.68, w: 3.7, h: 0.88, fontSize: 8.5, fontFace: "Courier New", color: C.olive });
  });
}

// ── 16 STUDENT LEADERSHIP MODEL ───────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 16);
  addTag(s, "Leadership Model", C.flame);
  addHeading(s, "Students Don't Just Participate. They Lead.", 0.4, 0.62, 12, 20);
  s.addText("THEY LEAD.", { x: 8.65, y: 0.62, w: 4, h: 0.9, fontSize: 20, bold: true, fontFace: "Arial Black", color: C.flame });
  ["Application", "↓ Screening", "↓ Interview", "↓ Executive Team", "↓ Lead Events", "↓ Mentor Clusters", "↓ Handover to Next"].forEach((step, i) => {
    const bg = i === 0 ? C.flame : i === 6 ? C.graphite : C.paper;
    const tc = i === 0 || i === 6 ? C.white : C.graphite;
    s.addShape(pptx.ShapeType.rect, { x: 1.5, y: 1.6 + i * 0.72, w: 5.2, h: 0.62, fill: { color: bg }, line: { color: i === 0 ? C.flame : C.graphite, pt: i === 0 ? 2 : 1 }, shadow: i === 0 ? { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.9 } : undefined });
    s.addText(step, { x: 1.5, y: 1.6 + i * 0.72, w: 5.2, h: 0.62, fontSize: 10, bold: true, fontFace: "Courier New", color: tc, align: "center", valign: "middle" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 6.65, w: 6.5, h: 0.58, fill: { color: "F0F4E4" }, line: { color: C.olive, pt: 2.5 } });
  s.addText("Every batch prepares the next. The 2026–27 team was trained by the 2025–26 founding team.", { x: 0.55, y: 6.7, w: 6.2, h: 0.5, fontSize: 9, fontFace: "Arial", color: C.graphite, valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 7.4, y: 1.6, w: 5.5, h: 2.6, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 5, angle: 135 } });
  s.addText("📷 EXECUTIVE SELECTION\nInterview & Selection Process", { x: 7.4, y: 1.6, w: 5.5, h: 2.2, fontSize: 10, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 7.4, y: 4.35, w: 5.5, h: 2.55, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 4, angle: 135 } });
  s.addText("📷 2026–27 EXECUTIVE TEAM", { x: 7.4, y: 4.35, w: 5.5, h: 2.2, fontSize: 10, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
}

// ── 17 CHAPTER STRUCTURE ──────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 17);
  addTag(s, "Structure", C.flame);
  addHeading(s, "Campus Chapter Structure", 0.4, 0.62, 9, 28);
  [{ l: "🏛️  ELEVATES HQ", bg: C.graphite, tc: C.white, sh: C.flame }, { l: "⚡  CAMPUS EXECUTIVE TEAM", bg: C.flame, tc: C.white, sh: C.graphite }, { l: "👥  CLASS-WISE REPRESENTATIVES", bg: C.indigo, tc: C.white, sh: C.graphite }, { l: "🎓  ALL STUDENTS", bg: C.paper, tc: C.graphite, sh: C.graphite }].forEach((n, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 1.0, y: 1.55 + i * 1.18, w: 7.5, h: 0.95, fill: { color: n.bg }, line: { color: n.bg, pt: 2 }, shadow: { type: "outer", color: n.sh, blur: 0, offset: 4, angle: 135, opacity: 0.9 } });
    s.addText(n.l, { x: 1.0, y: 1.55 + i * 1.18, w: 7.5, h: 0.95, fontSize: 12, bold: true, fontFace: "Arial", color: n.tc, align: "center", valign: "middle" });
    if (i < 3) s.addShape(pptx.ShapeType.line, { x: 4.75, y: 2.48 + i * 1.18, w: 0, h: 0.24, line: { color: C.graphite, pt: 2, transparency: 60 } });
  });
  s.addShape(pptx.ShapeType.rect, { x: 2.0, y: 6.28, w: 5.5, h: 0.6, fill: { color: "F0F4E4" }, line: { color: C.olive, pt: 2, dashType: "dash" } });
  s.addText("📋  FACULTY COORDINATOR — OPTIONAL", { x: 2.0, y: 6.3, w: 5.5, h: 0.56, fontSize: 9, bold: true, fontFace: "Courier New", color: C.olive, align: "center", valign: "middle" });
  [{ t: "Student leadership is essential.", b: "The community runs because students run it.", tc: C.flame, bg: "FFF3EE", bc: C.flame }, { t: "Faculty is optional.", b: "A faculty coordinator can support, but cannot replace student ownership.", tc: C.olive, bg: "F0F4E4", bc: C.olive }, { t: "Every class is represented.", b: "Class-wise reps ensure no department is left behind.", tc: C.indigo, bg: "EEF0F8", bc: C.indigo }].forEach((p, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 9.3, y: 1.55 + i * 1.75, w: 3.9, h: 1.6, fill: { color: p.bg }, line: { color: p.bc, pt: 3 } });
    s.addText(p.t, { x: 9.4, y: 1.63 + i * 1.75, w: 3.7, h: 0.38, fontSize: 10, bold: true, fontFace: "Arial", color: p.tc });
    s.addText(p.b, { x: 9.4, y: 2.03 + i * 1.75, w: 3.7, h: 0.95, fontSize: 8.5, fontFace: "Courier New", color: C.graphite });
  });
}

// ── 18 WHY IT WORKS ───────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 18);
  addTag(s, "Comparison", C.graphite);
  addHeading(s, "Why This Model Works", 0.4, 0.62, 9, 28);
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.5, w: 5.9, h: 5.75, fill: { color: C.paper }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 5, angle: 135 } });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.5, w: 5.9, h: 0.72, fill: { color: "DDDDDD" }, line: { color: C.graphite, pt: 2 } });
  s.addText("TRADITIONAL COLLEGE CLUB", { x: 0.4, y: 1.5, w: 5.9, h: 0.72, fontSize: 11, bold: true, fontFace: "Arial", color: C.graphite, align: "center", valign: "middle", transparency: 40 });
  ["Membership Fee Required", "Faculty-Heavy Approvals", "Infrequent One-off Events", "No Continuity / Single Term", "Zero Production Code Built"].forEach((t, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.55, y: 2.38 + i * 0.77, w: 5.6, h: 0.65, fill: { color: "F5F5F5" }, line: { color: "DDDDDD", pt: 1.5 } });
    s.addText(`❌  ${t}`, { x: 0.55, y: 2.38 + i * 0.77, w: 5.6, h: 0.65, fontSize: 10, fontFace: "Courier New", color: C.graphite, align: "center", valign: "middle", transparency: 40 });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.55, y: 6.23, w: 5.6, h: 0.5, fill: { color: "EEEEEE" }, line: { color: "CCCCCC", pt: 1 } });
  s.addText("CLOSED  ·  HIERARCHICAL  ·  INACTIVE", { x: 0.55, y: 6.25, w: 5.6, h: 0.46, fontSize: 8, bold: true, fontFace: "Courier New", color: C.graphite, align: "center", valign: "middle", transparency: 40 });
  s.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.5, w: 5.9, h: 5.75, fill: { color: C.paper }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 5, angle: 135 } });
  s.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.5, w: 5.9, h: 0.72, fill: { color: C.flame }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135 } });
  s.addText("ELEVATES CHAPTER MODEL", { x: 7.0, y: 1.5, w: 5.9, h: 0.72, fontSize: 11, bold: true, fontFace: "Arial", color: C.white, align: "center", valign: "middle" });
  ["100% Free & Open To All", "Student-Led Autonomy", "Cluster Mentorship System", "Real Production Platforms", "Self-Sustaining Next Gen"].forEach((t, i) => {
    const isC = i === 2;
    s.addShape(pptx.ShapeType.rect, { x: 7.15, y: 2.38 + i * 0.77, w: 5.6, h: 0.65, fill: { color: isC ? C.flame : C.paper }, line: { color: isC ? C.flame : C.graphite, pt: isC ? 2 : 1.5 }, shadow: isC ? { type: "outer", color: C.graphite, blur: 0, offset: 2, angle: 135 } : undefined });
    s.addText(`✔  ${t}`, { x: 7.15, y: 2.38 + i * 0.77, w: 5.6, h: 0.65, fontSize: 10, fontFace: "Courier New", color: isC ? C.white : C.graphite, bold: isC, align: "center", valign: "middle" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 7.15, y: 6.23, w: 5.6, h: 0.5, fill: { color: "FFF3EE" }, line: { color: C.flame, pt: 1 } });
  s.addText("OPEN  ·  SCALABLE  ·  SELF-SUSTAINING", { x: 7.15, y: 6.25, w: 5.6, h: 0.46, fontSize: 8, bold: true, fontFace: "Courier New", color: C.flame, align: "center", valign: "middle" });
}

// ── 19 STUDENT BENEFITS ───────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 19);
  addTag(s, "For Students", C.indigo);
  addHeading(s, "What Students Gain", 0.4, 0.62, 9, 28);
  s.addText("Real skills. Real projects. Real career proof.", { x: 0.4, y: 1.5, w: 9, h: 0.35, fontSize: 11, italic: true, fontFace: "Arial", color: C.olive });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 2.0, w: 3.5, h: 5.0, fill: { color: C.graphite }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 8, angle: 135 } });
  ["BUILD", "LEAD", "NETWORK", "SHOWCASE"].forEach((w, i) =>
    s.addText(w, { x: 0.4, y: 2.0 + i * 1.2, w: 3.5, h: 1.1, fontSize: 26, bold: true, fontFace: "Arial Black", color: i === 0 ? C.flame : C.white, align: "center", valign: "middle", charSpacing: 4 })
  );
  [{ l: "Practical Skills", c: C.flame }, { l: "Project Portfolio", c: C.indigo }, { l: "Real Platforms", c: C.olive }, { l: "GitHub Contributions", c: C.graphite }, { l: "Leadership Experience", c: C.graphite }, { l: "Industry Exposure", c: C.flame }, { l: "Communication", c: C.indigo }, { l: "Professional Network", c: C.olive }, { l: "Startup Mindset", c: C.graphite }, { l: "Career Readiness", c: C.flame }].forEach((sk, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    s.addShape(pptx.ShapeType.rect, { x: 4.2 + col * 4.5, y: 2.0 + row * 0.98, w: 4.3, h: 0.85, fill: { color: C.paper }, line: { color: sk.c, pt: 2 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.8 } });
    s.addText(sk.l, { x: 4.3 + col * 4.5, y: 2.0 + row * 0.98, w: 4.1, h: 0.85, fontSize: 10, bold: true, fontFace: "Courier New", color: sk.c, align: "center", valign: "middle" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 4.2, y: 6.92, w: 8.8, h: 0.5, fill: { color: C.graphite }, line: { color: C.graphite }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135 } });
  s.addText("Confidence · Career · Community — Students graduate with REAL PROOF, not just a certificate.", { x: 4.35, y: 6.95, w: 8.5, h: 0.44, fontSize: 8.5, bold: true, fontFace: "Courier New", color: C.flame, valign: "middle" });
}

// ── 20 INSTITUTION BENEFITS ───────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 20);
  addTag(s, "For Institutions", C.olive);
  addHeading(s, "What Institutions Gain", 0.4, 0.62, 9, 28);
  [{ i: "🔥", l: "Innovation Culture", d: "Students build real software, not just attend classes" }, { i: "📈", l: "Active Engagement", d: "Consistent cross-department participation" }, { i: "👑", l: "Student Leadership", d: "Self-sustaining, student-managed community" }, { i: "🤝", l: "Industry Interaction", d: "Direct access to tech founders & leaders" }, { i: "🌐", l: "Campus Visibility", d: "Student platforms showcased state-wide" }, { i: "💼", l: "Career Readiness", d: "Verifiable GitHub portfolios & projects" }, { i: "🏆", l: "OBE Outcomes", d: "Measurable outcome-based education growth" }, { i: "🎓", l: "Alumni Ecosystem", d: "Senior student mentors training juniors" }, { i: "📊", l: "Interdisciplinary", d: "CSE + Civil + ECE + all branches united" }].forEach((item, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    s.addShape(pptx.ShapeType.rect, { x: 0.4 + col * 4.3, y: 1.55 + row * 1.68, w: 4.1, h: 1.52, fill: { color: C.paper }, line: { color: C.graphite, pt: 1.5 }, shadow: { type: "outer", color: C.graphite, blur: 0, offset: 3, angle: 135, opacity: 0.8 } });
    s.addText(`${item.i}  ${item.l}`, { x: 0.5 + col * 4.3, y: 1.63 + row * 1.68, w: 3.9, h: 0.38, fontSize: 10, bold: true, fontFace: "Arial", color: C.graphite });
    s.addText(item.d, { x: 0.5 + col * 4.3, y: 2.03 + row * 1.68, w: 3.9, h: 0.88, fontSize: 8.5, fontFace: "Courier New", color: C.olive });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 6.58, w: 12.5, h: 0.55, fill: { color: C.graphite }, line: { color: C.graphite }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 4, angle: 135 } });
  s.addText("✔  Transforming campus culture from passive academics to active production software.", { x: 0.55, y: 6.61, w: 12.2, h: 0.49, fontSize: 9, bold: true, fontFace: "Courier New", color: C.flame, valign: "middle" });
}

// ── 21 CHAPTER KIT ────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 21);
  addTag(s, "HQ Support", C.flame);
  addHeading(s, "Every Chapter Receives This", 0.4, 0.62, 9, 26);
  s.addText("No chapter starts from scratch.", { x: 0.4, y: 1.5, w: 9, h: 0.35, fontSize: 11, italic: true, fontFace: "Arial", color: C.olive });
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.98, w: 4.5, h: 5.0, fill: { color: C.paper }, line: { color: C.graphite, pt: 2 }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 6, angle: 135 } });
  s.addText("📦\nCHAPTER KIT", { x: 0.4, y: 1.98, w: 4.5, h: 5.0, fontSize: 16, bold: true, fontFace: "Arial Black", color: C.graphite, align: "center", valign: "middle" });
  ["Brand Identity", "Operations Playbook", "Recruitment System", "Cluster Framework", "Event Templates", "Speaker Network", "Mentor Network", "Technical Support", "Website & Registration", "Design Assets", "Social Media Kit", "Documentation"].forEach((item, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    s.addShape(pptx.ShapeType.rect, { x: 5.3 + col * 4.0, y: 1.98 + row * 0.82, w: 3.8, h: 0.72, fill: { color: col % 2 === 0 ? "FFF3EE" : "EEF0F8" }, line: { color: C.graphite, pt: 1 } });
    s.addText(item, { x: 5.3 + col * 4.0, y: 1.98 + row * 0.82, w: 3.8, h: 0.72, fontSize: 8.5, bold: true, fontFace: "Courier New", color: C.graphite, align: "center", valign: "middle" });
  });
  s.addShape(pptx.ShapeType.rect, { x: 5.3, y: 6.88, w: 7.8, h: 0.5, fill: { color: C.graphite }, line: { color: C.graphite }, shadow: { type: "outer", color: C.flame, blur: 0, offset: 3, angle: 135 } });
  s.addText("No chapter starts from scratch. Everything is ready.", { x: 5.4, y: 6.91, w: 7.6, h: 0.44, fontSize: 9, bold: true, fontFace: "Courier New", color: C.flame, valign: "middle" });
}

// ── 22 VISION ─────────────────────────────────────────────────────────
{
  const s = slide_bg(pptx.addSlide()); addSlideNum(s, 22);
  addTag(s, "Our Vision", C.indigo);
  s.addText("From One Campus", { x: 0.4, y: 0.62, w: 12.5, h: 0.9, fontSize: 34, bold: true, fontFace: "Arial Black", color: C.graphite });
  s.addText("TO A NETWORK", { x: 0.4, y: 1.42, w: 12.5, h: 0.9, fontSize: 34, bold: true, fontFace: "Arial Black", color: C.flame });
  [{ l: "📍 Today: Ernad Knowledge City", w: 4.5, bg: C.paper, tc: C.graphite, sh: C.graphite }, { l: "→  Campus 2", w: 5.5, bg: "F0F0F0", tc: C.graphite, sh: C.graphite }, { l: "→  10 Campuses", w: 6.5, bg: C.olive, tc: C.white, sh: C.graphite }, { l: "→  50+ Campuses", w: 7.5, bg: C.indigo, tc: C.white, sh: C.graphite }, { l: "ELEVATES NETWORK — Kerala", w: 9.5, bg: C.graphite, tc: C.white, sh: C.flame }].forEach((n, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 2.5 + i * 0.9, w: n.w, h: 0.74, fill: { color: n.bg }, line: { color: n.bg === C.paper ? C.graphite : n.bg, pt: 2 }, shadow: { type: "outer", color: n.sh, blur: 0, offset: 4, angle: 135, opacity: 0.9 } });
    s.addText(n.l, { x: 0.4, y: 2.5 + i * 0.9, w: n.w, h: 0.74, fontSize: 11, bold: true, fontFace: "Arial", color: n.tc, valign: "middle", margin: [0, 12, 0, 12] });
    if (i < 4) s.addText("↓", { x: 0.4, y: 3.2 + i * 0.9, w: 0.5, h: 0.2, fontSize: 10, color: C.flame, bold: true });
  });
  s.addShape(pptx.ShapeType.rect, { x: 10.2, y: 1.5, w: 3.0, h: 5.5, fill: { color: "EEF0F8" }, line: { color: C.indigo, pt: 2 }, shadow: { type: "outer", color: C.indigo, blur: 0, offset: 6, angle: 135, opacity: 0.5 } });
  s.addText("🗺️\nKERALA CAMPUS\nNETWORK\nExpanding", { x: 10.2, y: 1.5, w: 3.0, h: 4.8, fontSize: 11, bold: true, fontFace: "Courier New", color: C.indigo, align: "center", valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 10.2, y: 6.3, w: 3.0, h: 0.7, fill: { color: C.indigo }, line: { color: C.indigo } });
  s.addText("Kerala Campus Network — Expanding", { x: 10.2, y: 6.32, w: 3.0, h: 0.66, fontSize: 7, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
}

// ── 23 CTA ────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide(); addSlideNum(s, 23); s.background = { color: C.graphite };
  s.addText("Your Campus Has Talent.", { x: 1.0, y: 1.0, w: 11, h: 1.5, fontSize: 42, bold: true, fontFace: "Arial Black", color: C.white, align: "center" });
  s.addText("LET'S ELEVATE IT.", { x: 1.0, y: 2.3, w: 11, h: 1.3, fontSize: 42, bold: true, fontFace: "Arial Black", color: C.flame, align: "center" });
  ["Let's Discover It.", "Let's Build It.", "Let's Showcase It."].forEach((line, i) =>
    s.addText(line, { x: 2.0, y: 3.78 + i * 0.56, w: 9, h: 0.5, fontSize: 14, italic: true, fontFace: "Arial", color: "CCCCCC", align: "center" })
  );
  s.addShape(pptx.ShapeType.rect, { x: 2.5, y: 5.28, w: 4.2, h: 1.5, fill: { color: "FFFFFF", transparency: 90 }, line: { color: C.white, pt: 1.5, transparency: 70 } });
  s.addText("Contact", { x: 2.6, y: 5.35, w: 4.0, h: 0.28, fontSize: 7, bold: true, fontFace: "Courier New", color: "AAAAAA" });
  s.addText("elevates.live", { x: 2.6, y: 5.63, w: 4.0, h: 0.38, fontSize: 14, bold: true, fontFace: "Arial", color: C.white });
  s.addText("hello@elevates.live", { x: 2.6, y: 5.98, w: 4.0, h: 0.3, fontSize: 10, fontFace: "Courier New", color: "AAAAAA" });
  s.addShape(pptx.ShapeType.rect, { x: 7.1, y: 5.28, w: 5.4, h: 1.5, fill: { color: C.flame }, line: { color: C.white, pt: 2 }, shadow: { type: "outer", color: "000000", blur: 0, offset: 4, angle: 135, opacity: 0.4 } });
  s.addText("BECOME AN\nELEVATES CHAPTER →", { x: 7.1, y: 5.28, w: 5.4, h: 1.5, fontSize: 13, bold: true, fontFace: "Courier New", color: C.white, align: "center", valign: "middle" });
}

// ── 24 CLOSING ────────────────────────────────────────────────────────
{
  const s = pptx.addSlide(); addSlideNum(s, 24); s.background = { color: C.graphite };
  s.addText("Every Campus Has", { x: 1.0, y: 1.3, w: 11, h: 1.2, fontSize: 44, bold: true, fontFace: "Arial Black", color: C.white, align: "center" });
  s.addText("HIDDEN TALENT.", { x: 1.0, y: 2.35, w: 11, h: 1.2, fontSize: 44, bold: true, fontFace: "Arial Black", color: C.flame, align: "center" });
  ["Let's Discover It.", "Let's Build It.", "Let's Showcase It."].forEach((line, i) =>
    s.addText(line, { x: 2.0, y: 3.78 + i * 0.6, w: 9, h: 0.55, fontSize: 15, italic: true, fontFace: "Arial", color: "BBBBBB", align: "center" })
  );
  s.addShape(pptx.ShapeType.rect, { x: 4.0, y: 5.52, w: 1.5, h: 0.06, fill: { color: C.flame }, line: { color: C.flame } });
  s.addText("ELEVATES", { x: 5.6, y: 5.3, w: 3.2, h: 0.45, fontSize: 22, bold: true, fontFace: "Arial Black", color: C.white, align: "center", charSpacing: 6 });
  s.addShape(pptx.ShapeType.rect, { x: 8.85, y: 5.52, w: 1.5, h: 0.06, fill: { color: C.flame }, line: { color: C.flame } });
  s.addText("elevates.live  ·  2026", { x: 3.0, y: 6.12, w: 7.5, h: 0.35, fontSize: 8, bold: true, fontFace: "Courier New", color: "444444", align: "center", charSpacing: 4 });
}

// ── Save ──────────────────────────────────────────────────────────────
pptx.writeFile({ fileName: "elevates-chapters-pitch-2026.pptx" })
  .then(() => console.log("\n✅  Saved: elevates-chapters-pitch-2026.pptx\n"))
  .catch(err => { console.error("❌ Error:", err); process.exit(1); });
