import NeonButton from "@/components/ui/neon-button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "float 20s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-8">
          <span className="neon-text animate-neon-pulse">CREATE</span>
          <br />
          <span className="text-cyber-pink">NFT FUTURE</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Входите в киберпространство. Создавайте уникальные NFT. Минтите
          будущее цифрового искусства.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NeonButton size="lg" className="min-w-[200px]">
            Создать NFT
          </NeonButton>
          <NeonButton variant="secondary" size="lg" className="min-w-[200px]">
            Изучить рынок
          </NeonButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-cyber-cyan/20">
          <div className="text-center">
            <div className="font-orbitron font-bold text-3xl neon-text mb-2">
              15.2K+
            </div>
            <div className="text-gray-400">NFT создано</div>
          </div>
          <div className="text-center">
            <div className="font-orbitron font-bold text-3xl text-cyber-pink mb-2">
              8.7K+
            </div>
            <div className="text-gray-400">Активных создателей</div>
          </div>
          <div className="text-center">
            <div className="font-orbitron font-bold text-3xl text-cyber-purple mb-2">
              142 ETH
            </div>
            <div className="text-gray-400">Общий объем торгов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
