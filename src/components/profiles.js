import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const OUR_FIRST_QUERY = gql`
  query {
    profile {
      id
      name
    }
  }
`;

const Profiles = () => {
  const { loading, error, data } = useQuery(OUR_FIRST_QUERY);

  if (loading) return <p>loading</p>;
  if (error) return <p>ダメです！:{error.toString()}</p>;
  return (
    <div>
      {data.profile.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

const Profile = ({ profile }) => {
  return (
    <p>
      {profile.id}: {profile.name}
    </p>
  );
};

export default Profiles;
