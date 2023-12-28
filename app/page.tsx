import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="mr-6 hidden lg:flex" href="/">
          <BookIcon className="h-6 w-6" />
          <span className="sr-only">Mood Journal</span>
        </Link>
      </header>
      <section className="w-full mt-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Mood Journal"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={310}
              src="/tyler-nix-q-motCAvPBM-unsplash.webp"
              width={550}
              sizes="100vw"
              // Make the image display full width
              style={{
                width: "100%",
                height: "auto",
              }}
            />

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Improve your mood with journaling.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Mood Journal helps you understand your feelings and improve
                  your mood through the power of journaling.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Keep track of your feelings and emotions.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Reflect on your day with daily journal prompts.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Understand patterns in your mood over time.
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="bg-black text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-800">
                Start Journaling
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
  // You can add specific props here if needed
  // For example: className?: string;
}

function BookIcon(props: CheckIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
