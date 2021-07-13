import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs</Link>
        </li>
        <li>
          <Link href="/news/yeah">Yeah</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
