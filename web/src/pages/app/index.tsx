import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../../lib/withApollo";

const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      title
    }
  }
`;

function Home() {
  const { user } = useUser();
  const { data, loading, error } = useQuery(PRODUCTS_QUERY);

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

// verifica se usuários está autenticado e redireciona para login caso não esteja
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getServerSideProps(req, res));

    return {
      props: {},
    };
  },
});

export default withApollo(Home);
