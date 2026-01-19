import React from 'react';
import { Award, Users, Building, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building, value: '5+', label: 'Tamamlanan Proje' },
    { icon: Users, value: '2,000+', label: 'Mutlu Aile' },
    { icon: Award, value: '20+', label: 'Yıllık Deneyim' },
    { icon: Target, value: '1+', label: 'Devam Eden Proje' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <img
          src="/images/IMG_8554.JPG"
          alt="About Us"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
              Biz Kimiz
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Sağlam projeler, dürüst işçilik, sürdürülebilir yapılar.
              <br />
              Biz işimizi geçici değil, kalıcı yaparız.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* About Content */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2006 yılında inşaat sektörüne attığımız ilk adımla birlikte
                  sadece binalar değil, güvene dayalı ilişkiler, sürdürülebilir
                  kalite ve geleceğe değer katan yapılar inşa etmeyi hedefledik.
                  Kurulduğumuz günden bu yana değişen teknolojileri, yenilikçi
                  yaklaşımları ve sektör dinamiklerini yakından takip ederek
                  çalışmalarımızı sürekli geliştirdik.
                </p>
                <p>
                  Bugüne kadar beşten fazla projeyi başarıyla tamamlamanın
                  gururunu taşırken, şu anda altıncı projemizi aynı titizlik ve
                  kararlılıkla sürdürmekteyiz. Her projemizde rastlantısal
                  değil, planlanmış bir kalite anlayışıyla hareket ediyor;
                  tasarımdan teslim sürecine kadar her aşamayı detaylı biçimde
                  kurguluyoruz.
                </p>
                <p>
                  Vizyonumuz, yalnızca bugün için değil, gelecek nesiller için
                  de güvenli, estetik ve dayanıklı yaşam alanları üretmek;
                  sektörde örnek gösterilen, yenilikçi ve güvenilir bir marka
                  olmaktır. İnşa ettiğimiz her yapıda bu vizyonu hayata
                  geçiriyor, attığımız her adımda kaliteyi temel ilke olarak
                  benimsiyoruz.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/IMG_8553.JPG"
                alt="Our Work"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yaptığımız her işte bizi yönlendiren temel ilkeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kalite
              </h3>
              <p className="text-gray-600">
                En yüksek kalite standartlarında projeler geliştiriyoruz.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Müşteri Memnuniyeti
              </h3>
              <p className="text-gray-600">
                Müşterilerimizin beklentilerini aşmak için çalışırız.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Yenilikçilik
              </h3>
              <p className="text-gray-600">
                Modern çözümler ve yenilikçi tasarımlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
