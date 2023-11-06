import * as React from 'react';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/ugurkiymetli/blackjack"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-github-sign" /> repo
        </a>
      </div>
      <div>
        <a
          href="https://linkedin.com/in/ugurkiymetli"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-linkedin-sign" /> uğur
        </a>
      </div>
    </footer>
  );
}
