
import React from 'react';
import { 
  Shield, 
  Sparkles, 
  Crown, 
  Zap, 
  Fingerprint, 
  Eye, 
  Lock, 
  ShieldCheck, 
  Star,
  Gem,
  Medal,
  Activity
} from 'lucide-react';

export const FEATURES = [
  {
    title: 'Mutlaq Himoya',
    description: 'Xabarlarni millisekundlarda tahlil qiladi va nojo\'ya so\'zlarni darhol o\'chiradi.',
    icon: <Shield className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    title: 'Aqlli AI',
    description: 'O\'zbek tilining barcha dialektlari va yashirin haqoratlarini tushunadigan tizim.',
    icon: <Fingerprint className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    title: 'Jonli Nazorat',
    description: 'Guruh muloqotini 24/7 nazorat qiladi va madaniyatni shakllantiradi.',
    icon: <Activity className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    title: 'Maxfiylik',
    description: 'Sizning ma\'lumotlaringiz va guruh xabarlaringiz to\'liq xavfsiz saqlanadi.',
    icon: <Lock className="w-8 h-8" strokeWidth={1.5} />
  }
];

export const STEPS = [
  {
    number: 1,
    title: 'Botni Qo\'shing',
    description: 'Poktil botni guruhingizga qo\'shing va unga adminlik huquqini bering.'
  },
  {
    number: 2,
    title: 'Sozlamalar',
    description: 'Kerakli filtr darajasini tanlang va guruh qoidalarini belgilang.'
  },
  {
    number: 3,
    title: 'Tayyor!',
    description: 'Endi guruhingiz to\'liq himoyalangan va muloqot madaniyatli bo\'ladi.'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Base',
    slug: 'Base',
    price: 'Tekin (1 oy)',
    description: 'Boshlang\'ich darajadagi himoya. Kichik guruhlar uchun ideal tanlov.',
    features: [
      'Haqoratli so\'zlarni aniqlash va o\'chirish',
      '50 ta so\'zgacha bo\'lgan xabarlarni tekshirish'
    ],
    color: 'emerald',
    icon: <Star className="w-12 h-12" strokeWidth={1} />
  },
  {
    name: 'Premium',
    slug: 'Premium',
    price: '345 900 so\'m/oy',
    description: 'O\'sib borayotgan jamoalar va faol guruhlar uchun mukammal yechim.',
    features: [
      'Barcha Base reja xususiyatlari',
      '70 ta so\'zgacha bo\'lgan xabarlarni tekshirish',
      'Media captionlarini ham tekshiradi (audio, foto, hujjatlar)'
    ],
    highlight: true,
    color: 'sky',
    icon: <Gem className="w-12 h-12" strokeWidth={1} />
  },
  {
    name: 'Ultimate',
    slug: 'Ultimate',
    price: '411 900 so\'m/oy',
    description: 'Yirik hamjamiyatlar va korporativ mijozlar uchun mutlaq imkoniyat.',
    features: [
      'Barcha Premium reja xususiyatlari',
      'Checksiz so\'zlar soni bilan xabarlarni tekshirish',
      'Tahrirlangan xabarlar va captionlarni aniqlash',
      'Guruh monitoringi va statistika (tez orada)'
    ],
    color: 'purple',
    icon: <Medal className="w-12 h-12" strokeWidth={1} />
  }
];

export const SOCIAL_LINKS = [
  {
    link: 'https://www.linkedin.com/in/akbarjorayev',
    name: 'LinkedIn Profile',
  },
  {
    link: 'https://www.instagram.com/akbarjorayevv',
    name: 'Instagram Account',
  },
  {
    link: 'https://t.me/akbarswe',
    name: 'Telegram Channel',
  },
  {
    link: 'https://akbarswe.uz',
    name: 'Personal Website',
  },
];
