export async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  return res.json();
}
