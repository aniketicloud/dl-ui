import DLButton from './DLButton.vue'

export default {
  title: 'atoms/Button',
  component: DLButton,
  argTypes: {
    buttonType: { control: { type: 'select', options: ['primary', 'secondary', 'text'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DLButton },
  template: '<DLButton @onClick="onClick" v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const TextButton = Template.bind({})
TextButton.args = {
  label: 'Button'
}
