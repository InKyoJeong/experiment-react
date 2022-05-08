#### Concurrency

- 동시성은 다중 동시 state 업데이트 처리에 대한 것
- state 업데이트 우선 순위 지정에 도움이 되는 새로운 개념(기능)
- 긴급 상태 업데이트

#### Concurrent APIs

- `useTransition()` : 낮은 우선 순위로 처리해야 하는 경우 래핑해서 사용가능
  - 배열에서 두 개의 값을 반환 : `startTransition(callback)`, `isPending (boolean)`
- `startTransition()` : useTransition와 유사하지만 hook사용 불가능한 경우에 사용가능
- `useDefferedValue()`
<!-- 이는 흔히 사용자 입력을 기반으로 즉시 렌더링하거나 데이터 조회를 기다려야 할 때 인터페이스를 반응적으로 유지하는 데에 사용합니다. -->

#### Improved State Update Batching

- Automatic state batching : 여러 state가 함께 실행되므로 컴포넌트는 한번만 재평가됨
  - 다수 state를 그룹핑 -> 하나의 state 업데이트로 실행 -> 불필요한 실행을 하지않는다.
  - 17이하 버전에서도 지원하나, 동기 리액트 이벤트 핸들러 함수에서만 지원한다.
  - batch 대상 제외 => `flushSync`
