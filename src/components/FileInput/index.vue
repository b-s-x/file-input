<script setup lang="ts">
import Input from './Input.vue';
import Icon from '../Icon.vue';
import { File } from './index';

defineProps({
  id: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: Array,
    default: [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Прикрепите файл:',
  },
});
</script>

<template>
  <div>
    <Input
      key="attach"
      :id="id"
      :label="label"
      :multiple="multiple"
      :accept="accept"
      :disabled="disabled"
      :required="required"
      @input="File.upload"
    >
      <Icon
        icon="Plus"
        class="plate_icon"
      />
    </Input>
  </div>
</template>

<style lang="scss" scoped>
@import '@common';

</style>
