import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Web Dev</title>
      </Head>
      <ArticleList articless={articles}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};


// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=7`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export default Home;