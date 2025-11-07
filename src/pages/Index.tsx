import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const updates = [
    {
      version: "1.20.4",
      title: "Обновление The Trails & Tales",
      date: "7 декабря 2023",
      description: "Новые мобы, блоки и механики крафта. Добавлены археологические находки.",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/d70ff45f-0367-458a-b964-28c1ecf3626e.jpg"
    },
    {
      version: "1.20.0",
      title: "Обновление Cherry Blossom",
      date: "7 июня 2023",
      description: "Вишнёвая древесина, новые рецепты и улучшения игрового процесса.",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/4bf69764-d336-4e71-911e-060d3848f668.jpg"
    },
    {
      version: "1.19.4",
      title: "Обновление The Wild",
      date: "14 марта 2023",
      description: "Новые биомы, мобы и механики выживания в дикой природе.",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/4aee03c8-9aaa-43bd-8341-9dc2612594a7.jpg"
    }
  ];

  const textures = [
    {
      name: "Faithful 64x",
      author: "Faithful Team",
      resolution: "64x64",
      downloads: "10M+",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/d70ff45f-0367-458a-b964-28c1ecf3626e.jpg"
    },
    {
      name: "Sphax PureBDcraft",
      author: "Sphax",
      resolution: "128x128",
      downloads: "8M+",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/4bf69764-d336-4e71-911e-060d3848f668.jpg"
    },
    {
      name: "John Smith Legacy",
      author: "John Smith",
      resolution: "32x32",
      downloads: "5M+",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/4aee03c8-9aaa-43bd-8341-9dc2612594a7.jpg"
    },
    {
      name: "Soartex Fanver",
      author: "Soartex Community",
      resolution: "64x64",
      downloads: "4M+",
      image: "https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/d70ff45f-0367-458a-b964-28c1ecf3626e.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#87CEEB]">
      <nav className="bg-[#654321] border-b-4 border-[#4a3319] minecraft-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7CFC00] border-4 border-[#4a3319]"></div>
            <h1 className="text-2xl font-bold text-white tracking-wider">MINECRAFT INFO</h1>
          </div>
          <div className="flex gap-4">
            <Button className="bg-[#4a3319] hover:bg-[#3a2515] text-white font-bold px-6 py-2 border-4 border-[#2a1810] minecraft-shadow">
              НОВОСТИ
            </Button>
            <Button className="bg-[#4a3319] hover:bg-[#3a2515] text-white font-bold px-6 py-2 border-4 border-[#2a1810] minecraft-shadow">
              ТЕКСТУРЫ
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/8eedec3d-09f0-42f9-a7e1-a5d32efecbef/files/d70ff45f-0367-458a-b964-28c1ecf3626e.jpg')`,
            backgroundSize: '100px 100px',
            imageRendering: 'pixelated'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-[#654321] border-8 border-[#4a3319] p-12 minecraft-shadow mb-8 animate-scale-in">
            <h2 className="text-6xl font-bold text-white mb-4 tracking-wider">MINECRAFT</h2>
            <p className="text-2xl text-[#FFD700] tracking-wide">ВСЁ О ЛУЧШЕЙ ИГРЕ В МИРЕ</p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#7CFC00] hover:bg-[#6FD000] text-[#2a1810] font-bold px-8 py-6 text-xl border-4 border-[#4a3319] minecraft-shadow">
              <Icon name="Download" className="mr-2" size={24} />
              СКАЧАТЬ ИГРУ
            </Button>
            <Button className="bg-[#4169E1] hover:bg-[#3158D0] text-white font-bold px-8 py-6 text-xl border-4 border-[#2a4890] minecraft-shadow">
              <Icon name="Book" className="mr-2" size={24} />
              ГАЙДЫ
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#8B7355] border-y-8 border-[#4a3319]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-[#FFD700] border-4 border-[#4a3319]"></div>
            <h3 className="text-4xl font-bold text-white tracking-wider">НОВОСТИ И ОБНОВЛЕНИЯ</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <Card 
                key={index} 
                className="bg-[#654321] border-4 border-[#4a3319] minecraft-shadow overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="h-48 overflow-hidden border-b-4 border-[#4a3319]">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="p-6">
                  <Badge className="bg-[#FFD700] text-[#2a1810] border-2 border-[#4a3319] mb-3 font-bold">
                    {update.version}
                  </Badge>
                  <h4 className="text-xl font-bold text-white mb-2 tracking-wide">{update.title}</h4>
                  <p className="text-[#D3D3D3] text-sm mb-3">{update.date}</p>
                  <p className="text-white/90 leading-relaxed">{update.description}</p>
                  <Button className="mt-4 bg-[#7CFC00] hover:bg-[#6FD000] text-[#2a1810] font-bold w-full border-2 border-[#4a3319]">
                    ЧИТАТЬ ДАЛЕЕ
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#87CEEB] to-[#5F9EA0]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-[#4169E1] border-4 border-[#4a3319]"></div>
            <h3 className="text-4xl font-bold text-white tracking-wider">ПОПУЛЯРНЫЕ ТЕКСТУРЫ</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {textures.map((texture, index) => (
              <Card 
                key={index} 
                className="bg-white border-4 border-[#4a3319] minecraft-shadow overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="h-48 overflow-hidden border-b-4 border-[#4a3319]">
                  <img 
                    src={texture.image} 
                    alt={texture.name}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-[#2a1810] mb-1 tracking-wide">{texture.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">by {texture.author}</p>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-[#4169E1] text-white border-2 border-[#2a4890] text-xs">
                      {texture.resolution}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Icon name="Download" size={14} />
                      {texture.downloads}
                    </span>
                  </div>
                  <Button className="bg-[#7CFC00] hover:bg-[#6FD000] text-[#2a1810] font-bold w-full border-2 border-[#4a3319] text-sm">
                    СКАЧАТЬ
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1810] border-t-8 border-[#1a0f08] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#7CFC00] border-4 border-[#4a3319]"></div>
            <h4 className="text-2xl font-bold text-white tracking-wider">MINECRAFT INFO</h4>
          </div>
          <p className="text-gray-400 mb-6">Неофициальный информационный портал о Minecraft</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 Minecraft Info. Не связан с Mojang Studios.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
