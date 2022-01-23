  var app = new Vue({
    el: '#app',
    data: {
      message: '금주의 우리집 주간메뉴표입니다.',
      fromdt: '2022.01.24',
      todt: '2022.01.30',
      menulist: [{
          day: '월(E)',
          breakfast: ['두부조림'],
          lunch: ['꼬마김밥', '나드리김밥(불고기)'],
          dinner: ['두부김치']
        },
        {
          day: '화(E)',
          breakfast: ['된장찌개'],
          lunch: ['돈까스'],
          dinner: ['추어탕', '두부김치볶음밥']
        },
        {
          day: '수(O)',
          breakfast: ['계란찜', '콩나물국'],
          lunch: ['쌀국수'],
          dinner: ['장어구이']

        },
        {
          day: '목(D)',
          breakfast: ['김치찌개'],
          lunch: ['초밥'],
          dinner: ['불고기']
        },
        {
          day: '금(D)',
          breakfast: ['갈비탕'],
          lunch: ['Cafe', '빵'],
          dinner: ['쭈삼']
        },
        {
          day: '토(E)',
          breakfast: ['파쿠'],
          lunch: ['쭈삼볶'],
          dinner: ['하늘반점']
        },
        {
          day: '일(O)',
          breakfast: ['콩나물국밥'],
          lunch: [''],
          dinner: ['용머리떡볶이']
        }
      ]
    }
  })
