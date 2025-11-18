<template>
  <div ref="container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  repo: { type: String, required: true },
  issueTerm: { type: String, default: 'pathname' },
  label: { type: String, default: 'comments' },
  theme: { type: String, default: 'github-light' }
})

const container = ref(null)

onMounted(() => {
  const script = document.createElement("script")
  script.src = "https://utteranc.es/client.js"
  script.async = true
  script.setAttribute("repo", props.repo)
  script.setAttribute("issue-term", props.issueTerm)
  script.setAttribute("label", props.label)
  script.setAttribute("theme", props.theme)
  script.crossOrigin = "anonymous"

  container.value.appendChild(script)
})
</script>
