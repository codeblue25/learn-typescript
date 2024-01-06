function add(a: number, b: number): number {
  return a + b
}

add(10, '20') // type error

var result = add(10, 20)
result.toLocaleString() // '30'

/**
 * 장점2. 코드 가이드와 자동 완성을 통해 개발 생산성을 높일 수 있다.
 */