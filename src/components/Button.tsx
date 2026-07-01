import type { ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'dark' | 'coral' | 'outline-light' | 'outline-dark';
export type ButtonSize = 'nav' | 'sm' | 'card' | 'md' | 'lg' | 'xl';

const VARIANT_STYLES: Record<ButtonVariant, CSSProperties> = {
  primary: { background: 'var(--color-lime)', color: 'var(--color-bark)' },
  dark: { background: 'var(--color-bark)', color: 'var(--color-shell)' },
  coral: { background: 'var(--color-coral)', color: 'var(--color-shell)' },
  'outline-light': {
    background: 'rgba(251,246,236,0.12)',
    border: '1.5px solid rgba(251,246,236,0.45)',
    color: 'var(--color-shell)',
  },
  'outline-dark': {
    background: 'rgba(58,42,30,0.12)',
    border: '2px solid rgba(58,42,30,0.2)',
    color: 'var(--color-bark)',
  },
};

const SIZE_STYLES: Record<ButtonSize, CSSProperties> = {
  nav: { padding: '10px 22px', fontSize: 14 },
  sm: { padding: '10px 20px', fontSize: 13 },
  card: { padding: '13px 24px', fontSize: 14 },
  md: { padding: '13px 28px', fontSize: 14 },
  lg: { padding: '15px 32px', fontSize: 15 },
  xl: { padding: '16px 32px', fontSize: 15 },
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  block?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
}

interface ActionButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'className' | 'children'> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

function isInternal(href: string) {
  return href.startsWith('/');
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    fullWidth,
    block,
    className,
    style,
    children,
  } = props;

  const content = (
    <>
      {icon && iconPosition === 'left' ? icon : null}
      {children}
      {icon && iconPosition === 'right' ? icon : null}
    </>
  );

  const combinedStyle: CSSProperties = {
    display: block ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    borderRadius: 100,
    letterSpacing: '0.02em',
    transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
    width: fullWidth ? '100%' : undefined,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    ...VARIANT_STYLES[variant],
    ...SIZE_STYLES[size],
    ...style,
  };

  const classes = ['ui-btn', className].filter(Boolean).join(' ');

  if ('href' in props && props.href) {
    const { href, external } = props;
    if (!external && isInternal(href)) {
      return (
        <Link to={href} className={classes} data-variant={variant} style={combinedStyle}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={classes} data-variant={variant} style={combinedStyle}>
        {content}
      </a>
    );
  }

  const { type = 'button', onClick, disabled } = props as ActionButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} data-variant={variant} style={combinedStyle}>
      {content}
    </button>
  );
}
