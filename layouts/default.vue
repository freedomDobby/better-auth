<template>
  <div class="layout">
    <Navbar class="navbar" />
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
  width: 100%;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 */
}

.navbar {
  height: 60px; /* 원하는 높이로 조정 */
  flex-shrink: 0;
}

.page-content {
  display: flex;
  flex: 1; /* 남은 모든 공간 차지 */
  justify-content: center;
  overflow: auto; /* 스크롤 필요 시 */
}
</style>
