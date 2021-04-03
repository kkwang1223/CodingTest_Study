/**
 * 문제설명
 * 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
 * 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
 *
 * 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
 * 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요. 
 * 
 * 제한사항
 * 2016년은 윤년입니다.
 * 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
 */

/** 테스트 케이스 입력 */
const input = {
  case1: {
    a: 5,
    b: 24,
  },
  case2: {
    a: 1,
    b: 1,
  },
};

/** 테스트 케이스 출력 */
const output = {
  case1: 'TUE',
  case2: 'FRI',
};

/**
 * 풀이 구현
 * @param {number} a month
 * @param {number} b day
 */
function solution(a = input.case1.a, b = input.case1.b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(2016, a - 1, b);
  return day[date.getDay()];
}

function solution2(a = input.case1.a, b = input.case1.b) {
  return new Date(`2016-${a}-${b}`).toString().slice(0, 3).toUpperCase();
}

function solution3(a = input.case1.a, b = input.case1.b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let totalDays;
  if (a === 1) {
      totalDays = b - 1;
  } else {
      totalDays = month.slice(0, a - 1).reduce((prev, cur) => prev + cur) + b - 1;
  }
  return day[totalDays%7];
}
