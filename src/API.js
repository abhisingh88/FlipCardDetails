const fetchFunc = async () => {
  const response = await fetch(
    "https://api.slingacademy.com/v1/sample-data/photos/69"
  );
  const result = await response.json();
  console.log("api : ", result);
  return result;
};

export default fetchFunc;

// const { data, isLoading, isError, isSuccess, error } = useQuery(
//   ["imgData"],
//   fetchFunc
// );

// if (isLoading) {
//   return <Skeleton variant="sqaure" width={210} height={210} />;
// }
// if (isSuccess) {
//   console.log("file;", data.photo);
// }
// if (isError) {
//   // console.log(response.error);
//   return <h3>${error}</h3>;
// }
