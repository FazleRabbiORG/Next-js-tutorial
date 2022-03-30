import { useRouter } from "next/router";
function Document() {
  const router = useRouter();

  const params = router.query.params || [];

  console.log(params);

  if (params.length == 2) {
    return (
      <h2>
        {" "}
        this page for {params[0]} and {params[1]}{" "}
      </h2>
    );
  }
  if (params.length == 1) {
    return <h2> this page for {params[0]}</h2>;
  }

  return <div>Document home page</div>;
}

export default Document;
