import { FC } from "react";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }
  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default page;
