"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { motion } from "motion/react";
import { Envelope, InstagramLogo, Lightning, MapPin, Medal, NavigationArrow, Phone, Scissors, Sparkle, Tag, Timer } from "@phosphor-icons/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { Reveal, Wrap, flipTheme, type Hours } from "@/components/kit";
import { Faq, HoursTable, MapFrame, useDark, useStatus } from "@/components/blocks";
import { T, useLang, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const TEL = "tel:+14323104111", PHONE = "(432) 310-4111";
const DIR = "https://www.google.com/maps/dir/?api=1&destination=17822+Davenport+Rd+Dallas+TX+75252";
const REVIEWS = "https://www.google.com/maps/search/?api=1&query=Tailoring+and+Alterations+Tanya+and+Michel+17822+Davenport+Rd+Dallas";
const img = (p: string) => (process.env.NEXT_PUBLIC_BASE ?? "") + "/images/" + p;
// Friday close is 3 PM or 6 PM depending on the listing; confirm.
const HOURS: Hours = { 0: null, 1: [10, 18], 2: [10, 18], 3: [10, 18], 4: [10, 18], 5: [10, 15], 6: null };
const WHY = [["w1", Medal], ["w2", Sparkle], ["w3", Tag], ["w4", Timer]] as const;

const btn = "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-[transform,background-color] duration-300 ease-spring hover:-translate-y-0.5 active:scale-[.97]";
const primary = cn(btn, "bg-brand text-btnfg shadow-[0_12px_28px_-14px_var(--brand)]");
const ghost = cn(btn, "bg-card text-ink shadow-[inset_0_0_0_1px_var(--line)]");
const eyebrow = "mb-1 block font-script text-[34px] leading-none text-brandtext";

/** Language: a clothing tag on a string; it swings and flips over to the other language. */
function ClothingTag() {
  const { lang, setLang } = useLang();
  const es = lang === "es";
  const face = "absolute inset-0 grid place-items-center pt-1.5 text-[13px] font-bold tracking-[.08em] [backface-visibility:hidden] [clip-path:polygon(22%_0,78%_0,100%_22%,100%_100%,0_100%,0_22%)] shadow-[inset_0_-3px_0_var(--tape)] before:absolute before:top-1 before:left-1/2 before:size-1.5 before:-translate-x-1/2 before:rounded-full before:bg-bg";
  return (
    <motion.button type="button" onClick={() => setLang(es ? "en" : "es")} aria-label={es ? "Switch to English" : "Cambiar a español"}
      whileHover={{ rotate: [0, 9, -6, 3, 0], transition: { duration: 1 } }} className="relative h-11 w-[50px] flex-none origin-top cursor-pointer [perspective:300px]">
      <span className="absolute top-0 left-1/2 h-3 border-l-[1.5px] border-soft" />
      <motion.span animate={{ rotateY: es ? 180 : 0 }} transition={{ type: "spring", stiffness: 180, damping: 14 }} className="absolute inset-x-1 top-2.5 bottom-0 [transform-style:preserve-3d]">
        <span className={cn(face, "bg-card text-ink ring-[1.5px] ring-line ring-inset")}>EN</span>
        <span className={cn(face, "bg-brand text-btnfg [transform:rotateY(180deg)]")}>ES</span>
      </motion.span>
    </motion.button>
  );
}

/** Theme: a sewing button with its two stitches; it spins over for night. */
function SewingButton() {
  const { dark, setTheme } = useDark();
  const { lang } = useLang();
  return (
    <button type="button" aria-label={lang === "es" ? "Cambiar modo oscuro" : "Toggle dark mode"} aria-pressed={dark}
      onClick={e => flipTheme(e.currentTarget, () => flushSync(() => setTheme(dark ? "light" : "dark")))}
      className="size-10 flex-none cursor-pointer rounded-full">
      <motion.svg viewBox="0 0 40 40" className="size-full drop-shadow-[0_4px_6px_var(--shadow)]" animate={{ rotate: dark ? 180 : 0 }} transition={{ type: "spring", stiffness: 140, damping: 9 }} aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="var(--tb-rim)" /><circle cx="20" cy="20" r="14" fill="var(--tb-face)" />
        {[[15.5, 15.5], [24.5, 15.5], [15.5, 24.5], [24.5, 24.5]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="2.4" fill="var(--tb-hole)" />)}
        <path d="M14 15.5h12M14 24.5h12" stroke="var(--thread)" strokeWidth="2.6" strokeLinecap="round" />
      </motion.svg>
    </button>
  );
}

/** Hero: a dress form, tape draped round the neck; a needle runs along the hem and stitches it in. */
function DressForm() {
  const t = useT();
  return (
    <div className="relative w-full max-w-[460px]">
      <svg viewBox="0 0 400 420" className="h-auto w-full overflow-visible" aria-hidden="true">
        <path d="M200 380 158 404M200 380 242 404M200 380v24" stroke="var(--form-line)" strokeWidth="7" strokeLinecap="round" />
        <rect x="195" y="320" width="10" height="62" rx="3" fill="var(--form-line)" />
        <rect x="186" y="54" width="28" height="26" rx="4" fill="var(--form-line)" /><ellipse cx="200" cy="54" rx="16" ry="6" fill="var(--form-line)" />
        <path d="M152 82 C150 66 250 66 248 82 C272 94 290 116 284 148 C278 178 264 196 264 222 C264 250 290 276 290 312 Q200 330 110 312 C110 276 136 250 136 222 C136 196 122 178 116 148 C110 116 128 94 152 82 Z" fill="var(--form)" stroke="var(--form-line)" strokeWidth="2" />
        <path d="M172 92 C162 140 178 190 168 230 C160 262 150 290 152 318" fill="none" stroke="var(--form-line)" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M228 92 C238 140 222 190 232 230 C240 262 250 290 248 318" fill="none" stroke="var(--form-line)" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M176 84 Q200 66 224 84" fill="none" stroke="var(--tape)" strokeWidth="13" strokeLinecap="round" />
        <path d="M178 86 C170 140 160 190 170 250" fill="none" stroke="var(--tape)" strokeWidth="13" strokeLinecap="round" />
        <path d="M222 86 C232 130 238 168 230 214" fill="none" stroke="var(--tape)" strokeWidth="13" strokeLinecap="round" />
        <path d="M178 86 C170 140 160 190 170 250M222 86 C232 130 238 168 230 214" fill="none" stroke="rgba(58,44,16,.5)" strokeWidth="5" strokeDasharray="1.5 6" />
        <path className="sew-in" d="M112 312 Q200 330 288 312" fill="none" stroke="var(--thread)" strokeWidth="2.4" strokeDasharray="190" />
        <path d="M112 312 Q200 330 288 312" fill="none" stroke="var(--card)" strokeWidth="2.6" strokeDasharray="6 6" opacity=".9" />
        <g className="needle"><path d="M-22 0 L14 0" stroke="#9aa1a8" strokeWidth="2.4" strokeLinecap="round" /><ellipse cx="-17" cy="0" rx="3.2" ry="1.4" fill="none" stroke="#6d747b" strokeWidth="1" /><path d="M-17 0 C-30 -6 -40 6 -54 0" fill="none" stroke="var(--thread)" strokeWidth="1.6" /></g>
        <ellipse cx="322" cy="372" rx="30" ry="22" fill="#b33a46" /><path d="M296 372 Q322 352 348 372 M322 351 v42" stroke="#8f2a35" strokeWidth="2" fill="none" />
        <path d="M310 360 l-8 -22 M324 356 l2 -24 M336 362 l10 -20" stroke="#9aa1a8" strokeWidth="2" />
        <circle cx="302" cy="338" r="4" fill="var(--tape)" /><circle cx="326" cy="332" r="4" fill="#4a7bd1" /><circle cx="346" cy="342" r="4" fill="#f6f0e7" />
        <rect x="52" y="352" width="44" height="8" rx="2" fill="#b98d5e" /><rect x="57" y="360" width="34" height="30" fill="var(--thread)" /><rect x="52" y="390" width="44" height="8" rx="2" fill="#b98d5e" />
        <path d="M57 366h34M57 372h34M57 378h34M57 384h34" stroke="rgba(0,0,0,.18)" strokeWidth="1" />
        <g transform="translate(66 96) rotate(-30)" fill="none" stroke="var(--soft)" strokeWidth="3"><circle cx="0" cy="0" r="8" /><circle cx="0" cy="22" r="8" /><path d="M7 4 L46 18 M7 18 L46 4" strokeLinecap="round" /></g>
      </svg>
      {([["floatNice", Sparkle, "-left-6 bottom-[22%] -rotate-3"], ["floatQuick", Lightning, "-right-4 top-[6%] rotate-2"]] as const).map(([k, I, pos]) => (
        <motion.div key={k} animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: k === "floatQuick" ? 1.5 : 0 }}
          className={cn("glass absolute flex w-max max-w-[240px] items-center gap-3 rounded-2xl py-3 ps-3 pe-5 shadow-[inset_0_0_0_1px_var(--line),0_24px_50px_-20px_var(--shadow)] max-sm:hidden", pos)}>
          <span className="grid size-10 flex-none place-items-center rounded-xl bg-brand text-btnfg"><I size={20} weight="fill" /></span>
          <span className="text-[15px] font-semibold [&_small]:block [&_small]:text-[13px] [&_small]:font-normal [&_small]:text-soft" dangerouslySetInnerHTML={{ __html: t(k) }} />
        </motion.div>
      ))}
    </div>
  );
}

/** The studio photo section only appears once images/gown.jpg exists. */
function Studio() {
  const t = useT();
  const [ok, setOk] = useState(false);
  return (
    <>
      <img src={img("gown.jpg")} alt="" hidden onLoad={() => setOk(true)} />
      {ok && (
        <section className="py-32 max-sm:py-20">
          <Wrap className="grid grid-cols-[.9fr_1.1fr] items-center gap-14 max-[860px]:grid-cols-1">
            <Reveal className="overflow-hidden rounded-t-full rounded-b-[30px] shadow-[0_50px_100px_-50px_var(--shadow)]"><img src={img("gown.jpg")} alt={t("alt:altGown")} className="aspect-[3/4] w-full object-cover" /></Reveal>
            <Reveal delay={0.1}><T k="studioEyebrow" className={eyebrow} /><T k="studioTitle" as="h2" className="mb-5 text-[clamp(44px,5.6vw,76px)]" /><T k="studioLead" as="p" className="max-w-[50ch] text-[17px] text-soft" /></Reveal>
          </Wrap>
        </section>
      )}
    </>
  );
}

export default function Home() {
  const t = useT();
  const status = useStatus(HOURS);

  return (
    <>
      <header className="pointer-events-none sticky top-3 z-40 px-4">
        <nav className="glass pointer-events-auto mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-3 rounded-full border border-line ps-3 pe-2.5 shadow-[inset_0_1px_0_var(--hi),0_20px_50px_-28px_var(--shadow)]">
          <a href="#top" className="flex flex-none items-center gap-2.5" aria-label="Tanya & Michel Tailoring and Alterations">
            <span className="grid size-11 place-items-center rounded-full bg-brand font-display text-[17px] text-btnfg italic">T&amp;M</span>
            <span><b className="block font-display text-[22px] leading-none font-normal">Tanya &amp; Michel</b><T k="logoSub" className="mt-0.5 block text-xs text-soft max-sm:hidden" /></span>
          </a>
          <div className="flex items-center gap-1 text-[15px] font-medium max-[1000px]:hidden">
            {[["services", "navServices"], ["reviews", "navReviews"], ["visit", "navVisit"]].map(([id, k]) => <a key={id} href={`#${id}`} className="rounded-full px-4 py-2 text-soft transition-colors hover:bg-bg2 hover:text-ink" dangerouslySetInnerHTML={{ __html: t(k) }} />)}
          </div>
          <div className="flex items-center gap-3">
            <ClothingTag /><SewingButton />
            <a href={TEL} className={cn(primary, "px-5 py-2.5 max-sm:hidden")}><Phone size={17} weight="bold" />{PHONE}</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden pt-16 pb-24 max-sm:pt-10">
          <Wrap className="grid grid-cols-[1.05fr_.95fr] items-center gap-12 max-[960px]:grid-cols-1">
            <div>
              <Reveal className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-card py-1.5 ps-1.5 pe-4 text-sm font-medium shadow-[inset_0_0_0_1px_var(--line)]">
                <span className="grid size-7 place-items-center rounded-full bg-tape text-[#3a2c10]"><Medal size={16} weight="fill" /></span><T k="award" />
              </Reveal>
              <Reveal delay={0.08}><T k="heroTitle" as="h1" className="mb-6 text-[clamp(52px,7.2vw,104px)]" /></Reveal>
              <Reveal delay={0.16}><T k="heroLead" as="p" className="mb-9 max-w-[50ch] text-lg text-soft" /></Reveal>
              <Reveal delay={0.24} className="mb-7 flex flex-wrap gap-3">
                <a href={TEL} className={primary}><Phone size={18} weight="bold" /><T k="callUs" /></a>
                <a href={DIR} target="_blank" rel="noopener" className={ghost}><NavigationArrow size={18} weight="bold" /><T k="directions" /></a>
              </Reveal>
              <Reveal delay={0.3} className="flex items-center gap-2.5 text-sm text-soft"><span className="tracking-[2px] text-tape">★★★★★</span><T k="rating" className="[&_strong]:text-base [&_strong]:text-ink" /></Reveal>
            </div>
            <Reveal delay={0.12} className="w-full max-w-[460px] justify-self-end max-[960px]:justify-self-center"><DressForm /></Reveal>
          </Wrap>
        </section>

        <div className="tape-band py-5 text-[#3a2c10]" aria-hidden="true">
          <Marquee className="[--duration:26s] [--gap:3rem]">
            {["tape1", "tape2", "tape3", "tape4"].map(k => <span key={k} className="flex items-center gap-12 pt-3 font-display text-[28px]"><T k={k} /><Scissors size={20} weight="bold" /></span>)}
          </Marquee>
        </div>

        <section id="services" className="scroll-mt-24 py-32 max-sm:py-20">
          <Wrap>
            <Reveal className="mb-14 max-w-[740px]"><T k="svcEyebrow" className={eyebrow} /><T k="svcTitle" as="h2" className="mb-4 text-[clamp(44px,5.6vw,76px)]" /><T k="svcLead" as="p" className="max-w-[56ch] text-[17px] text-soft" /></Reveal>
            <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-sm:grid-cols-1">
              {[1, 2, 3, 4, 5, 6].map((n, i) => (
                <Reveal key={n} delay={(i % 3) * 0.07} className={cn("rounded-[26px] bg-card p-1.5 shadow-[inset_0_0_0_1px_var(--line)] transition-transform duration-500 ease-silk hover:-translate-y-1", i === 1 && "lg:translate-y-8", i === 4 && "lg:translate-y-8")}>
                  <MagicCard gradientSize={220} gradientColor="rgba(155,44,110,.1)" gradientFrom="#9b2c6e" gradientTo="#e9b949" className="h-full rounded-[21px] [&>div:last-child]:h-full">
                    <div className="seam h-full rounded-[21px] p-8">
                      <span className="mb-8 block font-script text-[44px] leading-none text-brandtext">0{n}</span>
                      <T k={`c${n}t`} as="h3" className="mb-2 text-[30px]" /><T k={`c${n}p`} as="p" className="text-[15px] text-soft" />
                    </div>
                  </MagicCard>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-16 flex flex-wrap items-center gap-5 rounded-[26px] bg-tint px-8 py-6 lg:mt-24">
              <span className="grid size-12 place-items-center rounded-full bg-brand text-btnfg"><Lightning size={24} weight="fill" /></span>
              <T k="rush" as="p" className="flex-1 text-[16px] [&_strong]:font-semibold" />
              <a href={TEL} className={primary}><T k="rushBtn" /></a>
            </Reveal>
          </Wrap>
        </section>

        <Studio />

        <section className="bg-bg2 py-32 max-sm:py-20">
          <Wrap>
            <Reveal className="mb-14 max-w-[740px]"><T k="whyEyebrow" className={eyebrow} /><T k="whyTitle" as="h2" className="text-[clamp(44px,5.6vw,76px)]" /></Reveal>
            <div className="grid grid-cols-4 gap-8 max-[960px]:grid-cols-2 max-sm:grid-cols-1">
              {WHY.map(([k, Icon], i) => (
                <Reveal key={k} delay={i * 0.07}>
                  <span className="mb-6 grid size-16 place-items-center rounded-full border-[1.5px] border-dashed border-brand/40 text-brandtext"><Icon size={28} weight="duotone" /></span>
                  <T k={`${k}t`} as="h3" className="mb-2 text-[26px]" /><T k={`${k}p`} as="p" className="text-[15px] text-soft" />
                </Reveal>
              ))}
            </div>
          </Wrap>
        </section>

        <section className="py-32 max-sm:py-20">
          <Wrap>
            <Reveal className="mb-16 max-w-[740px]"><T k="howEyebrow" className={eyebrow} /><T k="howTitle" as="h2" className="text-[clamp(44px,5.6vw,76px)]" /></Reveal>
            <div className="relative grid grid-cols-4 gap-6 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
              <svg className="absolute inset-x-[6%] top-6 h-2 w-[88%] max-[900px]:hidden" aria-hidden="true"><line x1="0" y1="4" x2="100%" y2="4" stroke="var(--brand)" strokeOpacity=".4" strokeWidth="2" strokeDasharray="8 7" /></svg>
              {[1, 2, 3, 4].map(n => (
                <Reveal key={n} delay={n * 0.07} className="relative">
                  <span className="relative mb-6 grid size-12 place-items-center rounded-full bg-brand font-display text-xl text-btnfg shadow-[0_0_0_8px_var(--bg)]">{n}</span>
                  <T k={`p${n}t`} as="h3" className="mb-2 text-[26px]" /><T k={`p${n}p`} as="p" className="text-[15px] text-soft" />
                </Reveal>
              ))}
            </div>
          </Wrap>
        </section>

        <section id="reviews" className="scroll-mt-24 bg-bg2 py-32 max-sm:py-20">
          <Wrap>
            <Reveal className="relative grid grid-cols-[auto_1fr] items-center gap-14 overflow-hidden rounded-[32px] bg-card p-12 shadow-[inset_0_0_0_1px_var(--line),0_40px_80px_-50px_var(--shadow)] max-[860px]:grid-cols-1 max-sm:p-7">
              <BorderBeam size={220} duration={11} colorFrom="#9b2c6e" colorTo="#e9b949" borderWidth={1.5} />
              <div className="text-center"><b className="block font-display text-[110px] leading-none font-normal">5.0</b><span className="block text-xl tracking-[3px] text-tape">★★★★★</span><T k="revSub" className="text-sm text-soft" /></div>
              <div>
                <T k="revEyebrow" className={eyebrow} /><T k="revTitle" as="h3" className="mb-6 text-[clamp(30px,3.4vw,44px)]" />
                <div className="mb-6 flex flex-wrap gap-2">{["th1", "th2", "th3", "th4", "th5", "th6"].map(k => <T key={k} k={k} className="rounded-full bg-tint px-4 py-1.5 text-sm font-medium" />)}</div>
                <a href={REVIEWS} target="_blank" rel="noopener" className="font-semibold text-brandtext underline-offset-4 hover:underline" dangerouslySetInnerHTML={{ __html: t("revLink") }} />
              </div>
            </Reveal>
          </Wrap>
        </section>

        <section id="visit" className="scroll-mt-24 py-32 max-sm:py-20">
          <Wrap>
            <Reveal className="mb-12 max-w-[740px]"><T k="visitEyebrow" className={eyebrow} /><T k="visitTitle" as="h2" className="mb-4 text-[clamp(44px,5.6vw,76px)]" /><T k="visitLead" as="p" className="text-[17px] text-soft" /></Reveal>
            <div className="grid grid-cols-[.95fr_1.05fr] gap-5 max-[960px]:grid-cols-1">
              <Reveal className="seam grid content-start gap-4 rounded-[28px] bg-card p-8 shadow-[inset_0_0_0_1px_var(--line)]">
                <T k="contactTitle" as="h3" className="text-[32px]" />
                {([[TEL, Phone, PHONE, "phoneSub", true], [DIR, MapPin, "17822 Davenport Rd, Ste A", "Dallas, TX 75252", false], ["mailto:tanyaalterations97@gmail.com", Envelope, null, "tanyaalterations97@gmail.com", false], ["https://www.instagram.com/tanya_el_ezra/", InstagramLogo, "Instagram", "@tanya_el_ezra", false]] as const).map(([href, I, a, b, isKey], i) => (
                  <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="group relative z-10 flex items-center gap-3.5">
                    <span className="grid size-11 flex-none place-items-center rounded-full bg-tint text-brandtext transition-transform duration-300 ease-spring group-hover:scale-110"><I size={20} weight="bold" /></span>
                    <span>{a ? <strong className="block font-semibold">{a}</strong> : <T k="emailLabel" as="strong" className="block font-semibold" />}{isKey ? <T k={b} className="text-sm text-soft" /> : <span className="text-sm text-soft">{b}</span>}</span>
                    {i === 0 && null}
                  </a>
                ))}
                <span className="mt-2 inline-flex w-max items-center gap-2 rounded-full bg-bg2 px-3.5 py-1.5 text-sm font-semibold">
                  <i className={cn("size-2 rounded-full", status.open ? "bg-[#22a35a] shadow-[0_0_0_4px_rgba(34,163,90,.2)]" : "bg-[#a69c92]")} />{status.text || " "}
                </span>
                <HoursTable hours={HOURS} accent="text-brandtext font-semibold" />
                <T k="hoursNote" as="p" className="text-[13.5px] text-soft" />
              </Reveal>
              <Reveal delay={0.08} className="min-h-[460px] overflow-hidden rounded-[28px] shadow-[inset_0_0_0_1px_var(--line)]"><MapFrame q="17822+Davenport+Rd,+Dallas,+TX+75252" title="Map to Tanya & Michel Tailoring" className="min-h-[460px]" /></Reveal>
            </div>
          </Wrap>
        </section>

        <section className="bg-bg2 py-32 max-sm:py-20">
          <Wrap className="grid grid-cols-[.8fr_1.2fr] gap-14 max-[960px]:grid-cols-1">
            <Reveal><T k="faqEyebrow" className={eyebrow} /><T k="faqTitle" as="h2" className="text-[clamp(44px,5.6vw,76px)]" /></Reveal>
            <Faq ids={[1, 2, 3, 4]} accent="text-brandtext" />
          </Wrap>
        </section>

        <section className="py-32 max-sm:py-20">
          <Wrap>
            <Reveal className="seam relative flex items-center justify-between gap-8 overflow-hidden rounded-[36px] bg-brand px-14 py-20 text-btnfg max-[960px]:flex-col max-[960px]:items-start max-sm:px-7 max-sm:py-14">
              <div className="relative"><T k="ctaTitle" as="h2" className="mb-3 text-[clamp(46px,6vw,84px)] [&_em]:text-tape" /><T k="ctaLead" as="p" className="text-lg opacity-85" /></div>
              <a href={TEL} className={cn(btn, "relative z-10 flex-none bg-tape px-8 py-4 text-lg text-[#3a2c10]")}><Phone size={20} weight="bold" /><T k="ctaBtn" /></a>
            </Reveal>
          </Wrap>
        </section>
      </main>

      <footer className="pb-28">
        <Wrap><div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7 text-sm text-soft">
          <span className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-full bg-brand font-display text-sm text-btnfg italic">T&amp;M</span><b className="font-display text-lg font-normal text-ink">Tanya &amp; Michel</b></span>
          <span>© {new Date().getFullYear()} Tanya &amp; Michel Tailoring and Alterations · 17822 Davenport Rd, Ste A, Dallas, TX 75252 · <a href={TEL}>{PHONE}</a></span>
        </div></Wrap>
      </footer>
      <div className="glass fixed inset-x-3 bottom-3 z-30 hidden gap-2 rounded-full p-1.5 shadow-[inset_0_0_0_1px_var(--line)] max-sm:flex">
        <a href={TEL} className={cn(primary, "flex-1 py-3")}><T k="callShort" /></a>
        <a href={DIR} target="_blank" rel="noopener" className={cn(ghost, "flex-1 py-3")}><T k="dirShort" /></a>
      </div>
    </>
  );
}
