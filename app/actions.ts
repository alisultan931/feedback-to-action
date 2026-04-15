'use server';

export async function updateCardStatus(
  recordId: string,
  status: 'Accept' | 'Reject'
): Promise<void> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  const token = process.env.AIRTABLE_PAT;

  const url = `https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`;

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        'Accept/Reject': status,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`Airtable update error: ${res.status} ${res.statusText}`);
  }
}
