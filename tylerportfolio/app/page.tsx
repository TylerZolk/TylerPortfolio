"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const ROLES = [
  "CS Student @ USC",
];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = 80;
    interface Pt { x: number; y: number; vx: number; vy: number; r: number; }
    const pts: Pt[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
    }));

    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(0,255,179,0.5)";
        ctx!.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.strokeStyle = `rgba(0,255,179,${0.12 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}

export default function Home() {
  const role = useTypingEffect(ROLES);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className={`${styles.hero} grid-bg`}>
      <ParticleCanvas />

      {/* Scanline overlay */}
      <div className={styles.scanline} />

      <div className={`${styles.content} container`}>
        <div className={`${styles.badge} ${mounted ? styles.visible : ""}`}>
          <span className={styles.dot} />
          <span className={styles.badgeText}>Available for opportunities</span>
        </div>

        <h2 className={`${styles.subtitle} ${mounted ? styles.visible : ""}`} style={{ animationDelay: "0.1s" }}>
          Computer Science · Cybersecurity
        </h2>

        <h1 className={`${styles.title} ${mounted ? styles.visible : ""}`} style={{ animationDelay: "0.2s" }}>
          <span className={styles.first}>Tyler</span>{" "}
          <span className={styles.last}>Zolkos</span>
        </h1>

        <div className={`${styles.roleWrap} ${mounted ? styles.visible : ""}`} style={{ animationDelay: "0.35s" }}>
          <span className={styles.rolePrefix}>~/$ </span>
          <span className={styles.role}>{role}</span>
          <span className={styles.cursor} />
        </div>

        <p className={`${styles.desc} ${mounted ? styles.visible : ""}`} style={{ animationDelay: "0.5s" }}>
          Studying Computer Science with a concentration in Cybersecurity at the{" "}
          <span className={styles.usc}>University of South Carolina</span>. Building secure systems
          and exploring the intersection of software engineering and security research.
        </p>

        <div className={`${styles.ctas} ${mounted ? styles.visible : ""}`} style={{ animationDelay: "0.65s" }}>
          <Link href="/portfolio" className={styles.btnPrimary}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Get In Touch
          </Link>
        </div>

        <div className={`${styles.stats} ${mounted ? styles.visible : ""}`} style={{ animationDelay: "0.8s" }}>
          {[
            { value: "USC", label: "Garnet & Black" },
            { value: "Cyber", label: "Concentration" },
            { value: "Full Stack", label: "Developer" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </main>
  );
}
