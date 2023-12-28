import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <header className="flex w-full shrink-0 items-center justify-between p-4 md:p-6 mb-16">
        <Link className="mr-6 hidden lg:flex" href="/">
          <BookIcon className="h-6 w-6" />
          <span className="sr-only">Mood Journal</span>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </header>

      <div className="bg-white flex justify-center items-center text-black">
        <div className="w-full max-w-[600px] mx-auto">
          <div className="flex flex-col justify-center space-y-4 mb-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Improve your mood with journaling.
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mood Journal helps you understand your feelings and improve your
                mood through the power of journaling.
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
            <div>
              <Link href="/journal">
                <button className="bg-black text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-800">
                  Start Journaling
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
