import Link from "next/link";
import { fetchBlogs } from "./components/fetchBlog";

export default async function Home() {
  const data = await fetchBlogs();
  const Blogs = (data).slice(0, ((data.length)/2)+1);
  return (
    <main>
      <div className="flex flex-col items-center justify-between my-5">
        <div>
          <h1 className="font-bold">Binary Bits</h1>
        </div>
        <div>
          <p className="p-b-10">
            Every BIT of the information is important.
          </p>
        </div>

        <div className="blogs p-10 max-w-[60vw]">
          <h2 className="font-bold">Latest Blogs</h2>
          {Blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className="blogItem p-5">
                <h2 className="font-bold">{blogItem.title}</h2>
                <p className="max-w-4xl">
                  {blogItem.content.substr(0, 140)}...
                </p>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <button className=" text-white text-sm font-bold py-2 border-slate-400 border-solid rounded">
                    Read More
                  </button>
                </Link>
              </div>
            );
          })}
          <Link href={`/blog`}>
            <button className=" text-white text-md font-bold py-2 border-slate-400 border-solid rounded">
              View all blogs...
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
