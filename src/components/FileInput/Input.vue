<script lang="ts" setup>

const props = defineProps({
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
  <label
    :class="[
      'wrapper',
      { ['wrapper_disabled']: disabled },
    ]"
  >
    <span
      key="plate"
      class="plate"
    >
      {{label}}
      <div class="plate_icon">
        <slot />
      </div>
    </span>

    <input
      name="id"
      type="file"
      :class="['visually_hidden', 'input']"
      :id="id"
      :multiple="multiple"
      :accept="accept.join(',')"
      :disabled="disabled"
      :required="required"
    />
      <!-- v-bind="$attrs" -->
  </label>
</template>

<style lang="scss" scoped>
@import '@common';

.wrapper {
  cursor: pointer;
  position: relative;
  width: 100%;

  &_disabled {
    cursor: not-allowed;
    opacity: .8;

    & * {
      pointer-events: none;
    }
  }
}

.input {
  position: absolute;
  top: 0;
  left: 0;
}

.plate {
  display: flex;
  align-items: center;

  &_icon {
    display: flex;
    align-items: center;
    margin-left: .5rem;
    width: 20px;
  }
}

</style>