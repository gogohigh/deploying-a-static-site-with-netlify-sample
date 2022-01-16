  var app = new Vue({
    el: '#app',
    data: {
      message: '금주의 우리집 주간메뉴표입니다.',
      fromdt: '2022.01.17',
      todt: '2022.01.23',
      menulist: [{
          day: '월요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']
        },
        {
          day: '화요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']
        },
        {
          day: '수요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']

        },
        {
          day: '목요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']
        },
        {
          day: '금요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']
        },
        {
          day: '토요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']
        },
        {
          day: '일요일',
          breakfast: ['김치찌개', '계란밥'],
          lunch: ['김치찌개', '브런치빈'],
          dinner: ['월남쌈']
        }
      ]
    }
  })
