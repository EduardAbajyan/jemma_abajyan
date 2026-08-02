import Pricing from "@/components/pricing";
import SocialMedia from "@/components/socialMedia";
import Register from "@/components/register";

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-136px)] w-11/12 mb-5 *:bg-background text-foreground flex flex-col justify-center items-center gap-10">
      <Pricing />
      <SocialMedia />
      <Register />
    </div>
  );
}
