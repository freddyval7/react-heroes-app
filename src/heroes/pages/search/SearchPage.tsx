import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";
  const strength = searchParams.get("strength") ?? "0";

  const { data: heroes } = useQuery({
    queryKey: ["search", { name, strength }], // el queryKey se utiliza para suscribir a la query
    queryFn: () =>
      searchHeroesAction({
        name,
        strength: +strength,
      }),
    staleTime: 60 * 1000 * 5,
  });

  return (
    <>
      <CustomJumbotron
        title="Search Heroes"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <CustomBreadcrumbs currentPage="Search Heroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
      {heroes ? <HeroGrid heroes={heroes} /> : <div>Does not exist hero</div>}
    </>
  );
};

export default SearchPage;
