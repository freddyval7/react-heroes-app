import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search Heroes"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <CustomBreadcrumbs
        currentPage="Search Heroes"
        // breadcrumbs={[
        //   {
        //     label: "Home",
        //     to: "/",
        //   },
        //   {
        //     label: "Home2",
        //     to: "/",
        //   },
        // ]}
      />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
