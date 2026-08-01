import Image from "next/image";
import headerImage from "../public/assets/header.png";
import Button from "@/components/button";

export default function Header() {
  return (
    <header className="header flex items-center justify-center gap-30 p-0 bg-background text-foreground">
      <Button href="/about" contentType="text">
        About
      </Button>
      <Button href="/" contentType="image">
        <Image src={headerImage} alt="Description" width={300} height={120} />
      </Button>
      <Button href="/contact" contentType="text">
        Contact
      </Button>
    </header>
  );
}
