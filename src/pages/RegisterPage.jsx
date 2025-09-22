import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';

const RegisterPage = () => {
  const location = useLocation();
  const [registrationFor, setRegistrationFor] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');
    const name = searchParams.get('name');
    if (type && name) {
      setRegistrationFor(`Registro para ${type}: ${name}`);
    } else {
      setRegistrationFor('Registro General');
    }
  }, [location]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    birthDate: '',
    privacy: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        variant: "destructive",
        title: "Error de validación",
        description: "Debes aceptar el aviso de privacidad para continuar.",
      });
      return;
    }
    
    const submissionData = { ...formData, registration_for: registrationFor };
    console.log(submissionData);

    toast({
      title: "🎉 ¡Registro enviado!",
      description: "Gracias por unirte. Pronto nos pondremos en contacto contigo. 🚀",
    });
    
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      birthDate: '',
      privacy: false,
    });
  };

  return (
    <>
      <Helmet>
        <title>Registro | Instituto de las Juventudes de Zapopan</title>
        <meta name="description" content="Únete a la comunidad de jóvenes agentes de cambio de Zapopan. ¡Regístrate ahora!" />
      </Helmet>
      <Header />
      <main className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <h1 className="text-5xl lg:text-6xl font-black text-gray-800 mb-6">
                Estás a un paso de ser un <span className="text-purple-600">agente de cambio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Completa este formulario para unirte a nuestra red de jóvenes. Recibirás información exclusiva sobre programas, becas, eventos y oportunidades para transformar tu entorno.
              </p>
              <img class="w-full h-auto rounded-2xl shadow-lg" alt="Jóvenes sonriendo y colaborando en un proyecto" src="https://images.unsplash.com/photo-1564531718001-9813bc3fd35d" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-center mb-2">{registrationFor}</h2>
              <p className="text-center text-gray-500 mb-8">Completa tus datos para aplicar.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="font-semibold text-gray-700">Nombre Completo</Label>
                  <Input id="fullName" type="text" placeholder="Tu nombre aquí" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email" className="font-semibold text-gray-700">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="ejemplo@correo.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="font-semibold text-gray-700">Número de WhatsApp</Label>
                  <Input id="whatsapp" type="tel" placeholder="33 1234 5678" value={formData.whatsapp} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="birthDate" className="font-semibold text-gray-700">Fecha de Nacimiento</Label>
                  <Input id="birthDate" type="date" value={formData.birthDate} onChange={handleChange} required className="appearance-none"/>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={handleCheckboxChange} />
                  <Label htmlFor="privacy" className="text-sm font-normal text-gray-600 cursor-pointer">
                    He leído y acepto el <Link to="/aviso-de-privacidad" target="_blank" className="text-purple-600 hover:underline font-medium">aviso de privacidad</Link>.
                  </Label>
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-full text-lg py-6">
                  ¡Aplicar ahora!
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;