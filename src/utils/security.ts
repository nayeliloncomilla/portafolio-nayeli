// Utilidades de seguridad para el portafolio

/**
 * Sanitiza texto para prevenir XSS
 */
export const sanitizeText = (text: string): string => {
  return text
    .replace(/[<>]/g, '') // Eliminar caracteres peligrosos
    .trim()
    .substring(0, 1000); // Limitar longitud
};

/**
 * Valida si una URL es segura
 */
export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Solo permitir https y http
    return ['https:', 'http:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

/**
 * Valida formato de email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Valida número de teléfono chileno
 */
export const isValidChileanPhone = (phone: string): boolean => {
  // Formato: +56 9 XXXXXXXX
  const phoneRegex = /^\+56\s9\s\d{8}$/;
  return phoneRegex.test(phone);
};

/**
 * Configuración de contacto con validación
 */
export const getSecureContactInfo = () => {
  const contactInfo = {
    email: "nayeliloncomilla19@gmail.com",
    phone: "+56 9 30513364",
    location: "Santiago, Chile",
    linkedin: "https://www.linkedin.com/in/nayeliloncomilla/",
    github: "https://github.com/nayeliloncomilla",
    instagram: "https://www.instagram.com/_.m0nster_/",
  };

  // Validar que todas las URLs sean seguras
  const validatedInfo = {
    ...contactInfo,
    linkedin: isValidUrl(contactInfo.linkedin) ? contactInfo.linkedin : '#',
    github: isValidUrl(contactInfo.github) ? contactInfo.github : '#',
    instagram: isValidUrl(contactInfo.instagram) ? contactInfo.instagram : '#',
  };

  return validatedInfo;
};

/**
 * Genera URL de Gmail con validación
 */
export const getSecureGmailUrl = (email: string): string => {
  if (!isValidEmail(email)) {
    console.warn('Email inválido proporcionado');
    return '#';
  }
  
  const encodedEmail = encodeURIComponent(email);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`;
};