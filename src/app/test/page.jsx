export default function page() {
  const response = fetch(process.env.ARTICLE_ALL, { cache: "no-store" }).then(
    (res) => res.json()
  );

  console.log(response);
}
