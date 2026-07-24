import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoading } from "@/components/PageLoading";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main>
        <PageLoading />
      </main>
      <Footer />
    </>
  );
}
