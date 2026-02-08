
import React from 'react';

export const FEATURES = [
  {
    title: "Tezkor Aniqlash",
    description: "Xabarlarni millisekundlar ichida tahlil qiladi va haqoratli so'zlarni filtrlaydi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "AI Algoritmlar",
    description: "Murakkab o'zbek tili lug'ati va kontekstual tahlilga asoslangan aqlli tizim.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Oson Integratsiya",
    description: "Guruhga qo'shing, admin huquqini bering va bot darhol ish boshlaydi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )
  },
  {
    title: "Maxfiylik",
    description: "Sizning xabarlaringiz faqat filtrdan o'tkaziladi va hech qayerda saqlanmaydi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export const STEPS = [
  {
    number: "1",
    title: "Botni Toping",
    description: "Telegramda @poktil_bot manziliga o'ting va 'Start' tugmasini bosing."
  },
  {
    number: "2",
    title: "Guruhga Qo'shing",
    description: "Botni o'z guruhingizga qo'shing va unga 'Admin' huquqini bering."
  },
  {
    number: "3",
    title: "Tayyor!",
    description: "Endi bot har bir haqoratli xabarni avtomatik ravishda o'chiradi."
  }
];

export const PRICING_PLANS = [
  {
    slug: "freemium",
    name: "Freemium",
    price: "1 oy bepul",
    description: "Boshlang, sinab ko'ring va guruhingizni madaniyatli saqlang! 🌱",
    color: "emerald",
    features: [
      "Haqoratli so'zlarni aniqlash va o'chirish",
      "Ogohlantirish yoki tinch qolish opsiyasi",
      "50 ta so'zgacha bo'lgan xabarlarni tekshirish"
    ],
    buttonText: "Sinab ko'rish",
    highlight: false
  },
  {
    slug: "premium",
    name: "Premium",
    price: "34,500 so'm/oy",
    description: "Har bir xabarni nazorat qiling va guruhingiz haqiqiy madaniyat markaziga aylanadi! ✨",
    color: "sky",
    features: [
      "Barcha Freemium funksiyalari",
      "100 ta so'zgacha bo'lgan xabarlarni tekshirish",
      "Media captionlarini ham tekshiradi (audio, foto, hujjatlar)"
    ],
    buttonText: "Premiumga o'tish",
    highlight: false
  },
  {
    slug: "ultra",
    name: "Ultra",
    price: "47,900 so'm/oy",
    description: "Sizning guruhingiz uchun maksimal himoya va mukammallik! 🛡️",
    color: "purple",
    features: [
      "Barcha Premium funksiyalari",
      "Cheksiz so'zlar tekshiruvi",
      "Tahrirlangan xabarlar va captionlarni aniqlash",
      "Guruh monitoringi va statistika (tez orada)"
    ],
    buttonText: "Eng yaxshi tanlov",
    highlight: true
  }
];
