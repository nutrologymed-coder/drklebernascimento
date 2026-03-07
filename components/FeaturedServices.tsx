
import React from 'react';
import { motion } from 'motion/react';
import { Scale, Heart, Activity, Leaf } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: "Emagrecimento Clínico",
    description:
      "Protocolos personalizados de perda de peso baseados em evidências científicas, com acompanhamento metabólico completo e resultados sustentáveis.",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Tratamento de Lipedema",
    description:
      "Diagnóstico especializado e tratamento clínico do lipedema com abordagem nutricional, anti-inflamatória e manejo da dor.",
    highlight: true,
  },
  {
    icon: Activity,
    title: "Saúde Metabólica",
    description:
      "Otimização de biomarcadores, controle glicêmico, perfil lipídico e modulação hormonal para performance e longevidade.",
    highlight: false,
  },
  {
    icon: Leaf,
    title: "Nutrologia Clínica",
    description:
      "Suplementação inteligente, correção de micronutrientes e protocolos nutricionais individualizados com base na Duke University.",
    highlight: false,
  },
];

const FeaturedServices: React.FC = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-6"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4 font-black font-body">
            Áreas de Atuação
          </p>
          <h2 className="text-5xl md:text-7xl font-heading text-foreground italic">
            Serviços <span className="text-gold-gradient not-italic font-bold">Especializados</span>
          </h2>
          <div className="h-px w-32 bg-gold/40 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glass-card p-10 md:p-12 group hover:border-gold/40 transition-all duration-500 relative overflow-hidden ${
                service.highlight ? "border-gold/20" : ""
              }`}
            >
              <div className="flex items-start gap-8">
                <div className="p-4 bg-gold/10 rounded-sm shrink-0 group-hover:bg-gold/20 transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-heading text-foreground group-hover:text-gold transition-colors duration-500">
                    {service.title}
                    {service.highlight && (
                      <span className="ml-4 text-[9px] tracking-[0.2em] uppercase bg-gold/15 text-gold px-3 py-1 font-black align-middle border border-gold/20 font-body">
                        Destaque
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light font-body">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
