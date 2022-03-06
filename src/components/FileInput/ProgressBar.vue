<script lang="ts" setup >
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: [String, Number],
    default: 0,
  },
  colorScheme: {
    type: Object,
    default: () => ({
      border: 'black',
      line: 'black',
    })
  }
});

const progressWidth = computed(() => `${Math.max(0, Math.min(Number(props.progress), 100))}%`);

</script>

<template>
  <div
    class="progress"
    :style="{ borderColor: props.colorScheme.border }"
    v-bind="$attrs"
  >
    <div
      class="progress_bar"
      :style="{
        width: progressWidth,
        backgroundColor: props.colorScheme.line,
       }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@common";

@keyframes progress {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 1rem 0;
  }
}
.progress {
  border: thin solid;
  border-radius: .25rem;
  display: flex;
  height: 100%;

  &_bar {
    display: flex;
    overflow: hidden;
    transition: width .6s ease;
    white-space: nowrap;
  }
}
</style>
