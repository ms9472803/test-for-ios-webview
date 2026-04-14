<template>
  <div class="home-page">
    <button @click="sendIOSMessageM1">Send iOS m1 message</button>
    <button @click="sendIOSMessageM2">Send iOS m2 message</button>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'

type BridgeValue =
  | string
  | number
  | boolean
  | null
  | BridgeValue[]
  | { [key: string]: BridgeValue }

type IOSBridgeWindow = Window & {
  webkit?: {
    messageHandlers?: {
      m1?: {
        postMessage: (message: string) => void
      }
      m2?: {
        postMessage: (message: BridgeValue) => void
      }
    }
  }
}

const pageTitle = 'Web Home'

onMounted(() => {
  document.title = pageTitle
})

function sendIOSMessageM1() {
  const iosWindow = window as IOSBridgeWindow
  const bridge = iosWindow.webkit?.messageHandlers?.m1

  if (!bridge) {
    console.warn('iOS m1 is not available in this environment')
    return
  }

  bridge.postMessage('iosBridgeM1')
}

function sendIOSMessageM2() {
    const iosWindow = window as IOSBridgeWindow
  const bridge = iosWindow.webkit?.messageHandlers?.m2

  if (!bridge) {
    console.warn('iOS m2 is not available in this environment')
    return
  }

  bridge.postMessage({
    action: 'iosBridgeM2',
    userId: 123,
    meta: {
      source: 'web',
      page: 'home'
    }
  })
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
  transition: all 0.15s ease-out;
}

.home-page button:active {
  background: #e8e8e8;
  transform: scale(0.96);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (hover: hover) {
  .home-page button:hover {
    background: #f0f0f0;
  }
}
</style>