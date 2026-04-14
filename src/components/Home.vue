<template>
  <div class="home-page">
    <button @click="sendIOSMessage">Send iOS bridge message</button>
  </div>
</template>


<script setup lang="ts">
type IOSBridgeWindow = Window & {
  webkit?: {
    messageHandlers?: {
      bridge?: {
        postMessage: (message: string) => void
      }
    }
  }
}

function sendIOSMessage() {
  const iosWindow = window as IOSBridgeWindow
  const bridge = iosWindow.webkit?.messageHandlers?.bridge

  if (!bridge) {
    console.warn('iOS bridge is not available in this environment')
    return
  }

  bridge.postMessage('iosBridge')
}

</script>

<style scoped>
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.home-page button {
  padding: 0.875rem 1.75rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  font-size: clamp(0.9rem, 4vw, 1.125rem);
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  width: min(100%, 320px);
}

.home-page button:active {
  background: #e8e8e8;
}

@media (hover: hover) {
  .home-page button:hover {
    background: #f0f0f0;
  }
}
</style>