import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <h1 className="text-5xl! font-bold font-armenian mt-15! mb-5!">Պատկերասրահ</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="Gallery item"
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src={
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={250}
              height={250}
              className="h-auto max-w-full rounded-base"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
