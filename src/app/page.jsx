import Link from "next/link";

import MainLayout from "@/components/Layout/MainLayout";

const page = async () => {
  let entirePosts = await fetch(process.env.ARTICLE_ALL, {}).then((res) =>
    res.json()
  );
  entirePosts = entirePosts.data;

  return (
    <MainLayout>
      {entirePosts.map((post) => {
        return (
          <div key={post.id} className="my-4">
            <Link href={`posts/${post.id}`}>
              <h1 className="text-2xl">{post.title}</h1>
              <p>{post.summary}</p>
              <div className="flex justify-between">
                <p className="text-sm">{post.author.nickname}</p>
                <p className="text-sm">{post.createdAt.slice(0, 10)}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </MainLayout>
  );
};

export default page;
