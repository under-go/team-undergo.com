import MainLayout from "@/components/Layout/MainLayout";
import ProgressYScroll from "@/components/ProgressYScroll/ProgressYScroll";
import Mobile from "@/modules/DeviceDisplayOptions/Mobile";
import PC from "@/modules/DeviceDisplayOptions/PC";

export const generateStaticParams = async () => {
  const response = await fetch(process.env.ARTICLE_ALL).then((res) =>
    res.json()
  );

  return response.data.map((post) => ({
    id: post.id.toString(),
  }));
};

const fetchPosts = async (params) => {
  let response = await fetch(process.env.ARTICLE_ALL).then((res) => res.json());

  const post = response.data[params.id - 5];
  // 현재 api/v1/article/all의 data.id가 5부터 시작함에 따라 -5를 적용시켰음. 추후에 수정되면 삭제할 것.
  return post;
};

const page = async ({ params }) => {
  const { id, title, summary, content, author, createdAt } = await fetchPosts(
    params
  );

  return (
    <div>
      <ProgressYScroll />
      <PC>
        <MainLayout>
          <div className="w-full flex justify-center">
            <article className="prose">
              <h1>{title}</h1>
              <div className="flex justify-between">
                <p>{author.nickname}</p>
                <p>{createdAt.slice(0, 10)}</p>
              </div>
              <p>{content}</p>
              <p>{content}</p>
              <p>{content}</p>
            </article>
          </div>
        </MainLayout>
      </PC>
      <Mobile></Mobile>
    </div>
  );
};

export default page;
