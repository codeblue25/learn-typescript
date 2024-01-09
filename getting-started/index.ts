function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);

/**
 * `tsc + 파일 이름` 명령어를 통해 TS파일을 JS로 컴파일할 수 있다.
 * 하지만 매번 명령어를 실행시키는 것은 번거로우므로, webpack과 같은 번들러를 사용하는 것이 일반적이다.
 */
