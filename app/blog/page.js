"use client";
import React, { useState, useEffect } from "react";
import style from "../../styles/blog.module.css";
import Link from "next/link";
import { fetchBlogs } from "../components/fetchBlog";

export default function Blog() {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs().then((res) => {
      const data = res;
      setBlogs(data);
    });
  }, []);
  
  return (
    <div className="p-10">
      <main className={style.main}>
        <h1 className={style.heading}>Blogs</h1>
        {Blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug} className="blogItem p-5">
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2 className="font-bold">{blogItem.title}</h2>
                <p className="max-w-4xl">
                  {blogItem.content.substr(0, 140)}...
                </p>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
