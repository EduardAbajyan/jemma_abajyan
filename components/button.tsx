import Link from "next/link";

export default function Button({
  href,
  children,
  contentType,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  contentType: "text" | "image";
}>) {
  return (
    <div className="flex flex-col items-stretch justify-center py-0 h-full">
      <Link
        href={href}
        className="h-full w-full flex items-center justify-center"
      >
        {contentType === "text" ? (
          <p
            className={
              "m-0 bg-transparent hover:bg-gray-300 text-amber-400 text-3xl font-calligraphy pt-7 pb-13 my-0 px-4 h-full text-center leading-none rounded-2xl"
            }
          >
            {children}
          </p>
        ) : (
          <div className="h-full w-full flex items-center justify-center py-0">
            {children}
          </div>
        )}
      </Link>
    </div>
  );
}
