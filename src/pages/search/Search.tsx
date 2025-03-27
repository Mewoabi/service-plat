import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchMinus } from "@fortawesome/free-solid-svg-icons";

// domain
import { Jobs } from "../../types/JobPost";

// components
import JobComponent from "../../components/JobCard";
import JobComponentSkeleton from "../../components/JobCardSkeleton";
// (Optional) Navbar
// ^ If you have a specialized navbar for searching, import it here
import SearchJobsNavbar from "../../components/SearchJobsNavbar";

// api
import { myApi } from "../../api/axios";
import { somejobs } from "../../api/data";

interface ApiResponse {
  items: Jobs[];
  next_cursor: string | null;
}

const isDuplicateData = (newItems: Jobs[], existingItems: Jobs[]): boolean => {
  if (newItems.length === 0) return true;
  const existingIds = new Set(existingItems.map((item) => item.user_id));
  return newItems.some((item) => existingIds.has(item.user_id));
};

const SearchList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const isFetching = useRef(false);

  const fetchEnterprises = async (initialLoad = false) => {
    if (isFetching.current || (!hasMore && !initialLoad)) return;
    isFetching.current = true;
    await new Promise((resolve) => setTimeout(resolve, 300));
    setLoading(true);

    try {
      const city = searchParams.get("city")?.toLowerCase();
      const query = searchParams.get("query")?.toLowerCase();
      const sector = searchParams.get("sector")?.toLowerCase();
      const country = searchParams.get("country")?.toLowerCase();

      const params: Record<string, string | number> = {
        limit: 20,
        search: query || "",
        country: country || "",
        city: city || "",
        activity_sector: sector || "",
      };

      if (cursor && !initialLoad) {
        params.cursor = cursor;
      }

      const response = await myApi().get<ApiResponse>("", { params });
      const { items, next_cursor } = response.data;

      if (!initialLoad && isDuplicateData(items, jobs)) {
        setHasMore(false);
        setCursor(null);
        return;
      }

      setJobs((prev) => (initialLoad ? items : [...prev, ...items]));

      if (!next_cursor) {
        setHasMore(false);
        setCursor(null);
      } else {
        setCursor(next_cursor);
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching enterprises:", error);
      setHasMore(false);
      setCursor(null);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  useEffect(() => {
    const loadEnterprises = async () => {
      setJobs(somejobs || []);
      setCursor(null);
      setHasMore(true);
      // await fetchEnterprises(true); // If you want to fetch from API
    };
    loadEnterprises();

    return () => {
      setHasMore(false);
      setCursor(null);
    };
  }, [searchParams]);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* (Optional) Navbar for searching, etc. */}
      <SearchJobsNavbar />

      <div className="py-8 pt-4">
        <InfiniteScroll
          dataLength={jobs.length}
          next={() => fetchEnterprises()}
          hasMore={hasMore}
          loader={
            <div className="container mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <JobComponentSkeleton key={`skeleton-${index}`} />
              ))}
            </div>
          }
          endMessage={
            jobs.length > 0 && (
              <p className="py-4 text-center">
                <b>Vous avez vu toutes les entreprises</b>
              </p>
            )
          }
        >
          {loading && jobs.length === 0 ? (
            // While loading the first time, show skeletons
            <div className="container mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <JobComponentSkeleton key={`skeleton-${index}`} />
              ))}
            </div>
          ) : jobs.length > 0 ? (
            <div className="container mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {jobs.map((enterprise: Jobs, index: number) => (
                <JobComponent
                  key={index}
                  user_id={enterprise.user_id}
                  name={enterprise.name}
                  cover={enterprise.cover}
                  logo_url={enterprise.logo_url}
                  image_url={enterprise.image_url}
                  description={enterprise.description}
                  is_following={enterprise.is_following}
                  product_count={enterprise.product_count}
                  follower_count={enterprise.follower_count}
                  activity_sector={enterprise.activity_sector}
                />
              ))}
            </div>
          ) : (
            // No results
            <div className="flex min-h-screen flex-col items-center justify-center space-y-4 p-12 text-center">
              <FontAwesomeIcon
                icon={faSearchMinus}
                className="text-6xl text-gray-400"
              />
              <h2 className="text-2xl font-bold text-gray-600">
                No results found
              </h2>
              <p className="text-gray-500">
                Try changing your search criteria or check spelling
              </p>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default SearchList;
