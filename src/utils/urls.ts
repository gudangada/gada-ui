type QueryParamMap = {
  [key: string]: string;
};

export const getQueryParams = (url: string): QueryParamMap => {
  const queryParams: QueryParamMap = {};
  const queryStringStartIndex = url.indexOf("?");
  const path = url.slice(0, queryStringStartIndex);

  if (queryStringStartIndex < 0) {
    return { path };
  }

  const queryString = url.slice(queryStringStartIndex + 1);

  const searchParams = new URLSearchParams(queryString);
  searchParams.forEach((value, key) => {
    if (queryParams[key]) {
      // Handle cases like ?key=value1&key=value2&key=value3 will return as key=value1,value2,value3
      queryParams[key] = queryParams[key] + "," + value;
    } else {
      queryParams[key] = value;
    }
  });

  return { ...queryParams, path };
};
