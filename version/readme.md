#### Improved State Update Batching

- Automatic state batching : 여러 state가 함께 실행되므로 컴포넌트는 한번만 재평가됨
  - 다수 state를 그룹핑 -> 하나의 state 업데이트로 실행 -> 불필요한 실행을 하지않는다.
  - 17이하 버전에서도 지원하나, 동기 리액트 이벤트 핸들러 함수에서만 지원한다.
  - batch 대상 제외 => `flushSync`

<!-- #### Improved Suspense -->
