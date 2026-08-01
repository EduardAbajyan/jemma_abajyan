export default function Footer() {
  return (
    <footer className="footer flex items-center static justify-center gap-30 p-2 bg-background text-foreground">
      <p className="text-sm text-foreground">
        &copy; {new Date().getFullYear()} Jemma Abajyan. All rights reserved.
      </p>
    </footer>
  );
}