/**
 * 문제설명
 * 정수 배열 numbers가 주어집니다. 
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * numbers의 길이는 2 이상 100 이하입니다.
 * numbers의 모든 수는 0 이상 100 이하입니다.
 */

/** 테스트 케이스 입력 */
const input = {
  case1: [2, 1, 3, 4, 1],
  case2: [5, 0, 2, 7],
}

/** 테스트 케이스 출력 */
const output = {
  case1: [2, 3, 4, 5, 6, 7],
  case2: [2, 5, 7, 9, 12],
}

/**
 * 풀이 구현
 * @param {*} input 테스트 케이스 입력
 */
function solution(numbers = input.case1) {
  const answer = [];
  const arr1 = [...numbers];
  const arr2 = [...numbers];
  
  arr1.forEach((num1, i) => {
      arr2.forEach((num2, j) => {
          if (i === j) { return; }
          const sum = num1 + num2;
          !answer.includes(sum) && answer.push(sum);
      });
  });
  return answer.sort((a, b) => a - b);
}

function solution2(numbers = input.case1) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}