import { NextResponse } from 'next/server'
import * as fs from "fs"

export async function GET(request) {
  let blog = [];
  let content;
  const files = await fs.promises.readdir("./blogdata");
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    content = await fs.promises.readFile(('./blogdata/'+item), { encoding: 'utf8' })
    blog.push(JSON.parse(content))
    
  }
  return NextResponse.json(blog, { status: 200 })
}

