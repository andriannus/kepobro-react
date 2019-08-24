import React, { useEffect } from "react";

import { Container } from 'shared/components/button-to-top/button-to-top';

const ButtonToTop = () => {
  useEffect(() => {
    window.onscroll = () => {
      const button = document.getElementById('ButtonToTop');

      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }, []);

  function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <Container onBackToTop={backToTop} />
  );
}

export default ButtonToTop;
