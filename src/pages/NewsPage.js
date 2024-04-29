import React from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
