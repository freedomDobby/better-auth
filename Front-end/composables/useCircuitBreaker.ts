import CircuitBreaker from 'opossum';

/**
 * createBreaker: Circuit Breaker 인스턴스를 생성하는 유틸 함수
 * @param taskFn - 실패/성공을 체크할 비동기 함수
 * @returns CircuitBreaker 인스턴스
 */
export function createBreaker<T extends any[]>(
  taskFn: (...args: T) => Promise<any>
) {
  return new CircuitBreaker(taskFn, {
    timeout: 3000,               // 요청 타임아웃 (ms)
    errorThresholdPercentage: 50, // 실패율 임계치 (%)
    resetTimeout: 10000,         // Half-Open 상태로 전환 대기 시간 (ms)
    // 400~499 에러(클라이언트 요청 에러)는 실패로 간주하지 않고 무시
    errorFilter: (error: Error) => {
      const match = error.message.match(/status:\s*(\d+)/);
      if (match) {
        const status = Number(match[1]);
        if (status >= 400 && status < 500) {
          return true;
        }
      }
      return false;
    }
  });
}
