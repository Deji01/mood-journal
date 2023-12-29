import { UserButton } from "@clerk/nextjs";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import NewEntryCard from "@/components/NewEntryCard";
import EntryCard from "@/components/EntryCard";
import Link from "next/link";

const getEntries = async () => {
  const user = await getUserByClerkID();
  console.log(user);
  const entries = prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();

  return (
    <main className="grid h-screen w-screen grid-cols-1 sm:grid-rows-[1fr_12fr_1fr] sm:grid-cols-[2fr_9fr_3fr]">
      <header className="col-span-3">
        <div className="h-full w-full px-6 flex items-center justify-end">
          <UserButton />
        </div>
      </header>
      <aside className="border-2 rounded-lg border-slate-50 m-1">
        <div className="h-[100%] self-center m-4 bg-white"></div>
      </aside>
      <section className="border-2 rounded-lg border-slate-50 m-1">
        <div className="grid grid-cols-3 gap-4">
          <NewEntryCard />
          {entries.map((entry) => (
            <Link href={`/journal/${entry.id}`} key={entry.id}>
              <EntryCard entry={entry} />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-2 rounded-lg border-slate-50 m-1">
        <div className="h-[100%] self-center m-4 bg-white"></div>
      </section>
      <footer className="col-span-3"></footer>
    </main>
  );
};

export default JournalPage;
