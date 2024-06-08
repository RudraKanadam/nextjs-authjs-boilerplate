import GlobalNavBar from "@/components/global/navbar";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <GlobalNavBar />

      <div className="overflow-hidden bg-transparent w-full">Hello</div>
    </main>
  );
}
