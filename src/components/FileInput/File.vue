<script lang="ts" setup>
import { formatBytes } from '@/utils/format';
import Icon from '../Icon.vue';
import ProgressBar from './ProgressBar.vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    required: true,
  },
  progress: {
    type: [Number, String],
    default: null,
  },
  colorScheme: {
    type: Object,
    default: () => ({
      textColor: 'black',
    })
  }
});

interface FileEmits {
  (e: 'preview'): void,
  (e: 'delete'): void,
};

const emit = defineEmits<FileEmits>();

const handlePreviewClick = () => emit('preview');
const handleDeleteClick = () => emit('delete');

</script>

<template>
  <div v-bind="$attrs">
    <ProgressBar
      v-if="progress && Number(progress) < 100"
      key="progress"
      class="progress"
      :progress="progress"
    />

    <div
      v-else
      key="file"
      class="file"
    >
      <button
        type="button"
        :class="['file_name', 'button_reset']"
        :style="{ color: colorScheme.textColor }"
        @click="handlePreviewClick"
      >
        {{props.name}}
      </button>
      <span>
        {{formatBytes(Number(size))}}
      </span>
      <button
        type="button"
        :class="['delete', 'button_reset']"
        @click="handleDeleteClick"
      >
        <Icon icon="Times" />
      </button>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import '@common';
.delete {
  align-items: center;
  display: flex;
  cursor: pointer;
  font-size: .875em;
  margin-left: .5rem;
  width: 2em;

  &:hover,
  &:focus,
  &:active {
    background: rgb(235, 232, 232);
  }
}

.progress {
  cursor: wait;
  height: 1rem;
}

.file {
  align-items: baseline;
  display: flex;
  font-size: .875em;
  font-weight: 300;

  &_name {
    cursor: pointer;
    margin-right: 1rem;
    text-align: left;
    word-break: break-word;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
}

</style>