import { useGetProfilesQuery } from "@/generated/graphql"

const Profiles = () => {
  const { loading, error, data } = useGetProfilesQuery();

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
