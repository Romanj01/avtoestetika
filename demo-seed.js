export const DEMO_KIND='detailing';
export function seed(){return {
  "settings": {
    "name": "AvtoEstetika",
    "tagline": "Детейлинг в Ногинске. Уход за кузовом и салоном с вниманием к каждой детали.",
    "address": "Ногинск, ул. Климова, 49А",
    "phone": "+7 (926) 677-73-36",
    "open": "10:00",
    "close": "20:00",
    "step": 30,
    "defaultDuration": 120,
    "capacity": 1,
    "days": [
      1,
      2,
      3,
      4,
      5,
      6,
      0
    ],
    "socialUrl": "",
    "heroImage": "/car-studio.png",
    "heroLeftText": "AVTOESTETIKA · НОГИНСК",
    "heroLeftVisible": true,
    "heroRightText": "Ежедневно · 10:00–20:00",
    "heroRightVisible": true,
    "portfolioLabelText": "ДЕМО-ПРИМЕР",
    "portfolioLabelVisible": true
  },
  "services": [
    {
      "id": "wash",
      "name": "Детейлинг-мойка",
      "description": "Бережная очистка кузова и дисков. Состав работ и стоимость уточняйте по телефону.",
      "price": 0,
      "duration": 90
    },
    {
      "id": "polish",
      "name": "Полировка кузова",
      "description": "Уход за лакокрасочным покрытием и восстановление блеска. Состав работ и стоимость уточняйте по телефону.",
      "price": 0,
      "duration": 240
    },
    {
      "id": "ceramic",
      "name": "Керамическая защита",
      "description": "Защитные покрытия и гидрофобный эффект. Состав работ и стоимость уточняйте по телефону.",
      "price": 0,
      "duration": 360
    },
    {
      "id": "interior",
      "name": "Химчистка салона",
      "description": "Очистка ткани, кожи и деталей интерьера. Состав работ и стоимость уточняйте по телефону.",
      "price": 0,
      "duration": 180
    }
  ],
  "portfolio": [
    {
      "id": "ks-polish",
      "title": "Глубина цвета",
      "category": "Пример / полировка",
      "car": "Полировка кузова",
      "image": "/work-polish.png",
      "demo": true
    },
    {
      "id": "ks-ceramic",
      "title": "Чистая линия",
      "category": "Пример / кузов",
      "car": "Блеск лакокрасочного покрытия",
      "image": "/work-ceramic.png",
      "demo": true
    },
    {
      "id": "ks-interior",
      "title": "Внутренняя гармония",
      "category": "Пример / салон",
      "car": "Уход за интерьером",
      "image": "/work-interior.png",
      "demo": true
    }
  ],
  "reviews": [],
  "promos": [],
  "customers": [],
  "bookings": []
};}
