import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

describe('<MyCounter />', () => {
    test('should match snapchot', () => {
        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            },
        });

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('renders the counter value correctly', () => {
        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            },
        });

        console.log(wrapper.find('h3'));

        console.log(wrapper.html())
    })
})