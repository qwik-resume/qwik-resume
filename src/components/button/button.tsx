import { component$, PropFunction, Slot } from '@builder.io/qwik';

export enum ButtonSize {
  XS = 'xs',
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = 'xl',
  TWO_XL = '2xl',
  THREE_XL = '3xl',
  FOUR_XL = '4xl',
  FIVE_XL = '5xl',
  SIX_XL = '6xl',
  SEVEN_XL = '7xl',
  EIGHT_XL = '8xl',
}

export enum ButtonWeight {
  THIN = 'thin',
  EXTRA_LIGHT = 'extralight',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semibold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extrabold',
  BLACK = 'black',
}

export interface ButtonProps {
  onClick$?: PropFunction<() => void>;
  classes?: { [key: string]: boolean };
  id?: string;
  rounded?: boolean;
  size?: ButtonSize;
  uppercase?: boolean;
  weight?: ButtonWeight;
}

/**
 * Button component
 */
export const Button = component$<ButtonProps>((props: ButtonProps = {}) => {
  const {
    id,
    rounded = true,
    size = ButtonSize.BASE,
    uppercase = true,
    weight = ButtonWeight.MEDIUM,
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
    <button id={id} type='button' class={classes} onClick$={props.onClick$}>
      <Slot></Slot>
    </button>
  );
});
