import Navigation from "@/components/Navigation";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-orbitron font-bold text-4xl mb-8">
            <span className="text-cyber-purple">News</span>
          </h1>
          <p className="text-xl text-gray-300">
            Новости NFT находятся в разработке...
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
