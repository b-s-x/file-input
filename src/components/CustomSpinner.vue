<script lang="ts" setup >
const props = defineProps({
  inline: {
    inline: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="[
      'spinner',
      {'spinner_inline': props.inline },
    ]"
    v-bind="$attrs"
  >
    <div
      :class="[
        'spinner_circle',
        {'spinner_circle_inline': props.inline},
      ]"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@common';

$spinner-circle-animation-time: .6s;
$spinner-circle-line-width: .125rem;
$spinner-circle-size: 2rem;
$spinner-circle-size_inline: 1rem;
$spinner-padding: 2 * .625rem;

.spinner {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: $spinner-padding;

  &_inline {
    display: inline-flex;
    padding: 0;
  }

  &_circle {
    animation: spinner-keyframes $spinner-circle-animation-time linear infinite;
    background-color: transparent;
    border: $spinner-circle-line-width solid #f4f4f5;
    border-bottom-color: $color-primary;
    border-radius: 50%;
    border-top-color: $color-primary;
    height: $spinner-circle-size;
    width: $spinner-circle-size;


    &_inline {
      box-sizing: border-box;
      height: $spinner-circle-size_inline;
      width: $spinner-circle-size_inline;
    }
  }
}

@keyframes spinner-keyframes {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
};

</style>
