import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get("slug");
        const file = await fs.readFile(
            process.cwd() + `/blogdata/${slug}.json`,
            "utf8"
        );
        const data = JSON.parse(file);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({error: "No such blog found"}, { status: 500 });
    }
}
