"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import {
  CalendarDays,
  Disc3,
  ExternalLink,
  Headphones,
  Mail,
  Mic2,
  Pause,
  Play,
  Radio,
  Send,
  Sparkles,
  Volume2
} from "lucide-react";
import type { PointerEvent } from "react";
import { useMemo, useState } from "react";

const tracks = [
  {
    id: "que-tengo-que-hacer",
    title: "Que tengo que hacer",
    artist: "Jeydar & Johan Prince",
    note: "Jeydar & Johan Prince",
    youtube: "https://www.youtube.com/watch?v=z2O1x05zMZE",
    wave: [34, 52, 24, 68, 44, 72, 36, 58, 28, 62, 42, 76]
  },
  {
    id: "lets-go",
    title: "Lets Go",
    artist: "Jeydar",
    note: "Energia directa para la calle",
    youtube: "https://www.youtube.com/watch?v=tL37Rzb7mNE",
    wave: [42, 74, 35, 58, 82, 48, 28, 64, 54, 88, 40, 70]
  },
  {
    id: "instagram",
    title: "Instagram",
    artist: "Jeydar",
    note: "Melodia, deseo y noche",
    youtube: "https://www.youtube.com/watch?v=_Gq3MmJt-RM",
    wave: [26, 46, 70, 38, 56, 84, 30, 66, 42, 78, 34, 60]
  },
  {
    id: "durota",
    title: "Durota",
    artist: "Jeydar ft Yandro Rivera",
    note: "Jeydar ft Yandro Rivera",
    youtube: "https://www.youtube.com/watch?v=wvu2AESEFbo",
    wave: [58, 32, 76, 44, 86, 54, 38, 72, 48, 90, 36, 64]
  },
  {
    id: "realidad",
    title: "Realidad",
    artist: "Jeydar",
    note: "Oscura, honesta, de madrugada",
    youtube: "https://www.youtube.com/watch?v=zEhv6MnNOQA",
    wave: [32, 54, 36, 74, 44, 66, 30, 58, 46, 80, 34, 52]
  },
  {
    id: "otra-girl",
    title: "Otra girl como tu",
    artist: "Jeydar",
    note: "Romance urbano con sello propio",
    youtube: "https://www.youtube.com/watch?v=mngmm1yjhwk",
    wave: [46, 68, 30, 52, 78, 40, 62, 88, 34, 58, 72, 44]
  }
];

const dates = [
  { city: "Medellin", venue: "Showcase privado", day: "22 JUN" },
  { city: "Bogota", venue: "Urbano Sessions", day: "05 JUL" },
  { city: "Cali", venue: "Club night", day: "19 JUL" }
];

const lyricFragments = [
  "escritor musical",
  "raaaaaaaaas",
  "videos oficiales",
  "bajo y tinta",
  "flow nocturno",
  "Jeydar"
];

export default function JeydarExperience() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTrackId, setActiveTrackId] = useState(tracks[0].id);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.28], [0, -120]);
  const heroShift = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const portraitShift = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
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
              Musica
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
          style={{ y: heroLift, x: heroShift }}
        >
          <Image
            src="/images/jeydar-hero.png"
            alt="Escena urbana nocturna con luces rojas"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.68)_42%,rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_42%,rgba(239,31,45,0.22),transparent_36%)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: "easeOut" }}
          className="absolute bottom-0 right-4 top-20 z-[2] hidden w-[40vw] min-w-[440px] max-w-[620px] opacity-95 md:block xl:right-12"
          style={{ x: portraitShift }}
        >
          <Image
            src="/images/jeydar-portrait-profile.jpg"
            alt="Jeydar con lentes y manos juntas"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-contain object-bottom grayscale-[10%] contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0)_48%,rgba(239,31,45,0.18)_100%)]" />
        </motion.div>

        <div className="artist-portrait-mobile absolute inset-0 z-[1] opacity-45 md:hidden">
          <Image
            src="/images/jeydar-portrait-profile.jpg"
            alt="Retrato de Jeydar mirando de perfil"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_32%] grayscale-[18%] contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.22)_84%)]" />
        </div>

        <motion.div
          className="absolute -left-24 top-[24%] hidden h-72 w-72 rounded-full border border-[#ef1f2d]/30 lg:block pulse-ring"
          style={{ x: ringShiftX, y: ringShiftY }}
        />

        <div className="relative z-10 mx-auto grid min-h-[calc(92svh-4rem)] max-w-7xl grid-rows-[1fr_auto] px-4 sm:px-6 lg:px-8">
          <motion.div className="flex max-w-5xl flex-col justify-center py-16 sm:py-20">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.32em] text-[#f4b35b]"
            >
              <span className="h-px w-12 bg-[#ef1f2d]" />
              El escritor musical
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
              className="hero-title max-w-[8ch] text-[clamp(4.4rem,11vw,10rem)] font-black uppercase leading-[0.82] tracking-normal text-white"
            >
              Jeydar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="mt-8 max-w-3xl"
            >
              <p className="text-balance max-w-2xl text-2xl font-semibold leading-tight text-white/92 [text-shadow:0_8px_34px_rgba(0,0,0,0.92)] sm:text-4xl">
                Pluma de calle, melodia de club y un sello que se siente antes
                del golpe: Raaaaaaaas.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#musica"
                  className="inline-flex min-h-12 items-center gap-3 bg-[#ef1f2d] px-5 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_60px_rgba(239,31,45,0.46)] transition hover:bg-white hover:text-black"
                >
                  <Play className="size-4" aria-hidden="true" />
                  Spotify
                </a>
                <a
                  href="#videos"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/35 bg-black/55 px-5 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
                >
                  <Sparkles className="size-4" aria-hidden="true" />
                  Videos
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className="mb-8 grid gap-4 border-t border-white/15 pt-5 md:grid-cols-[1fr_auto] md:items-end">
            <div className="hidden overflow-hidden text-[clamp(2rem,8vw,6rem)] font-black uppercase leading-none text-white/10 sm:block">
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
              aria-label={
                isPlaying ? "Pausar muestra sonora" : "Reproducir muestra sonora"
              }
            >
              <span className="flex items-center gap-3">
                {isPlaying ? (
                  <Pause className="size-4 text-[#ef1f2d]" aria-hidden="true" />
                ) : (
                  <Play className="size-4 text-[#ef1f2d]" aria-hidden="true" />
                )}
                <span className="text-xs font-black uppercase tracking-[0.18em]">
                  Raaaaaaaas
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
              nocturno, melodia urbana y una pluma directa, hecha para sonar en
              club sin perder historia.
            </p>
          </div>

          <div className="relative min-h-[620px] overflow-hidden border-l border-white/10 pl-6 sm:pl-10">
            <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[#ef1f2d] via-white/20 to-transparent sm:left-10" />
            {[
              ["01", "Letra", "Frases con filo, romance de madrugada y calle real."],
              ["02", "Ritmo", "Bajos densos, drums limpios y cadencia para moverse."],
              ["03", "Imagen", "Negro, rojo, metal, humo y presencia de artista."],
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

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-28 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[520px] overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src="/images/jeydar-portrait-profile.jpg"
              alt="Retrato editorial de Jeydar"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[58%_30%] opacity-90 grayscale-[8%] contrast-125 saturate-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.88),rgba(0,0,0,0.12)_52%,rgba(239,31,45,0.18))]" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <Disc3 className="mb-6 size-12 text-[#f4b35b]" aria-hidden="true" />
              <p className="text-balance text-3xl font-black uppercase leading-tight sm:text-5xl">
                La musica se escribe antes de sonar.
              </p>
            </div>
          </motion.div>

          <div className="flex min-h-[520px] flex-col justify-between border-y border-white/10 py-8 lg:py-10">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-white/50">
                Presencia
              </p>
              <p className="text-balance text-3xl font-black uppercase leading-tight sm:text-5xl">
                Una voz urbana con actitud, melodia y frases que se quedan
                sonando despues del beat.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                ["Pluma", "Letras con intencion"],
                ["Calle", "Energia de barrio y club"],
                ["Sello", "Raaaaaaaas"]
              ].map(([title, copy]) => (
                <div key={title} className="border-l border-[#ef1f2d] pl-4">
                  <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#f4b35b]">
                    {title}
                  </span>
                  <span className="mt-2 block text-base font-semibold leading-6 text-white/70">
                    {copy}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="musica" className="bg-[#0c0c0f] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#f4b35b]">
                Musica
              </p>
              <h2 className="text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
                Dale play al mundo de Jeydar.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/64 lg:justify-self-end">
              Canciones para entrar en la noche: regueton, melodia urbana y esa
              firma que la gente reconoce cuando suelta el Raaaaaaaas.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(239,31,45,0.18),rgba(255,255,255,0.04)_44%,rgba(30,215,96,0.12))] p-5 sm:p-8">
              <div className="absolute right-6 top-6 grid size-12 place-items-center rounded-full bg-[#1ed760] text-black">
                <Headphones className="size-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#1ed760]">
                Spotify
              </p>
              <h3 className="mt-8 max-w-xl text-4xl font-black uppercase leading-none sm:text-6xl">
                Escucha el perfil oficial.
              </h3>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/66">
                Entra a su catalogo, guarda sus canciones y sigue el movimiento
                desde la plataforma donde vive la musica.
              </p>
              <a
                href="https://open.spotify.com/intl-es/artist/4bOZT3dL9BvdskQ7WRWcDZ?si=oP0yOPZkTJmqRELAJGLvUQ"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#1ed760] px-5 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Abrir Spotify
              </a>
            </div>

            <div className="overflow-hidden border border-white/10 bg-black/55 p-2">
              <iframe
                title="Perfil de Jeydar en Spotify"
                src="https://open.spotify.com/embed/artist/4bOZT3dL9BvdskQ7WRWcDZ?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block w-full border-0"
              />
            </div>
          </div>

          <div id="videos" className="mt-20">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#ef1f2d]">
                  YouTube
                </p>
                <h3 className="text-balance text-3xl font-black uppercase leading-none sm:text-5xl">
                  Videos que ya estan en la calle.
                </h3>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/58">
                Cada tema abre su video oficial. La energia visual se queda en
                la pagina, y el play completo vive en el canal.
              </p>
            </div>

            <div className="border-y border-white/10">
              {tracks.map((track, index) => {
                const active = activeTrackId === track.id;
                return (
                  <motion.article
                    key={track.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`group grid gap-5 border-b border-white/10 py-6 transition last:border-b-0 lg:grid-cols-[72px_1fr_320px_auto] lg:items-center ${
                      active ? "bg-[#ef1f2d]/12" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTrackId(track.id);
                        setIsPlaying(true);
                      }}
                      className={`grid size-14 place-items-center border transition ${
                        active
                          ? "border-[#ef1f2d] bg-[#ef1f2d] text-white"
                          : "border-white/15 bg-white/[0.04] text-white hover:border-[#ef1f2d]"
                      }`}
                      aria-label={`Marcar ${track.title}`}
                    >
                      {active && isPlaying ? (
                        <Volume2 className="size-5" aria-hidden="true" />
                      ) : (
                        <Play className="size-5" aria-hidden="true" />
                      )}
                    </button>

                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.24em] text-[#f4b35b]">
                        {track.artist}
                      </span>
                      <h4 className="mt-2 text-3xl font-black uppercase leading-none sm:text-5xl">
                        {track.title}
                      </h4>
                      <p className="mt-3 text-base text-white/58">{track.note}</p>
                    </div>

                    <div className="flex h-20 items-center gap-1 overflow-hidden border-l border-white/10 pl-4">
                      {track.wave.map((height, waveIndex) => (
                        <span
                          key={`${track.id}-${waveIndex}`}
                          className={`audio-bar block w-2 bg-[#ef1f2d] ${
                            active && isPlaying
                              ? ""
                              : "[animation-play-state:paused]"
                          }`}
                          style={{
                            height: `${height}%`,
                            opacity: active ? 1 : 0.34
                          }}
                        />
                      ))}
                    </div>

                    <a
                      href={track.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-[#ef1f2d] hover:bg-[#ef1f2d]"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" />
                      Ver video
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#050506] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden border border-white/10 bg-black">
            <Image
              src="/images/jeydar-portrait-main.jpeg"
              alt="Jeydar en sesion fotografica urbana"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[52%_34%] opacity-85 grayscale-[12%] contrast-125 saturate-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.82),transparent_55%)]" />
            <div className="absolute bottom-6 left-6 right-6">
              <Radio className="mb-5 size-10 text-[#ef1f2d]" aria-hidden="true" />
              <p className="text-3xl font-black uppercase leading-none sm:text-5xl">
                En vivo, la letra tambien se baila.
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
              Que la proxima noche tenga firma.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/64">
              Para shows, colaboraciones, entrevistas y campanas urbanas, el
              equipo de Jeydar esta listo para mover la conversacion.
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
                placeholder="Cuentanos la fecha, ciudad y formato del evento"
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
