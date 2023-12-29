import Editor from "@/components/Editor";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id: string) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      JournalEntryId: {
        userId: user.id,
        id,
      },
    },
  });
  if (!entry) {
    // Handle the case where the entry is not found
    throw new Error("Entry not found");
  } else {
    return entry;
  }
};

interface EntryParams {
  id: string;
}

export default async function EntryPage({ params }: { params: EntryParams }) {
  const entry = await getEntry(params.id);

  if (!entry) {
    // Handle the case where the entry is not found
    return <div>Entry not found</div>;
  }

  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  );
}
