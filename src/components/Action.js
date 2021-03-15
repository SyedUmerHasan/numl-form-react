import React, { useEffect, useRef } from 'react';

const ROLE_MAP = {
  'nu-btn': 'button',
  'nu-link': 'link',
  'nu-cardbtn': 'button',
  'nu-checkbox': 'checkbox',
  'nu-switch': 'switch',
  'nu-radio': 'radio',
};

export default function Action({
  as,
  onTap,
  onInput,
  to,
  children,
  label,
  ...props
}) {


  return (
      <>
      Hello 
      </>
  );
}