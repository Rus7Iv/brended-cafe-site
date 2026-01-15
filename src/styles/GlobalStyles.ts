import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    color-scheme: light;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.7s ease,
      transform 0.7s ease;
    will-change: opacity, transform;
  }

  [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    [data-reveal] {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  @media ${({ theme }) => theme.media.downMd} {
    * {
      -webkit-tap-highlight-color: transparent;
    }

    *:focus,
    *:active {
      outline: none;
      box-shadow: none;
    }
  }
`

export default GlobalStyles
