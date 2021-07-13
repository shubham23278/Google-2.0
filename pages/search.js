import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./../Components/Header";
import { API_KEY, CONTEXT_KEY } from "../Key";
import Response from "../Response";
import SearchResults from "../Components/SearchResults";

function Search({ results }) {
  // console.log(results);
    const router = useRouter();

  return (
      <div className="dark:bg-gray-800">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* Search Results */}
        <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
