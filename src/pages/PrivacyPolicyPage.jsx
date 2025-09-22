import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 text-center">
                Aviso de <span className="text-purple-600">Privacidad</span>
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p><strong>Última actualización:</strong> 15 de Septiembre de 2025</p>
                
                <p>El Instituto de las Juventudes de Zapopan, con domicilio en [Dirección del Instituto], es el responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, y demás normatividad que resulte aplicable.</p>

                <h2>¿Qué datos personales recabamos y para qué fines?</h2>
                <p>Los datos personales que recabamos de usted (nombre completo, fecha de nacimiento, correo electrónico, número de WhatsApp) los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                <ul>
                  <li>Registrar su participación en nuestros programas, convocatorias y eventos.</li>
                  <li>Contactarlo para dar seguimiento a sus solicitudes y participación.</li>
                  <li>Enviar información relevante sobre las actividades del Instituto.</li>
                  <li>Generar estadísticas para la mejora de nuestros servicios (de forma anónima).</li>
                </ul>

                <h2>Fundamento para el tratamiento de datos personales</h2>
                <p>El tratamiento de sus datos personales se realiza con fundamento en los artículos [Artículo aplicable] de la Ley de Transparencia y Acceso a la Información Pública del Estado de Jalisco y sus Municipios, y [Artículo aplicable] de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Jalisco y sus Municipios.</p>

                <h2>Transferencia de datos personales</h2>
                <p>Le informamos que sus datos personales no serán transferidos, compartidos ni cedidos a terceros, salvo en los casos previstos por la legislación aplicable o por requerimiento de una autoridad competente.</p>

                <h2>¿Dónde puedo ejercer mis derechos ARCO?</h2>
                <p>Usted podrá ejercer sus derechos de acceso, rectificación, cancelación u oposición de sus datos personales (derechos ARCO) directamente ante la Unidad de Transparencia de este Instituto, ubicada en [Dirección de la Unidad de Transparencia], o bien, a través de la Plataforma Nacional de Transparencia.</p>

                <h2>Cambios al aviso de privacidad</h2>
                <p>En caso de que exista un cambio en este aviso de privacidad, lo haremos de su conocimiento a través de nuestro sitio web oficial.</p>
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