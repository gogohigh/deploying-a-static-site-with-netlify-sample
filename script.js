  var app = new Vue({
    el: '#app',
    data: {
      message: '금주의 우리집 주간메뉴표입니다.',
      fromdt: '2022.01.17',
      todt: '2022.01.23',
      menulist: [{
          day: '월(D)',
          breakfast: ['된장찌개'],
          lunch: ['샌드위치'],
          dinner: ['보쌈']
        },
        {
          day: '화(D)',
          breakfast: ['미역국'],
          lunch: ['삼계탕'],
          dinner: ['치킨']
        },
        {
          day: '수(O)',
          breakfast: ['김밥'],
          lunch: ['Cafe'],
          dinner: ['불고기']

        },
        {
          day: '목(E)',
          breakfast: ['떡국'],
          lunch: ['빵'],
          dinner: ['감자탕']
        },
        {
          day: '금(E)',
          breakfast: ['김치찌개'],
          lunch: ['추어탕'],
          dinner: ['갈비탕']
        },
        {
          day: '토(E)',
          breakfast: ['파쿠'],
          lunch: ['Self'],
          dinner: ['삼겹살']
        },
        {
          day: '일(O)',
          breakfast: ['콩나물국밥'],
          lunch: ['쌀국수'],
          dinner: ['장어']
        }
      ]
    }
  })
