import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../../lib/withApollo";

function Home({ data }) {
  const { user } = useUser();
  // const { data, loading, error } = useGetProductsQuery();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data.products, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

// verifica se usuários está autenticado e redireciona para login caso não esteja
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return await getServerPageGetProducts({}, ctx);
  },
});

export default withApollo(ssrGetProduct.withPage()(Home));
