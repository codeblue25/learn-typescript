// TS 함수 선언
// 함수의 반환 값에 타입 정의
function example(): number {
  return 10;
}

// 함수의 파라미터에 타입 정의
function add(a: number, b: number): number {
  return a + b;
}
add(10, 20);
add(10); // parameter error
add(10, 20, 30); // parameter error

// 함수의 옵셔널 파라미터 정의
function log(a: string, b?: string, c?: string) {}
log("hello");
log("hello", "world");
log("hello", "world", "typescript");
