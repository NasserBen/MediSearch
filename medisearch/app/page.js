import SearchBox from "@/components/searchBox";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Header />
      <SearchBox />
    </main>
  );
}
