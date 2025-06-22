import Navigation from "@/components/Navigation";

const Marketplace = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-orbitron font-bold text-4xl mb-8">
            <span className="neon-text">Marketplace</span>
          </h1>
          <p className="text-xl text-gray-300">
            Торговая площадка находится в разработке...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
