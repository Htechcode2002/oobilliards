"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Gamepad2, Navigation, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function OutletsSection() {

  const outlets = [
    {
      id: 1,
      name: "O'O Snooker @ One Shamelin Mall",
      location: "Kuala Lumpur",
      description: "The very first O'O+ Billiard's outlet, opened in November 2017, equipped with professional snooker tables, ideal for both casual players and competitive tournaments.",
      openDate: "November 2017",
      image: "/outlets/shamelin/shamelin.jpg",
      images: [
        "/outlets/shamelin/shamelin.jpg",
        "/outlets/shamelin/DSC08668.JPG",
        "/outlets/shamelin/DSC08681.JPG",
        "/outlets/shamelin/DSC08695.JPG",
        "/outlets/shamelin/DSC08704.JPG",
        "/outlets/shamelin/DSC08709.JPG"
      ],
      brands: [
        { name: "Earl", logo: "/about/brand/earl.png" },      // 15 tables
        { name: "Wiraka", logo: "/about/brand/wiraka.png" },  // 7 tables
        { name: "Rasson", logo: "/about/brand/rasson.png" }   // 3 tables
      ],
      tables: [
        "3 Rasson Snooker Tables",
        "15 Earl Snooker Tables", 
        "7 Wiraka Snooker Tables"
      ],
      hours: {
        weekdays: "Mon–Thu: 10:00 AM – 6:00 AM",
        weekends: "Fri–Sun & Public Holidays: 24 Hours"
      },
      contact: {
        phone: "+6011-35041123",
        whatsapp: "+601135041123"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/share/1FeA1XNBiy/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/oo_snooker?igsh=MWlncWk2MDczbXkzaA%3D%3D&utm_source=qr",
        tiktok: "https://www.tiktok.com/@oosnooker?_r=1&_d=eh0f7la31e648l&sec_uid=MS4wLjABAAAAmo9UKIlOWObeu5BtLiX_gKtG0mpWv_R7xmPHkS15jHi8dPJ2ziXcgo4LkkUsMAWE&share_author_id=6597732250212433921&sharer_language=zh&source=h5_t&u_code=e2cfe5h3gi50em&item_author_type=2&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=24EEBD75-0FFF-4279-838F-E54B8A6E86DA&user_id=7112419096864162821&sec_user_id=MS4wLjABAAAAh0LnLKq10TFNC7kXdlgzMgU63uPRqXpUWjMs1NJ05Cu56Yvcs7-Abw6bEObxmTn9&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1180"
      },
      isOpen: true
    },
    {
      id: 2,
      name: "O'O Snooker @ Seremban",
      location: "Negeri Sembilan",
      description: "Opened in September 2022, the first outlet outside Kuala Lumpur, bringing professional billiards facilities to Negeri Sembilan.",
      openDate: "September 2022",
      image: "/outlets/seremban/seremban.jpg",
      images: [
        "/outlets/seremban/seremban.jpg",
        "/outlets/seremban/1cc2c157-7dde-4b48-91a8-e153c83a6536.jpg",
        "/outlets/seremban/1f709055-255d-47d9-abc9-c2942b8bec38.jpg",
        "/outlets/seremban/2a3825cf-0f7a-448a-9553-3c954fa9fbe8.jpg",
        "/outlets/seremban/9fa502ef-1df7-4808-b208-73423c602a32.jpg",
        "/outlets/seremban/c925a89a-dd79-4530-acce-c7277de40d6d.jpg"
      ],
      brands: [
        { name: "Earl", logo: "/about/brand/earl.png" },     // 9 tables
        { name: "Rasson", logo: "/about/brand/rasson.png" }  // 2 tables
      ],
      tables: [
        "2 Rasson Snooker Tables",
        "9 Earl Snooker Tables"
      ],
      hours: {
        daily: "Open Daily: 11:00 AM – 5:00 AM"
      },
      contact: {
        phone: "+6011-16683556",
        whatsapp: "+601116683556"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/share/1FeA1XNBiy/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/oo_snooker?igsh=MWlncWk2MDczbXkzaA%3D%3D&utm_source=qr",
        tiktok: "https://www.tiktok.com/@oosnooker?_r=1&_d=eh0f7la31e648l&sec_uid=MS4wLjABAAAAmo9UKIlOWObeu5BtLiX_gKtG0mpWv_R7xmPHkS15jHi8dPJ2ziXcgo4LkkUsMAWE&share_author_id=6597732250212433921&sharer_language=zh&source=h5_t&u_code=e2cfe5h3gi50em&item_author_type=2&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=24EEBD75-0FFF-4279-838F-E54B8A6E86DA&user_id=7112419096864162821&sec_user_id=MS4wLjABAAAAh0LnLKq10TFNC7kXdlgzMgU63uPRqXpUWjMs1NJ05Cu56Yvcs7-Abw6bEObxmTn9&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1180"
      },
      isOpen: true
    },
    {
      id: 3,
      name: "O'O Snooker @ Viva Home",
      location: "Kuala Lumpur",
      description: "Opened in March 2023, located in the heart of Kuala Lumpur, offering multiple game formats for both casual and competitive players.",
      openDate: "March 2023",
      image: "/outlets/vivahome/vivahome.jpg",
      images: [
        "/outlets/vivahome/vivahome.jpg",
        "/outlets/vivahome/04dee5af-53e8-400f-b423-84aef6815343.jpg",
        "/outlets/vivahome/41a3cd6c-c7b2-46d1-a9f2-614f2d45037a.jpg",
        "/outlets/vivahome/4a899528-a58e-4f8e-b88e-8f2cded53f94.jpg",
        "/outlets/vivahome/733a81d9-227c-45c7-9b82-76f46e040960.jpg",
        "/outlets/vivahome/7b3b575c-a51c-4597-b4ef-f7fbd2456ad4.jpg",
        "/outlets/vivahome/ce2972a9-cca5-4570-bfcf-964b45f0358e.jpg",
        "/outlets/vivahome/e575c09e-8948-40ea-a98d-45b76d4916d4.jpg",
        "/outlets/vivahome/e83a9f36-b0b3-4285-9059-93ea1139ed65.jpg"
      ],
      brands: [
        { name: "Earl", logo: "/about/brand/earl.png" },     // 16 tables (11+5)
        { name: "Rasson", logo: "/about/brand/rasson.png" }  // 2 tables
      ],
      tables: [
        "2 Rasson Snooker Tables",
        "11 Earl Snooker Tables",
        "5 Earl Chinese 8 Ball Tables",
        "1 Pool Table"
      ],
      hours: {
        daily: "Open Daily: 12:00 PM – 8:00 AM"
      },
      contact: {
        phone: "+6011-11102935",
        whatsapp: "+601111102935"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/share/1FeA1XNBiy/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/oo_snooker?igsh=MWlncWk2MDczbXkzaA%3D%3D&utm_source=qr",
        tiktok: "https://www.tiktok.com/@oosnooker?_r=1&_d=eh0f7la31e648l&sec_uid=MS4wLjABAAAAmo9UKIlOWObeu5BtLiX_gKtG0mpWv_R7xmPHkS15jHi8dPJ2ziXcgo4LkkUsMAWE&share_author_id=6597732250212433921&sharer_language=zh&source=h5_t&u_code=e2cfe5h3gi50em&item_author_type=2&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=24EEBD75-0FFF-4279-838F-E54B8A6E86DA&user_id=7112419096864162821&sec_user_id=MS4wLjABAAAAh0LnLKq10TFNC7kXdlgzMgU63uPRqXpUWjMs1NJ05Cu56Yvcs7-Abw6bEObxmTn9&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1180"
      },
      isOpen: true
    },
    {
      id: 4,
      name: "O'O+ Billiards @ The Scott Garden",
      location: "Kuala Lumpur",
      description: "Opened in July 2024, one of the biggest billiards halls in Kuala Lumpur with a variety of game formats and professional facilities.",
      openDate: "July 2024",
      image: "/outlets/scottgarden/scottgarden.jpg",
      images: [
        "/outlets/scottgarden/scottgarden.jpg",
        "/outlets/scottgarden/0a6513de-3eab-4f50-8d10-08f8d5a93be0.jpg",
        "/outlets/scottgarden/21d2aaa7-9b75-4d76-8ba8-c23e33ae900b.jpg",
        "/outlets/scottgarden/2db3bc52-d1ba-449d-8f4e-c0d4fbdad6cd.jpg",
        "/outlets/scottgarden/98ef52d8-b813-44bf-930e-582854249714.jpg",
        "/outlets/scottgarden/f17328f2-122a-4c1c-9626-e25fd9a885fe.jpg",
        "/outlets/scottgarden/f48a22f8-f97b-49a6-99f7-ceece95dd7ec.jpg"
      ],
      brands: [
        { name: "Earl", logo: "/about/brand/earl.png" },     // 17 tables (13+4)
        { name: "Rasson", logo: "/about/brand/rasson.png" }, // 14 tables (10+4)
        { name: "Joy", logo: "/about/brand/joy.png" }        // 9 tables
      ],
      tables: [
        "9 Rasson Snooker Tables",
        "13 Earl Snooker Tables",
        "9 Joy Chinese 8 Ball Tables",
        "4 Earl Chinese 8 Ball Tables",
        "2 DUYA Chinese 9 Ball Tables",
        "4 Rasson American Pool Tables"
      ],
      hours: {
        daily: "Open Daily: 11:00 AM – 6:00 AM"
      },
      contact: {
        phone: "+6013-8938896",
        whatsapp: "+60138938896"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/share/19PJ4HSCAe/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/ooplus.scottgarden?igsh=d2JncDdtcHp2c2J5&utm_source=qr",
        tiktok: "https://www.tiktok.com/@oosnooker?_r=1&_d=eh0f7la31e648l&sec_uid=MS4wLjABAAAAmo9UKIlOWObeu5BtLiX_gKtG0mpWv_R7xmPHkS15jHi8dPJ2ziXcgo4LkkUsMAWE&share_author_id=6597732250212433921&sharer_language=zh&source=h5_t&u_code=e2cfe5h3gi50em&item_author_type=2&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=24EEBD75-0FFF-4279-838F-E54B8A6E86DA&user_id=7112419096864162821&sec_user_id=MS4wLjABAAAAh0LnLKq10TFNC7kXdlgzMgU63uPRqXpUWjMs1NJ05Cu56Yvcs7-Abw6bEObxmTn9&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1180"
      },
      isOpen: true
    },
    {
      id: 5,
      name: "O'O+ Billiards @ USJ",
      location: "91 Sports Arena, Subang Jaya",
      description: "Opened in January 2025, the largest outlet in Subang Jaya, located above Giant USJ1 within 91 Sports Arena. Offers coaching programs, tournaments, and multiple table types.",
      openDate: "January 2025",
      image: "/outlets/usj/usj.PNG",
      images: [
        "/outlets/usj/usj.PNG",
        "/outlets/usj/IMG_3579.PNG",
        "/outlets/usj/IMG_3581.PNG",
        "/outlets/usj/IMG_3582.PNG",
        "/outlets/usj/IMG_3583.PNG",
        "/outlets/usj/IMG_3584.PNG",
        "/outlets/usj/IMG_3585.PNG"
      ],
      brands: [
        { name: "Aplus", logo: "/about/brand/aplus.png" },  // 14 tables
        { name: "Earl", logo: "/about/brand/earl.png" },    // 13 tables
        { name: "Duya", logo: "/about/brand/duya.png" },    // 8 tables
        { name: "Rasson", logo: "/about/brand/rasson.png" } // 1 table
      ],
      tables: [
        "14 Aplus American Pool Tables",
        "8 Duya Chinese 9 Ball Tables",
        "13 Earl Chinese 8 Ball Tables",
        "1 Rasson Snooker Table"
      ],
      hours: {
        daily: "Open Daily: 11:00 AM – 4:00 AM"
      },
      contact: {
        phone: "+6013-8078896",
        whatsapp: "+60138078896"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/share/14KrDXyvXX6/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/ooplusbilliards.usj?igsh=MWxjN3FseTBpa2k3bg==",
        tiktok: "https://www.tiktok.com/@oosnooker?_r=1&_d=eh0f7la31e648l&sec_uid=MS4wLjABAAAAmo9UKIlOWObeu5BtLiX_gKtG0mpWv_R7xmPHkS15jHi8dPJ2ziXcgo4LkkUsMAWE&share_author_id=6597732250212433921&sharer_language=zh&source=h5_t&u_code=e2cfe5h3gi50em&item_author_type=2&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=24EEBD75-0FFF-4279-838F-E54B8A6E86DA&user_id=7112419096864162821&sec_user_id=MS4wLjABAAAAh0LnLKq10TFNC7kXdlgzMgU63uPRqXpUWjMs1NJ05Cu56Yvcs7-Abw6bEObxmTn9&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1180"
      },
      isOpen: true
    },
    {
      id: 6,
      name: "O'O+ Billiards @ Ho Chi Minh",
      location: "Vietnam",
      description: "Opening in October 2025, our first international outlet in Vietnam, bringing O'O+ Billiards' signature facilities and experiences to Ho Chi Minh City.",
      openDate: "October 2025",
      image: "/outlets/vietnam/vietnam.jpg",
      images: [
        "/outlets/vietnam/vietnam.jpg",
        "/outlets/vietnam/IMG_6169.JPG",
        "/outlets/vietnam/IMG_6162.JPG",
        "/outlets/vietnam/IMG_61462.jpg",
        "/outlets/vietnam/IMG_61461.jpg",
        "/outlets/vietnam/IMG_6146.JPG"
      ],
      address: "34 Đ. Lê Văn Quới, Bình Trị Đông A, Bình Tân, Hồ Chí Minh 762000, Vietnam",
      brands: [
        { name: "Joy", logo: "/about/brand/joy.png" },
        { name: "Aplus", logo: "/about/brand/aplus.png" },
        { name: "Duya", logo: "/about/brand/duya.png" },
        { name: "Rasson", logo: "/about/brand/rasson.png" }
      ],
      tables: [
        "Pool Tables",
        "American Pool Tables",
        "Chinese 8 Ball Tables",
        "Chinese 9 Ball Tables"
      ],
      hours: {
        daily: "Open Daily: 9:00 AM – 3:00 AM"
      },
      contact: {
        phone: "+84 797 378 084",
        whatsapp: "+84797378084"
      },
      isOpen: false,
      comingSoon: false
    }
  ];

  const handleWhatsAppClick = (whatsappNumber, outletName) => {
    if (whatsappNumber) {
      const message = encodeURIComponent(`Hi! I would like to book a table at ${outletName}. Please let me know the availability.`);
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  const handleMapClick = (outletId) => {
    const mapUrls = {
      1: "http://google.com/maps?rlz=1C1VDKB_zh-CNMY1157MY1157&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHNDkwajBqN6gCCLACAfEFV3HVLPlccYs&um=1&ie=UTF-8&fb=1&gl=my&sa=X&geocode=KS-D8ehvNswxMfmT7MYJQf05&daddr=Taman,+Taman+Shamelin+Perkasa,+55300+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur",
      2: "https://www.google.com/maps/dir//1st+Floor,+Lot+3258,+Jalan+Dato+Sheikh+Ahmad,+Bandar+Seremban,+70000+Seremban,+Negeri+Sembilan/@2.7238228,101.8562042,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cdddcacbccf395:0xd0574dda180db38c!2m2!1d101.9386062!2d2.7238256?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
      3: "https://www.google.com/maps/dir//32-5,+Third+Floor,+Viva+Shopping+Mall.85,+Jalan+Loke+Yew+Cheras,+Maluri,+55200+Wilayah+Persekutuan,+Wilayah+Persekutuan+Kuala+Lumpur/@3.1230634,101.6370601,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc37378fd7e06b:0xf46c2e3286dace56!2m2!1d101.7194621!2d3.1230666?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
      4: "http://google.com/maps?rlz=1C1VDKB_zh-CNMY1157MY1157&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzgxMmowajSoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=my&sa=X&geocode=KR8J4jkkS8wxMWZAVZRSYev1&daddr=Lot+G-01-01A,+Ground+Floor,+Jln+Klang+Lama,+The+Scott+Garden,+58100+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur",
      5: "https://www.google.com/maps/dir//Lot+T2,T3,T4,+Giant+USJ+1,+1,+Persiaran+Subang+Permai,+Usj+1,+47500+Subang+Jaya,+Selangor/@3.0590089,101.5125797,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc4d58a4b0c415:0x358376bf40d00d88!2m2!1d101.5949817!2d3.0590121?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
      6: "https://maps.app.goo.gl/wTzPafdjUmwR7fcW7"
    };
    const url = mapUrls[outletId];
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleWazeClick = (outletId) => {
    const wazeUrls = {
      1: "https://waze.com/ul/hw283g0kge", // Shamelin Mall
      2: "https://waze.com/ul/hw22rrxvk5", // Seremban
      3: "https://waze.com/ul/hw283f8tc5", // Viva Home
      4: "https://waze.com/ul/hw2839emt4", // The Scott Garden
      5: "https://waze.com/ul/hw281rughn", // USJ
      // 6: Vietnam - 暂时没有Waze链接
    };
    const url = wazeUrls[outletId];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Full Page Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/outlets/outlets.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      ></div>

      {/* Header Section - Transparent with overlay */}
      <section className="py-25 sm:py-35 text-white relative z-10">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 sm:pt-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight italic px-2"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Visit Our <span className="text-[#ffd701]">Outlets</span>
            </motion.h1>
            
            <motion.div 
              className="text-white/70 text-base sm:text-lg mb-4 sm:mb-6"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/" className="text-white/60 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <span className="mx-2 text-[#ffd701]">{'//'}</span>
              <span className="text-[#ffd701]">Outlets</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outlets List */}
      <section className="relative z-10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {outlets.map((outlet, index) => (
              <motion.div
                key={outlet.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Image Swiper */}
                  <div className="lg:w-1/2 h-64 lg:h-auto relative bg-gray-200">
                    {outlet.comingSoon ? (
                      /* Coming Soon Display */
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="mb-6">
                            <div className="w-20 h-20 mx-auto mb-4 bg-[#ffd701] rounded-full flex items-center justify-center">
                              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            Coming Soon
                          </h3>
                          <p className="text-[#ffd701] font-semibold text-lg mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            October 2025
                          </p>
                          <p className="text-gray-300 text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            Our first international outlet
                          </p>
                        </div>
                      </div>
                    ) : outlet.images && outlet.images.length > 1 ? (
                      /* Swiper for multiple images */
                      <Swiper
                        modules={[SwiperNavigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="h-full w-full outlet-swiper"
                      >
                        {outlet.images.map((img, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <div className="relative w-full h-full">
                              <Image
                                src={img}
                                alt={`${outlet.name} - Image ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      /* Single Image Display */
                      <>
                        <Image
                          src={outlet.image}
                          alt={outlet.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback background when image fails to load */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 hidden items-center justify-center"
                          style={{ display: 'none' }}
                        >
                          <span className="text-white text-lg font-semibold text-center px-4">
                            {outlet.name}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Side - Information */}
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    {/* Coming Soon Badge */}
                    {outlet.comingSoon && (
                      <div className="mb-4">
                        <span className="bg-[#ffd701] text-black px-3 py-1 rounded text-xs font-bold">
                          COMING SOON
                        </span>
                      </div>
                    )}

                    {/* Title and Location */}
                    <div className="mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {outlet.name} | {outlet.location}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {outlet.description}
                      </p>
                    </div>

                    {/* Brand Logos */}
                    {outlet.brands && outlet.brands.length > 0 && (
                      <div className="mb-6 bg-gradient-to-r from-white/15 via-white/8 to-transparent border-l-2 border-white/40 pl-4 py-3 rounded-r-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-white font-bold text-sm uppercase tracking-wider">Table Brands</span>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                          {outlet.brands.map((brand, idx) => (
                            <div 
                              key={idx}
                              className="relative w-14 h-14 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
                              title={brand.name}
                            >
                              <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact and Hours Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {/* Contact */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4 text-[#ffd701]" />
                          <span className="text-white font-semibold text-sm">Contact</span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {outlet.contact.phone}
                        </div>
                      </div>

                      {/* Hours */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[#ffd701]" />
                          <span className="text-white font-semibold text-sm">Hours</span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {outlet.hours.weekdays && (
                            <div>{outlet.hours.weekdays}</div>
                          )}
                          {outlet.hours.weekends && (
                            <div>{outlet.hours.weekends}</div>
                          )}
                          {outlet.hours.daily && (
                            <div>{outlet.hours.daily}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tables Info and Social Media */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {/* Tables Info */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Gamepad2 className="w-4 h-4 text-[#ffd701]" />
                          <span className="text-white font-semibold text-sm">Available Tables</span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {outlet.tables.map((table, idx) => (
                            <div key={idx}>• {table}</div>
                          ))}
                        </div>
                      </div>

                      {/* Social Media */}
                      {outlet.socialMedia && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Share2 className="w-4 h-4 text-[#ffd701]" />
                            <span className="text-white font-semibold text-sm">Social Media</span>
                          </div>
                          <div className="flex gap-3">
                            {outlet.socialMedia.facebook && (
                              <a
                                href={outlet.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#1877f2] transition-colors duration-200"
                              >
                                <i className="fa-brands fa-facebook text-2xl"></i>
                              </a>
                            )}
                            {outlet.socialMedia.instagram && (
                              <a
                                href={outlet.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#E1306C] transition-colors duration-200"
                              >
                                <i className="fa-brands fa-instagram text-2xl"></i>
                              </a>
                            )}
                            {outlet.socialMedia.tiktok && (
                              <a
                                href={outlet.socialMedia.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#000000] transition-colors duration-200"
                              >
                                <i className="fa-brands fa-tiktok text-2xl"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {outlet.contact.whatsapp && (
                        <button
                          onClick={() => handleWhatsAppClick(outlet.contact.whatsapp, outlet.name)}
                          className="flex-1 bg-[#25d366] text-white py-3 px-4 rounded-md hover:bg-[#20bc59] transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <i className="fa-brands fa-whatsapp w-4 h-4"></i>
                          <span className="font-medium text-sm">WhatsApp</span>
                        </button>
                      )}
                      
                      <button 
                        onClick={() => handleMapClick(outlet.id)}
                        className="flex-1 bg-[#ffd701] text-black py-3 px-4 rounded-md hover:bg-[#e6c200] transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <i className="fa-solid fa-location-dot w-4 h-4"></i>
                        <span className="font-medium text-sm">Google Maps</span>
                      </button>
                      
                      {outlet.id <= 5 && (
                        <button 
                          onClick={() => handleWazeClick(outlet.id)}
                          className="flex-1 bg-[#33a1ff] text-white py-3 px-4 rounded-md hover:bg-[#2a8ce6] transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <i className="fa-brands fa-waze w-4 h-4"></i>
                          <span className="font-medium text-sm">Waze</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .outlet-swiper {
          width: 100%;
          height: 100%;
        }
        
        .outlet-swiper .swiper-button-next,
        .outlet-swiper .swiper-button-prev {
          color: #ffd701 !important;
          transition: all 0.3s ease;
        }
        
        .outlet-swiper .swiper-button-next:hover,
        .outlet-swiper .swiper-button-prev:hover {
          transform: scale(1.2);
          filter: drop-shadow(0 0 8px rgba(255, 215, 1, 0.6));
        }
        
        .outlet-swiper .swiper-button-next::after,
        .outlet-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        
        .outlet-swiper .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.5 !important;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        
        .outlet-swiper .swiper-pagination-bullet-active {
          background: #ffd701 !important;
          opacity: 1 !important;
          width: 30px;
          border-radius: 5px;
        }
        
        .outlet-swiper .swiper-pagination {
          bottom: 10px !important;
        }
      `}</style>
    </div>
  );
}
