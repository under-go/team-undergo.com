import Link from "next/link";

import MainLayout from "@/components/Layout/MainLayout";

const page = async () => {
  let entirePosts = await fetch(process.env.ARTICLE_ALL).then((res) =>
    res.json()
  );
  entirePosts = entirePosts.data;

  return (
    <MainLayout>
      {entirePosts.map((post) => {
        return (
          <Link key={post.id} href={`posts/${post.id}`}>
            <div className="border border-blue-500 w-2/5  " />
            <div>
              <h1 className="text-lg">{post.title}</h1>
              <p>{post.summary}</p>
              <p>{post.author.nickname}</p>
              <p>{post.createdAt.slice(0, 10)}</p>
            </div>
          </Link>
        );
      })}
    </MainLayout>
  );
};

export default page;
