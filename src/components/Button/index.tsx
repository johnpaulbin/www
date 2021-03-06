import React from 'react'
import { Icon } from '../Icon'

/* tslint:disable */
export const Button = (props: {
  onClick?: any
  style?: any
  type?: 'primary' | 'secondary' | 'text'
  children: any
  href?: string
  iconLeft?: string
  iconRight?: string
  className?: string
  disabled?: boolean
  lsp?: number
  rsp?: number
  iconSize?: number
}) => {
  const {
    onClick,
    href,
    type,
    className,
    disabled,
    style,
    iconLeft,
    iconRight,
    lsp,
    rsp,
    iconSize,
    children,
  } = props

  return (
    <a
      onClick={onClick}
      href={href}
      className={`btn ${type ? `btn-${type}` : ''} ${
        className ? className : ``
      } ${disabled ? `btn-disabled` : ``}`}
      style={style}
      {...props}
    >
      {iconLeft && (
        <Icon
          lsp={lsp || 0}
          rsp={rsp}
          i={iconLeft}
          size={iconSize || 14}
        ></Icon>
      )}
      {children}
      {iconRight && (
        <Icon
          lsp={lsp || 0}
          rsp={rsp}
          i={iconRight}
          size={iconSize || 14}
        ></Icon>
      )}
    </a>
  )
}
