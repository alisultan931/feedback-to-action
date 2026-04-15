import { CategoryList } from "@/components/category-list";
import { getActiveCards } from "@/lib/airtable";

export default async function Page() {
  const records = await getActiveCards();

  const categories = records.map((record) => ({
    id: record.id,
    title: `Heard: ${record.fields.Feedback ?? ''}`,
    subtitle: record.fields.Action ? `Did: ${record.fields.Action}` : undefined,
    categoryType: record.fields.Type,
    status: record.fields['Accept/Reject'],
  }));

  return (
    <div className="min-h-screen flex items-center justify-center">
      <CategoryList
        title="We heard ____. So we did ____."
        subtitle="Every visible action ties back to a listening insight. Every action is led by a Your Way Champion."
        categories={categories}
      />
    </div>
  );
}
