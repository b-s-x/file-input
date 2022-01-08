<script lang="ts" setup>
import CustomSpinner from './CustomSpinner.vue';

const props = defineProps({
  isFetching: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <CustomSpinner
    key="spinner"
    v-if="props.isFetching"
    v-bind="$attrs"
    :inline="props.inline"
  />
  <template v-show="!props.isFetching">
    <slot />
  </template>
</template>