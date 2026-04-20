import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/C1DqKXQ6/Snimok-ekrana-2026-02-17-v-22-01-15.png",
      caption: "Dictados gráficos"
    },
    {
      src: "https://i.postimg.cc/pT8Fd46Q/Snimok-ekrana-2026-02-17-v-22-02-02.png",
      caption: "Lego-codificación"
    },
    {
      src: "https://i.postimg.cc/pT8Fd46B/Snimok-ekrana-2026-02-17-v-22-15-38.png",
      caption: "Ejercicio 'Oreja-Nariz'"
    },
    {
      src: "https://i.postimg.cc/tTPxgwMB/Snimok-ekrana-2026-02-17-v-22-04-28.png",
      caption: "Dibujo en espejo"
    }
  ];

  return (
    <section className="py-12 bg-white max-w-lg mx-auto overflow-hidden border-t border-gold/10">
      <div className="px-4 mb-6">
        <h2 className="text-2xl font-bold text-navy mb-2">Mira cómo son las actividades</h2>
        <p className="text-navy/60 italic font-medium">"¡Una vez más, mamá!" — la frase que oirás en lugar de "¿Puedo jugar con el teléfono?"</p>
      </div>

      <div className="px-4 mb-8">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-sand">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7r55JwHBar0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 no-scrollbar">
        {images.map((img, idx) => (
          <div key={idx} className="snap-center shrink-0 w-[320px]">
            <div className="rounded-xl overflow-hidden shadow-lg mb-3 border border-sand">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <p className="text-center font-medium text-navy/80">{img.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
