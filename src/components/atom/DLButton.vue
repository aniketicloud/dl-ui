<template>
  <button
    :disabled="disabled"
    type="button"
    :class="classes"
    @click="onClick"
    >
    {{ label }}
    <span :class="iconClasses">
      <img :src="require(`../../assets/${icon}`)" />
    </span>
  </button>
</template>

<script>
// import '../../assets'
export default {
  props: {
    icon: {
      type: String,
      default: 'logo.png'
    },
    iconPosition: {
      type: String,
      default: 'right'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'button'
    },
    buttonType: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'text'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes () {
      return {
        // 'dl-button': true,
        [`dl-button--${this.buttonType}`]: true
      }
    },
    iconClasses () {
      return {
        // [`img-float--$(this.iconPosition}`]: true,
        [`img-float--${this.iconPosition}`]: true
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>
img{
  width: 20px;
}
.img-float--left {
  float:left
}

.img-float--right {
  float:right
}
/* .dl-button {
  background-color: aqua;
} */
.dl-button--primary {
  background-color: aqua;
}
.dl-button--secondary {
  background-color: yellow;
}
.dl-button--text {
  background-color: red;
}
</style>
