import { Ref, ref } from "vue";

const appBarHeight = ref<`${number}px`>('0px');
const topAppBarHeight = ref<`${number}px`>('0px');

type UseAppBarReturn<
    Type extends 'get' | 'set' | null,
    Getter = Ref<`${number}px`>,
    Setter = (h: `${number}px`) => void,
    Mix = [height: Getter, setHeight: Setter]
> = Type extends null 
    ? Mix
    : Type extends 'get' 
        ? Getter 
        : Setter;

const createUseAppBar = (r: Ref<`${number}px`>) => <
    Type extends 'get' | 'set' | null, 
    Return extends UseAppBarReturn<Type> = UseAppBarReturn<Type>
>(type: Type = null as Type): Return => {
    if (type === 'get') return r as Return;
    if (type === 'set') return ((h) => { r.value = h }) as Return;
    return [r, (h) => { r.value = h }] as Return;
}

export const useAppBar = createUseAppBar(appBarHeight);

export const useTopAppBar = createUseAppBar(topAppBarHeight);