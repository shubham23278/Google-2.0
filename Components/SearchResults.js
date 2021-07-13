import PaginantionButton from "../Components/PaginationButton";

function SearchResults({ results }) {
  return (
      <div className="mx-auto w-full pl-3 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-200 text-md mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
              <a href={result.link} className="text-sml dark:text-gray-600">
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="truncate text-xl dark:text-white text-blue-800 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="dark:text-gray-500 line-clamp-4">{result.snippet}</p>
          </div>
        ))}

        <PaginantionButton />
      </div>
  );
}

export default SearchResults;
