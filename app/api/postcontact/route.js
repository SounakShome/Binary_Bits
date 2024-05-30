import { NextResponse } from "next/server";
import * as fs from "fs"

export async function POST(req) {
  const data = await req.json();
  let file = await fs.promises.readdir("./contactdata");
  fs.promises.writeFile(`./contactdata/${file.length + 1}.json`, JSON.stringify(data));
  return NextResponse.json(data)
}
export async function GET(req){
    return NextResponse.json({message: "This is the api route for contact form"})
}