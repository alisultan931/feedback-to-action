export interface AirtableFields {
  Feedback?: string;
  Action?: string;
  Type?: string;
  'Activate for Website?'?: boolean;
}

export interface AirtableRecord {
  id: string;
  fields: AirtableFields;
}

export async function getActiveCards(): Promise<AirtableRecord[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  const token = process.env.AIRTABLE_PAT;

  const viewId = process.env.AIRTABLE_VIEW_ID;
  const url = `https://api.airtable.com/v0/${baseId}/${tableId}${viewId ? `?view=${encodeURIComponent(viewId)}` : ''}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Airtable error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const records = data.records as AirtableRecord[];
  return records.filter((r) => r.fields['Activate for Website?'] === true);
}
