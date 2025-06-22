import NeonButton from "@/components/ui/neon-button";
import Icon from "@/components/ui/icon";

const FeaturedNFTs = () => {
  const nfts = [
    {
      id: 1,
      title: "Cyber Warrior #001",
      creator: "NeonArtist",
      price: "2.5 ETH",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      likes: 245,
    },
    {
      id: 2,
      title: "Digital Dreams",
      creator: "FutureVision",
      price: "1.8 ETH",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
      likes: 189,
    },
    {
      id: 3,
      title: "Neon Genesis",
      creator: "CyberCreator",
      price: "3.2 ETH",
      image:
        "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=400&h=400&fit=crop",
      likes: 312,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="text-cyber-pink">Популярные</span>{" "}
            <span className="neon-text">NFT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Изучите самые горячие NFT от ведущих создателей киберпространства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="glass-effect rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute top-4 right-4 glass-effect rounded-full p-2">
                  <Icon name="Heart" size={20} className="text-cyber-pink" />
                  <span className="ml-1 text-sm font-orbitron">
                    {nft.likes}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl mb-2 group-hover:text-cyber-cyan transition-colors">
                  {nft.title}
                </h3>
                <p className="text-gray-400 mb-4">by {nft.creator}</p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Текущая цена</p>
                    <p className="font-orbitron font-bold text-cyber-green text-lg">
                      {nft.price}
                    </p>
                  </div>
                  <NeonButton variant="ghost" size="sm">
                    Купить
                  </NeonButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <NeonButton variant="secondary" size="lg">
            Посмотреть все NFT
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNFTs;
