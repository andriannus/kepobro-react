import React from "react";

import 'shared/components/button-to-top/button-to-top.scss';

export const Container = ({ onBackToTop }) => {
  return (
    <button
      id="ButtonToTop"
      className="button is-dark is-medium"
      onClick={onBackToTop}
    >
      <span className="icon">
        <i className="fas fa-angle-double-up" />
      </span>
    </button>
  )
}
