"use client";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={`${styles.page} grid-bg`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.mono}>~/contact</span>
          </div>
          <h1 className={styles.title}>
            Let&apos;s <span className={styles.accent}>Connect</span>
          </h1>
          <p className={styles.desc}>
            I&apos;m currently looking for internships, co-ops, and research opportunities
            in cybersecurity and software engineering. Feel free to reach out — I&apos;d
            love to connect.
          </p>

          <div className={styles.infoCards}>
            <InfoCard icon={<EmailIcon />} label="Email" value="tylerzolk@gmail.com" href="mailto:tylerzolk@gmail.com" />
            <InfoCard icon={<GitHubIcon />} label="GitHub" value="github.com/tylerzolk" href="https://github.com/tylerzolk" />
            <InfoCard icon={<LinkedInIcon />} label="LinkedIn" value="linkedin.com/in/tylerzolk" href="https://linkedin.com/in/tylerzolk" />
            <InfoCard icon={<SchoolIcon />} label="University" value="University of South Carolina" href="https://sc.edu" />
          </div>

          <div className={styles.availability}>
            <div className={styles.availDot} />
            <div>
              <p className={styles.availTitle}>Open to Opportunities</p>
              <p className={styles.availSub}>Internships · Part-time · Co-op · Research</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.dots}>
                <span /><span /><span />
              </div>
              <span className={styles.mono}>contact.sh</span>
              <div style={{ width: 52 }} />
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}>whoami</span>
              </div>
              <div className={styles.termOutput}>Tyler Zolkos</div>

              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}>cat major.txt</span>
              </div>
              <div className={styles.termOutput}>Computer Science</div>
              <div className={styles.termOutput}>Concentration: Cybersecurity</div>
              <div className={styles.termOutput}>University of South Carolina</div>

              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}>cat skills.txt</span>
              </div>
              <div className={styles.termOutput}>Python · FastAPI · PostgreSQL · Next.js</div>
              <div className={styles.termOutput}>TypeScript · React · Tailwind CSS</div>
              <div className={styles.termOutput}>REST APIs · RBAC · Auth · SQL</div>

              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}>echo $STATUS</span>
              </div>
              <div className={styles.termOutput} style={{ color: "var(--teal)" }}>
                Available for internships &amp; co-ops
              </div>

              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}>cat contact.txt</span>
              </div>
              <div className={styles.termOutput}>
                <a href="mailto:tylerzolk@gmail.com" className={styles.termLink}>
                  tylerzolk@gmail.com
                </a>
              </div>
              <div className={styles.termOutput}>
                <a href="https://github.com/tylerzolk" target="_blank" rel="noopener noreferrer" className={styles.termLink}>
                  github.com/tylerzolk
                </a>
              </div>

              <div className={styles.termLine}>
                <span className={styles.termPrompt}>$</span>
                <span className={styles.termCmd}></span>
                <span className={styles.termCursor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
      <span className={styles.infoIcon}>{icon}</span>
      <div>
        <p className={styles.infoLabel}>{label}</p>
        <p className={styles.infoValue}>{value}</p>
      </div>
    </a>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function SchoolIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
