import { RenderFunction, SetupContext, defineCustomElement } from 'vue'

type Component = {
    component: (props: Readonly<HTMLElement>, ctx: SetupContext) => object | RenderFunction, 
    tag: `m-${string}`
};

([] as Component[]).map(c => {
    const { component } = c;
    customElements.define(c.tag, defineCustomElement(component));
});
