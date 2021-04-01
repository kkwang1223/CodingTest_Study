/**
 * 문제 설명
 * 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
 * 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
 * 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 
 * 
 * 예를 들면,
 * arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
 * arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
 * 
 * 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 배열 arr의 크기 : 1,000,000 이하의 자연수
 * 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
 */

/** 테스트 케이스 입력 */
const input = {
  case1: [1,1,3,3,0,1,1],
  case2: [4,4,4,3,3],
}

/** 테스트 케이스 출력 */
const output = {
  case1: [1,3,0,1],
  case2: [4,3],
}

/**
 * 풀이 구현
 * @param {*} arr 테스트 케이스 입력
 */
function solution(arr = input.case1) {
  const answer = [];
  let prev = -1;

  arr.forEach(item => {
    if (item === prev) { return; }

    answer.push(item);
    prev = item;
  });

  return answer;
}

function solution2(arr = input.case1) {
  return arr.filter((val, index) => val !== arr[index + 1]);
}