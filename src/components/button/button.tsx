import { component$, PropFunction, Slot } from '@builder.io/qwik';

export interface ButtonProps {
  onClick$?: PropFunction<() => void>;
  classes?: object;
  id?: string;
  rounded?: boolean;
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl';
  uppercase?: boolean;
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
}

export const Button = component$<ButtonProps>((props: ButtonProps = {}) => {
  const {
    id,
    rounded = true,
    size = 'base',
    uppercase = true,
    weight = 'medium',
  } = props;
  const classes = {
    'inline-block': true,
    rounded,
    'bg-dark-blue': true,
    [`text-${size}`]: true,
    [`font-${weight}`]: true,
    uppercase,
    'text-[white]': true,
    'py-2': true,
    'px-4': true,
    shadow: true,
    ...props.classes,
  };

  return (
    <button id={id} type="button" class={classes} onClick$={props.onClick$}>
      <Slot></Slot>
    </button>
  );
});
