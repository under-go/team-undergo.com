import Link from "next/link";

const page = async () => {
  let entirePosts = await fetch(process.env.ARTICLE_ALL, {
    cache: "no-store",
  }).then((res) => res.json());
  entirePosts = entirePosts.data;

  return (
    <div className="pt-24 w-full flex justify-center dark:text-zinc-200 transition-colors duration-300">
      <div className="w-1/3">
        {entirePosts.reverse().map((post) => {
          return (
            <div key={post.id}>
              <Link href={`posts/${post.id}`}>
                <h1 className="text-2xl font-semibold">{post.title}</h1>
                <p className="py-2 font-light">{post.summary}</p>
                <div className="flex justify-between font-extralight">
                  <p className="text-sm">{post.author.nickname}</p>
                  <p className="text-sm">{post.createdAt.slice(0, 10)}</p>
                </div>
              </Link>
              <hr className="border my-8 dark:border-zinc-500 transition-colors duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
