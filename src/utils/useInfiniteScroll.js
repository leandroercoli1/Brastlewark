import { useState } from "react";

export default function useInfiniteScroll(
  listData = [],
  elementsPerPage = 20
) {
  const [data, setData] = useState(listData);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const currentBatch = data.slice(0, currentStartIndex + elementsPerPage);

  const canScroll = currentStartIndex + elementsPerPage < data.length;

  function scroll() {
    if (canScroll) setCurrentStartIndex(currentStartIndex + elementsPerPage);
  }

  return [currentBatch, setData, canScroll, scroll];
}
