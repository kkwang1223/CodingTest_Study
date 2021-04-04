/**
 * 최대 탑승객 경로 구하기
 */

const save = [];

function solution(n=6, passenger=[1,1,1,1,1,1], train=[[1,2],[1,3],[1,4],[3,5],[3,6]]) {
  locate(train, passenger, 1, passenger[0]);
  // console.log('save===>', save);
  return getResult(save);
}

function locate(train, passenger, current, sum) {
  const platform = train.filter(item => item[0] === current);
  if (!platform.length) { 
    save.push([current, sum]);
    return; 
  }
  platform.forEach((item, idx) => {
    locate(train, passenger, item[1], sum + passenger[item[1] - 1]);
  });
}

function getResult() {
  const max = Math.max(...save.map(item => item[1]));
  save.sort((a, b) => b[0] - a[0]);
  const value = save.find(item => item[1] === max);
  return value;
}

solution();