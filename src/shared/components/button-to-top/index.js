import React, { useEffect } from "react";

import { Container } from 'shared/components/button-to-top/button-to-top-content';

const ButtonToTop = () => {
  useEffect(() => {
    window.onscroll = () => {
      const button = document.getElementById('ButtonToTop');
      const { body, documentElement } = document;

      if ( body.scrollTop > 300 || documentElement.scrollTop > 300) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }, []);

  function backToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
        return;
      }

      window.scrollBy(0, scrollStep);
    }, 15);
  }

  return <Container onBackToTop={backToTop} />
}

export default ButtonToTop;
