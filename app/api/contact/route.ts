import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME!;
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN!;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Send to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    const airtableRes = await axios.post(
      airtableUrl,
      {
        records: [
          {
            fields: {
              Name: data.name,
              Email: data.email,
              Company: data.company,
              Requirements: data.requirements,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}
