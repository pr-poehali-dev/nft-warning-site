import { useState } from "react";
import NeonButton from "@/components/ui/neon-button";
import Icon from "@/components/ui/icon";

const CreateNFTSection = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="neon-text">Создавайте</span>{" "}
            <span className="text-cyber-pink">NFT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Загрузите изображение, добавьте описание и минтите уникальный NFT за
            считанные минуты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Upload Area */}
          <div className="space-y-6">
            <div
              className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                dragActive
                  ? "border-cyber-cyan bg-cyber-cyan/5 neon-border"
                  : "border-gray-600 hover:border-cyber-cyan/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
            >
              <Icon
                name="Upload"
                size={48}
                className="mx-auto mb-4 text-gray-400"
              />
              <h3 className="font-orbitron font-bold text-xl mb-2">
                Загрузите изображение
              </h3>
              <p className="text-gray-400 mb-6">
                Перетащите файл сюда или нажмите для выбора
              </p>
              <NeonButton variant="ghost">Выберите файл</NeonButton>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block font-orbitron font-bold text-cyber-cyan mb-2">
                  Название NFT
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-2 border-gray-600 rounded px-4 py-3 focus:border-cyber-cyan focus:outline-none transition-colors"
                  placeholder="Введите название..."
                />
              </div>
              <div>
                <label className="block font-orbitron font-bold text-cyber-cyan mb-2">
                  Описание
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-2 border-gray-600 rounded px-4 py-3 focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Опишите ваш NFT..."
                />
              </div>
            </div>
          </div>

          {/* Preview & Mint */}
          <div className="glass-effect rounded-lg p-8">
            <h3 className="font-orbitron font-bold text-2xl mb-6 text-center">
              <span className="neon-text">Предпросмотр</span>
            </h3>

            <div className="bg-gray-800 rounded-lg aspect-square mb-6 flex items-center justify-center">
              <Icon name="Image" size={64} className="text-gray-600" />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-400">Название:</span>
                <span className="font-orbitron">Не задано</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Создатель:</span>
                <span className="font-orbitron text-cyber-cyan">
                  0x...abc123
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Сеть:</span>
                <span className="font-orbitron text-cyber-purple">
                  Ethereum
                </span>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-orbitron font-bold">
                  Стоимость минтинга:
                </span>
                <span className="font-orbitron text-cyber-green">0.05 ETH</span>
              </div>
              <NeonButton className="w-full" size="lg">
                Минтить NFT
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNFTSection;
