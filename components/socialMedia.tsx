export default function SocialMedia() {
  return (
    <section className="mx-auto w-full max-w-md rounded-3xl border border-border/40 bg-background/80 p-6 shadow-lg shadow-border/5 backdrop-blur-sm text-foreground">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-bold font-armenian tracking-tight">
          Սոցցանցեր
        </h1>
        <p className="max-w-sm text-md text-foreground/70">
          Կարող եք կապ հաստատել ինձ հետ սոցցանցերում՝ թարմացումների և առանց
          միջնորդի խոսակցություն սկսելու համար։
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <a
          href="https://www.instagram.com/jemma_abajyan/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border border-border/50 bg-background p-3 transition hover:border-foreground/60 hover:bg-foreground/5"
          aria-label="Instagram"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
            alt="Instagram"
            className="h-10 w-10 text-foreground transition group-hover:scale-105"
            loading="lazy"
          />
        </a>

        <a
          href="https://www.facebook.com/jemma.abajyan.3"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border border-border/50 bg-background p-3 transition hover:border-foreground/60 hover:bg-foreground/5"
          aria-label="Facebook"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
            alt="Facebook"
            className="h-10 w-10 text-foreground transition group-hover:scale-105"
            loading="lazy"
          />
        </a>

        <a
          href="https://www.tiktok.com/@jemma_abajyan"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border border-border/50 bg-background p-3 transition hover:border-foreground/60 hover:bg-foreground/5"
          aria-label="TikTok"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
            alt="TikTok"
            className="h-10 w-10 text-foreground transition group-hover:scale-105"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
