<template>
  <div class="home-page">
    <button @click="sendIOSMessage">Send iOS m1 message</button>
    <button @click="sendIOSMessageName">Send iOS m2 message</button>
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

function sendIOSMessage() {
  const iosWindow = window as IOSBridgeWindow
  const bridge = iosWindow.webkit?.messageHandlers?.m1

  if (!bridge) {
    console.warn('iOS m1 is not available in this environment')
    return
  }

  bridge.postMessage('message body : iosBridge m1')
}

function sendIOSMessageName() {
    const iosWindow = window as IOSBridgeWindow
  const messageName = iosWindow.webkit?.messageHandlers?.m2

  if (!messageName) {
    console.warn('iOS m2 is not available in this environment')
    return
  }

  messageName.postMessage({
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