import type { FC } from "react";
import { useTitle } from "./hooks/use-title";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search } from "lucide-react";
import { cn } from "./lib/utils";
import type { ICard } from "./utils/types/card";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./components/ui/card";

const App: FC = () => {
  useTitle("Homepage");
  const [search, setSearch] = useState<string>();
  const baseSearchURL = `https://www.google.com/search?q=${search}&sourceid=chrome&ie=UTF-8`;
  window.addEventListener("keydown", (event: KeyboardEvent) => {
    // Deteksi Ctrl+K
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); // Mencegah search bar Chrome
      event.stopPropagation(); // Opsional: mencegah bubbling ke elemen lain

      // Fokuskan ke elemen search milikmu
      const searchInput: HTMLInputElement | null =
        document.querySelector(".search-bar");
      if (searchInput) {
        searchInput.focus();
      }
    }
    if (event.key.toLowerCase() === "escape") {
      event.preventDefault(); // Mencegah search bar Chrome
      event.stopPropagation(); // Opsional: mencegah bubbling ke elemen lain

      // Fokuskan ke elemen search milikmu
      const searchInput: HTMLInputElement | null =
        document.querySelector(".search-bar");
      if (searchInput) {
        searchInput.blur();
      }
    }
  });

  function handleSearch(search: string) {
    setSearch(search);
  }

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <div className="flex">
        <img src="/logo.svg" className="h-[96px]" />
        <h1 className="text-primary text-8xl font-black mb-5">OMEPAGE</h1>
      </div>
      <div className="flex gap-3 items-center w-[50%] flex-col">
        <form className="w-[100%]">
          <div className="flex gap-3 items-center w-[100%]">
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleSearch(e.target.value);
              }}
              placeholder="Search Someting"
              className="w-[100%] search-bar transition-all"
            />
            <Button
              variant="default"
              size="icon"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                window.location.href = baseSearchURL;
              }}
            >
              <Search />
            </Button>
          </div>
        </form>
        <div className="flex gap-5 items-center mt-5">
          <CustomCard
            title="Youtube"
            description="Good site to find wholesome video and degenerate one."
            className="hover:border-primary hover:cursor-pointer"
            url="https://www.youtube.com"
          />
          <CustomCard
            title="Github"
            description="Best place to store your code."
            className="hover:border-primary hover:cursor-pointer"
            url="https://github.com/"
          />
          <CustomCard
            title="ShadCN"
            description="Best Tailwind Components Library."
            className="hover:border-primary hover:cursor-pointer"
            url="https://ui.shadcn.com"
          />
          <CustomCard
            title="TailwindCSS"
            description="Best CSS framework."
            className="hover:border-primary hover:cursor-pointer"
            url="https://www.tailwindcss.com"
          />
        </div>
      </div>
    </div>
  );
};

const CustomCard: FC<ICard> = ({ description, className, title, url }) => {
  return (
    <a href={url}>
      <Card className={cn("w-[250px] h-[150px]  transition-all", className)}>
        <CardHeader>
          <CardTitle className="text-primary">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
};

export default App;
