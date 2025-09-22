import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Aviso de Privacidad | Instituto de las Juventudes de Zapopan</title>
        <meta name="description" content="Conoce cómo protegemos y utilizamos tus datos personales en el Instituto de las Juventudes de Zapopan." />
      </Helmet>
      <Header />
      <main className="bg-white">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-center">
                Elementos Estratégicos para el <span className="text-purple-500">Desarrollo de Zapopan</span>
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl mb-2 text-gray-600 font-bold">Misión Institucional</h3>
                <p className="mb-8">Propiciar el desarrollo integral y sostenible, trabajando con eficiencia, 
                transparencia y responsabilidad para mejorar la calidad de vida de toda la 
                ciudadanía. A través de políticas públicas innovadoras, servicios de calidad 
                y programas inclusivos, buscamos atender las necesidades presentes 
                sin comprometer el bienestar de las futuras generaciones. Promovemos 
                una cultura de participación activa, colaboración y rendición de cuentas, 
                asegurando que cada voz sea escuchada y cada acción esté orientada a la 
                equidad, la seguridad y el desarrollo compartido.</p>

                <h3 className="text-2xl mb-2 text-gray-600 font-bold">Zapopan Municipio</h3>
                <p className="mb-8">Es reconocido por contar con una sociedad trabajadora, solidaria y 
participativa, con un centro histórico de belleza arquitectónica y diseño 
urbano de clase mundial, extensas áreas naturales y forestales, jardines, 
parques de recreación, museos y centros culturales que combinan con la 
modernidad de su infraestructura urbana, y con uno de los  patrimonios 
culturales e inmateriales de la humanidad más relevantes en México como 
lo es la Romería; líder en la atracción de inversiones a través de sus sectores 
productivos, con una destacada oferta de servicios educativos, culturales, 
profesionales, turísticos, ecológicos y un sistema de atención médica 
reconocido y de calidad, con un gobierno cercano, abierto y eficiente en la 
administración de los recursos públicos, que impulsa el desarrollo sostenible 
de la ciudad, brinda servicios públicos oportunos que generan bienestar a las 
personas que habitan, transitan o desempeñan alguna actividad económica 
o social en Zapopan, en especial las niñas y los niños, en un ambiente de paz, 
legalidad, orden social, inclusión, seguridad, innovación y productividad.</p>

                <h3 className="text-2xl mb-2 text-gray-600 font-bold">Zapopan Ciudad de las Niñas y los Niños</h3>
                <p className="mb-8">En Zapopan se respetan los derechos de todas las personas, en especial de 
las niñas y los niños, a través del trato digno para generar oportunidades de 
desarrollo integral, de manera plural e incluyente, para reconstruir el tejido 
social dentro del marco normativo, la justicia y el orden, donde se promueve 
el respeto, la tolerancia, la equidad, la igualdad, la solidaridad y todo aquel 
valor que genere la sana convivencia.</p>

                <h3 className="text-2xl mb-2 text-gray-600 font-bold">Visión 2027</h3>
                <p className="mb-8">Ser un gobierno que propicie el desarrollo integral y sostenible, trabajando 
con eficiencia, transparencia y responsabilidad para mejorar la calidad de 
vida de las personas. A través de políticas públicas innovadoras, servicios de 
calidad y programas inclusivos, buscamos atender las necesidades presentes 
sin comprometer el bienestar de las futuras generaciones. Promovemos 
una cultura de participación activa, colaboración y rendición de cuentas, 
asegurando que cada voz sea escuchada y cada acción esté orientada a la 
equidad, la seguridad y el desarrollo compartido.</p>

                <h3 className="text-2xl mb-2 text-gray-600 font-bold">Visión 2030</h3>
                <p className="mb-8">Ser el municipio líder en el país en sustentabilidad, prosperidad, prevención 
social, equidad, igualdad y dominio de las herramientas de la inteligencia digital 
y tecnológica, con un marco normativo para mitigar los efectos del cambio 
climático y el deterioro ecológico, con ecosistemas saludables, energías 
limpias, planificación urbana estratégica para transitar en armonía en la 
metrópoli, con un gobierno cercano, innovador y de alta profesionalización, 
que contribuye al crecimiento económico articulado y al bienestar de una 
comunidad solidaria, sana, educada e incluyente.</p>

                <h3 className="text-2xl mb-2 text-gray-600 font-bold">Valores Institucionales</h3>
                <p className="mb-8">Los valores institucionales que guiarán las acciones de todas las personas 
servidores públicos del Gobierno Municipal de Zapopan son:</p>
                <h6 className="ml-4 text-lg mb-1 text-purple-600 font-bold flex items-center gap-2"><BookOpen size={16} /> HONESTIDAD</h6>
                <p className="ml-4 mb-6">Desempeñar las actividades con integridad y respeto al estado de derecho 
en un clima de rectitud, responsabilidad y confianza.</p>
                <h6 className="ml-4 text-lg mb-1 text-purple-600 font-bold flex items-center gap-2"><BookOpen size={16} /> RESPETO</h6>
                <p className="ml-4 mb-6">Brindar un trato cordial, cercano, digno, equitativo e incluyente, donde se 
destaque el interés público.</p>
                <h6 className="ml-4 text-lg mb-1 text-purple-600 font-bold flex items-center gap-2"><BookOpen size={16} /> TRANSPARENCIA</h6>
                <p className="ml-4 mb-6">Rendir cuentas y proceder con veracidad e información clara, abierta y 
oportuna.</p>
                <h6 className="ml-4 text-lg mb-1 text-purple-600 font-bold flex items-center gap-2"><BookOpen size={16} /> COMPROMISO</h6>
                <p className="ml-4 mb-6">Cumplir con las obligaciones trabajando a otro nivel, sirviendo a la sociedad 
con ética, colaboración, disciplina y mejora continua.</p>
                <h6 className="ml-4 text-lg mb-1 text-purple-600 font-bold flex items-center gap-2"><BookOpen size={16} /> INCLUSIÓN</h6>
                <p className="ml-4 mb-6">Reconocer la identidad y diversidad de todas las personas, para garantizar su 
integridad y el acceso a la igualdad de oportunidades.</p>
                <h6 className="ml-4 text-lg mb-1 text-purple-600 font-bold flex items-center gap-2"><BookOpen size={16} /> EXCELENCIA</h6>
                <p className="ml-4 mb-6">Brindar un servicio público eficiente, transparente y en mejora continua, con 
profesionalismo e innovación para el bienestar ciudadano.</p>

              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;