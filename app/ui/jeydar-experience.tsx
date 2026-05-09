"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Disc3,
  Headphones,
  Instagram,
  Mail,
  Mic2,
  Music2,
  Pause,
  Play,
  Radio,
  Send,
  Sparkles,
  Youtube
} from "lucide-react";
import type { PointerEvent } from "react";
import { useMemo, useState } from "react";

const releases = [
  {
    title: "Noche escrita",
    mood: "Perreo fino, letra que se queda",
    year: "2026"
  },
  {
    title: "Código rojo",
    mood: "Bajo pesado, calle elegante",
    year: "Single"
  },
  {
    title: "Versos de humo",
    mood: "Melodía urbana, pulso romántico",
    year: "Próximo"
  }
];

const dates = [
  { city: "Medellín", venue: "Showcase privado", day: "22 JUN" },
  { city: "Bogotá", venue: "Urbano Sessions", day: "05 JUL" },
  { city: "Cali", venue: "Club night", day: "19 JUL" }
];

const platforms = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "Spotify", icon: Headphones, href: "#" }
];

const lyricFragments = [
  "escritor musical",
  "regueton de autor",
  "calle con elegancia",
  "bajo y tinta",
  "flow nocturno",
  "Jeydar"
];

export default function JeydarExperience() {
  const [isPlaying, setIsPlaying] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.28], [0, -120]);
  const titleFade = useTransform(scrollYProgress, [0, 0.22], [1, 0.2]);
  const heroShift = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const ringShiftX = useTransform(mouseX, [-0.5, 0.5], [22, -22]);
  const ringShiftY = useTransform(mouseY, [-0.5, 0.5], [-14, 14]);

  const doubledFragments = useMemo(
    () => [...lyricFragments, ...lyricFragments, ...lyricFragments],
    []
  );

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left - rect.width / 2) / rect.width);
    mouseY.set((event.clientY - rect.top - rect.height / 2) / rect.height);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050506] text-[#fff7f0]">
      <div className="noise" />
      <div className="scanline" />

      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-[#ef1f2d]"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="Ir al inicio"
          >
            <span className="grid size-9 place-items-center border border-[#ef1f2d]/70 bg-[#ef1f2d]/15 text-[#ef1f2d] shadow-[0_0_28px_rgba(239,31,45,0.35)]">
              <Mic2 className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-black uppercase tracking-[0.28em] text-white">
              Jeydar
            </span>
          </a>

          <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.22em] text-white/62 md:flex">
            <a className="transition hover:text-white" href="#sonido">
              Sonido
            </a>
            <a className="transition hover:text-white" href="#musica">
              Música
            </a>
            <a className="transition hover:text-white" href="#booking">
              Booking
            </a>
          </div>

          <a
            href="#booking"
            className="inline-flex size-10 items-center justify-center border border-white/15 bg-white/8 text-white transition hover:border-[#ef1f2d] hover:bg-[#ef1f2d]"
            aria-label="Contactar a Jeydar"
          >
            <Send className="size-4" aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section
        id="inicio"
        onPointerMove={handlePointerMove}
        className="relative min-h-[92svh] overflow-hidden pt-16"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            y: heroLift,
            x: heroShift
          }}
        >
          <Image
            src="/images/jeydar-hero.png"
            alt="Escena urbana nocturna con silueta de artista y luces rojas"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.38)_70%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_44%,rgba(239,31,45,0.18),transparent_36%)]" />
        </motion.div>

        <motion.div
          className="absolute -left-24 top-[24%] hidden h-72 w-72 rounded-full border border-[#ef1f2d]/30 lg:block pulse-ring"
          style={{
            x: ringShiftX,
            y: ringShiftY
          }}
        />

        <div className="relative z-10 mx-auto grid min-h-[calc(92svh-4rem)] max-w-7xl grid-rows-[1fr_auto] px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex max-w-5xl flex-col justify-center py-16 sm:py-20"
            style={{ opacity: titleFade }}
          >
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.32em] text-[#f4b35b]"
            >
              <span className="h-px w-12 bg-[#ef1f2d]" />
              Regueton urbano de autor
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
              className="hero-title max-w-[11ch] text-[clamp(4.6rem,16vw,13rem)] font-black uppercase leading-[0.78] tracking-normal"
            >
              Jeydar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="mt-8 max-w-3xl"
            >
              <p className="text-balance text-2xl font-semibold leading-tight text-white sm:text-4xl">
                El escritor musical que convierte la calle, el deseo y la noche
                en regueton con letra propia.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#musica"
                  className="inline-flex min-h-12 items-center gap-3 bg-[#ef1f2d] px-5 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_60px_rgba(239,31,45,0.32)] transition hover:bg-white hover:text-black"
                >
                  <Play className="size-4" aria-hidden="true" />
                  Escuchar
                </a>
                <a
                  href="#sonido"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/20 bg-black/30 px-5 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
                >
                  <Sparkles className="size-4" aria-hidden="true" />
                  Universo
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className="mb-8 grid gap-4 border-t border-white/15 pt-5 md:grid-cols-[1fr_auto] md:items-end">
            <div className="overflow-hidden text-[clamp(2rem,8vw,6rem)] font-black uppercase leading-none text-white/10">
              <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
                {doubledFragments.map((fragment, index) => (
                  <span key={`${fragment}-${index}`}>{fragment}</span>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying((value) => !value)}
              className="inline-flex h-14 w-full items-center justify-between border border-white/15 bg-white/10 px-4 text-left text-white backdrop-blur transition hover:border-[#ef1f2d] md:w-72"
              aria-label={isPlaying ? "Pausar muestra sonora" : "Reproducir muestra sonora"}
            >
              <span className="flex items-center gap-3">
                {isPlaying ? (
                  <Pause className="size-4 text-[#ef1f2d]" aria-hidden="true" />
                ) : (
                  <Play className="size-4 text-[#ef1f2d]" aria-hidden="true" />
                )}
                <span className="text-xs font-black uppercase tracking-[0.18em]">
                  Demo visual
                </span>
              </span>
              <span className="flex h-7 items-end gap-1" aria-hidden="true">
                {[18, 24, 14, 28, 20].map((height, index) => (
                  <span
                    key={height + index}
                    className={`audio-bar block w-1.5 bg-[#ef1f2d] ${
                      isPlaying ? "" : "[animation-play-state:paused]"
                    }`}
                    style={{ height }}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
      </section>

      <section id="sonido" className="relative border-y border-white/10 bg-[#09090b]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
          <div className="sticky top-24 h-fit">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#ef1f2d]">
              Firma sonora
            </p>
            <h2 className="text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
              Tinta en el verso. Fuego en el bajo.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">
              Jeydar no entra al beat para llenar espacio: lo escribe, lo dobla
              y lo convierte en una escena. Su identidad mezcla regueton
              nocturno, melodía urbana y una pluma directa, hecha para sonar en
              club sin perder historia.
            </p>
          </div>

          <div className="relative min-h-[620px] overflow-hidden border-l border-white/10 pl-6 sm:pl-10">
            <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[#ef1f2d] via-white/20 to-transparent sm:left-10" />
            {[
              ["01", "Letra", "Frases con filo, romance de madrugada y calle real."],
              ["02", "Ritmo", "Bajos densos, drums limpios y cadencia para moverse."],
              ["03", "Imagen", "Negro, rojo, metal, humo y una presencia que no pide permiso."],
              ["04", "Escena", "Un show pensado como ritual urbano, no como lista de canciones."]
            ].map(([number, title, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative mb-14 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-[110px_1fr]"
              >
                <span className="lyric-line text-5xl font-black leading-none">
                  {number}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase text-white">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-white/64">
                    {copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050506] py-20 sm:py-28">
        <div className="absolute inset-x-0 top-8 rotate-[-3deg] border-y border-[#ef1f2d]/30 bg-[#ef1f2d]/10 py-4">
          <div className="marquee-track reverse flex w-max gap-8 whitespace-nowrap text-4xl font-black uppercase leading-none text-[#ef1f2d] sm:text-7xl">
            {doubledFragments.map((fragment, index) => (
              <span key={`${fragment}-red-${index}`}>{fragment}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-28 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="min-h-[420px] border border-white/10 bg-[linear-gradient(135deg,rgba(239,31,45,0.18),rgba(255,255,255,0.05)_42%,rgba(244,179,91,0.12))] p-6 sm:p-10"
          >
            <div className="flex h-full flex-col justify-between">
              <Disc3 className="size-12 text-[#f4b35b]" aria-hidden="true" />
              <div>
                <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-white/50">
                  Manifiesto
                </p>
                <p className="text-balance text-3xl font-black uppercase leading-tight sm:text-5xl">
                  La música se escribe antes de sonar. Jeydar firma cada golpe
                  con intención.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid content-end gap-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.label}
                  href={platform.href}
                  className="group flex min-h-20 items-center justify-between border border-white/10 bg-white/[0.03] px-5 transition hover:border-[#ef1f2d] hover:bg-[#ef1f2d]"
                  aria-label={`Abrir ${platform.label} de Jeydar`}
                >
                  <span className="flex items-center gap-4">
                    <Icon className="size-5 text-[#ef1f2d] transition group-hover:text-white" />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">
                      {platform.label}
                    </span>
                  </span>
                  <ArrowRight className="size-5 transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="musica" className="bg-[#0c0c0f] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#f4b35b]">
                Música
              </p>
              <h2 className="text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
                Lanzamientos que suenan como madrugada.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/64 lg:justify-self-end">
              La discografía se presenta como una línea de pulso: cada tema es
              una coordenada distinta del mismo universo.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {releases.map((release, index) => (
              <motion.a
                key={release.title}
                href="#booking"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid min-h-32 gap-5 py-7 transition hover:bg-[#ef1f2d] sm:grid-cols-[120px_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="text-sm font-black uppercase tracking-[0.26em] text-white/45 group-hover:text-white/75">
                  {release.year}
                </span>
                <span>
                  <span className="block text-3xl font-black uppercase leading-none sm:text-5xl">
                    {release.title}
                  </span>
                  <span className="mt-3 block text-base text-white/58 group-hover:text-white/85">
                    {release.mood}
                  </span>
                </span>
                <span className="grid size-12 place-items-center border border-white/15 text-white transition group-hover:bg-white group-hover:text-black">
                  <Music2 className="size-5" aria-hidden="true" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#050506] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden border border-white/10 bg-black">
            <Image
              src="/images/jeydar-hero.png"
              alt="Luces urbanas rojas para el universo visual de Jeydar"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.82),transparent_55%)]" />
            <div className="absolute bottom-6 left-6 right-6">
              <Radio className="mb-5 size-10 text-[#ef1f2d]" />
              <p className="text-3xl font-black uppercase leading-none sm:text-5xl">
                En vivo, la letra también se baila.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#ef1f2d]">
              Agenda
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {dates.map((date) => (
                <div
                  key={date.city}
                  className="grid min-h-28 grid-cols-[92px_1fr] items-center gap-5 py-5"
                >
                  <span className="grid h-16 place-items-center border border-[#ef1f2d]/45 bg-[#ef1f2d]/10 text-center text-sm font-black uppercase leading-tight text-[#f4b35b]">
                    {date.day}
                  </span>
                  <span>
                    <span className="block text-2xl font-black uppercase">
                      {date.city}
                    </span>
                    <span className="mt-1 block text-white/58">{date.venue}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="relative overflow-hidden bg-[#09090b] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <div className="orbital-word absolute left-[6%] top-[12%] text-7xl font-black uppercase text-white/10">
            Flow
          </div>
          <div className="orbital-word absolute bottom-[16%] right-[8%] text-8xl font-black uppercase text-[#ef1f2d]/20">
            Letra
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#f4b35b]">
              Booking
            </p>
            <h2 className="text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
              Que la próxima noche tenga firma.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/64">
              Para shows, colaboraciones, entrevistas y campañas urbanas, el
              equipo de Jeydar está listo para mover la conversación.
            </p>
          </div>

          <form className="grid gap-4 border border-white/10 bg-black/30 p-4 backdrop-blur sm:p-6">
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white/48">
                Nombre
              </span>
              <input
                className="min-h-14 border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ef1f2d]"
                placeholder="Tu nombre"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white/48">
                Correo
              </span>
              <input
                className="min-h-14 border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ef1f2d]"
                placeholder="booking@ejemplo.com"
                type="email"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white/48">
                Mensaje
              </span>
              <textarea
                className="min-h-36 resize-y border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ef1f2d]"
                placeholder="Cuéntanos la fecha, ciudad y formato del evento"
              />
            </label>
            <button
              className="mt-2 inline-flex min-h-14 items-center justify-center gap-3 bg-[#ef1f2d] px-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
              type="button"
            >
              <Mail className="size-4" aria-hidden="true" />
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-black uppercase tracking-[0.24em] text-white">
            Jeydar
          </span>
          <span>El escritor musical</span>
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-[#ef1f2d]" aria-hidden="true" />
            2026
          </span>
        </div>
      </footer>
    </main>
  );
}
