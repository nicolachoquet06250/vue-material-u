import { RenderFunction, SetupContext, defineCustomElement } from 'vue'

import HelloWorld from './HelloWorld.ce.vue'
import Test from './Test.ce.vue'
// import Test2 from './Test2.ce.vue'

[{
    component: HelloWorld, 
    tag: 'm-hello-world'
}, {
    component: Test, 
    tag: 'm-test'
}].map(c => {
    const { component } = c;
    type C = (props: Readonly<HTMLElement>, ctx: SetupContext) => object | RenderFunction;
    customElements.define(c.tag, defineCustomElement(component as unknown as C));
});

// const MHelloWorld = defineCustomElement(HelloWorld)
// const MTest = defineCustomElement(Test)
// const MTest2 = defineCustomElement(Test2)

// customElements.define('m-hello-world', MHelloWorld)
// customElements.define('m-test', MTest)
// customElements.define('m-test-2', MTest2)