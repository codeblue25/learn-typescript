// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns 
 */
function sum(a, b) {
  return a + b
}

sum(10, '20') // type error

/**
 * 장점3. JSDoc, ts-check 없이 간단하게 type 체크가 가능하다.
 * type 체크 뿐만 아니라 재사용성, 확장성 면에서도 유리하다. 더 간결하게 작성 가능하기 때문에 가독성이 좋다.
 */