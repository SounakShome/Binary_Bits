import React from "react";
import style from "../../../styles/blogpost.module.css";

export default async function slug({ params , searchParams }) {
  const Data = await fetchBlogData(params);
  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1 className="font-medium">{Data && Data.title}</h1>
        <div className="pt-4">
          {Data && Data.content}
        </div>
      </main>
    </div>
  );
};

export async function fetchBlogData(params) {
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${params.slug}`, {cache: "no-store"});
  return res.json()
}

