import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaWater,
  FaHandshake,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaArrowDown,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";

import supericeLogo from "/logo.png";

const PHONE_NUMBER = "1700-70-80-91";
const WHATSAPP_NUMBER = "972537777137";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show !== isHeaderVisible) {
        setIsHeaderVisible(show);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeaderVisible]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Sticky Header */}
      <header className={`sticky-header ${isHeaderVisible ? "visible" : ""}`}>
        <div className="container mx-auto px-3 py-2 sm:px-4 sm:py-3 flex flex-wrap sm:flex-nowrap items-center justify-between">
          <img
            src={supericeLogo}
            alt="Super Ice Logo"
            className="logo w-16 h-auto max-h-10 sm:max-h-12"
          />
          <div className="flex items-center gap-2 mt-0">
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="btn bg-primary text-white hover:bg-primary-light flex items-center gap-1 whitespace-nowrap px-2 py-1 sm:px-3 text-xs rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="text-xs" />
              <span className="hidden xs:inline">{PHONE_NUMBER}</span>
              <span className="xs:hidden">התקשר</span>
            </motion.a>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 text-white hover:bg-green-600 flex items-center gap-1 whitespace-nowrap px-2 py-1 sm:px-3 text-xs rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xs" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </motion.a>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/icetubes.png"
            alt="Super Ice bg"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <motion.div
          className="container mx-auto px-4 z-10 text-center text-white relative min-h-screen flex flex-col items-center justify-center py-16"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-60 sm:w-72 md:w-80 mx-auto mb-6 sm:mb-8"
          >
            <img
              src={supericeLogo}
              alt="Super Ice Logo"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-primary-light"
          >
            סופר אייס
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light tracking-wide"
          >
            החברה הישראלית לייצור ושיווק קוביות קרח ממים טהורים
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 sm:w-24 h-1 bg-primary-light mx-auto mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8"
          >
            איכות בלתי מתפשרת לעסקים
          </motion.p>

          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            className="btn-primary text-sm sm:text-base md:text-xl lg:text-2xl inline-block group relative overflow-hidden mb-12 sm:mb-16 md:mb-20 lg:mb-24 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaPhone className="animate-pulse" />
              התקשרו עכשיו: {PHONE_NUMBER}
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ opacity: arrowOpacity }}
            className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="text-white text-4xl sm:text-5xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            מדוע לבחור בנו?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="feature-card group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="water-icon text-primary text-4xl mb-4">
                <FaWater />
              </div>
              <h3 className="text-xl font-bold mb-2">מים טהורים</h3>
              <p>קרח מופק ממים שעוברים תהליכי טיהור ואוסמוזה מתקדמים</p>
            </motion.div>

            <motion.div
              className="feature-card group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="handshake-icon text-primary text-4xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-2">איכות ושירות</h3>
              <p>שירות ברמה גבוהה עם ליווי אישי ללקוחות</p>
            </motion.div>

            <motion.div
              className="feature-card group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="users-icon text-primary text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-2">לקוחות מרוצים</h3>
              <p>כ-1000 לקוחות מרוצים – עסקים מובילים במרכז</p>
            </motion.div>

            <motion.div
              className="feature-card group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="location-icon text-primary text-4xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">מיקוד גאוגרפי</h3>
              <p>שירות לעסקים באזור המרכז ואזורי הפריפריה הקרובים</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            גלריית תמונות
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-xl overflow-hidden bg-primary/10 group"
            >
              <img
                src="/bags.jpg"
                alt="Ice bags"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">שקיות קרח</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-xl overflow-hidden bg-primary/10 group"
            >
              <img
                src="/freezers2.jpg"
                alt="Freezers"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">מקררים</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-xl overflow-hidden bg-primary/10 group"
            >
              <img
                src="/freezers3.jpg"
                alt="Production process"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  תהליך הייצור
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            אודות החברה
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm sm:text-base md:text-lg mb-6">
              אנחנו חברה משפחתית עם ניסיון עשיר בייצור ושיווק שקיות קרח לעסקים,
              שבה איכות בלתי מתפשרת ושירות אישי הם ערכים מובילים. עם למעלה
              מ-1000 לקוחות מרוצים, אנו מחויבים לספק פתרונות מותאמים אישית ומענה
              מקצועי ומהיר לצרכים של כל לקוח. אצלנו, כל פרט חשוב – אנו שמים את
              הלקוח במרכז בפעילותנו היומיומית, שואפים לעמוד בציפיות ואף לעבור
              אותן, ומבטיחים חוויית שירות ייחודית ואיכותית לאורך כל הדרך.
            </p>

            <motion.div
              className="flex flex-col items-center justify-center gap-2 sm:gap-4 text-gray-600 bg-gray-50 p-4 sm:p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 text-primary">
                <FaStar className="text-lg sm:text-2xl" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  המפעל והמוצרים כשרים לפסח ולכל ימות השנה
                </h3>
                <FaStar className="text-lg sm:text-2xl" />
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary" />
                <span className="text-sm sm:text-base">
                  המפעל אינו פעיל בשבתות וחגים
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-10 sm:py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            צרו קשר עכשיו
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="btn-primary bg-white text-primary hover:bg-gray-100 inline-block group relative overflow-hidden whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl rounded-lg w-full md:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaPhone className="animate-pulse" />
                התקשרו: {PHONE_NUMBER}
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-green-500 text-white hover:bg-green-600 inline-block group relative overflow-hidden whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl rounded-lg w-full md:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaWhatsapp className="text-lg sm:text-xl" />
                שלחו הודעה בוואטסאפ
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
