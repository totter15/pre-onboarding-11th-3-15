import { styled } from 'styled-components';

export const Markdown = styled.div`
  line-height: 170%;
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 10px 0;
    border-bottom: 1px solid gray;
    line-height: 120%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 10px 0;
    border-bottom: 1px solid gray;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 12px 0;
  }
  h4 {
    font-size: 1rem;
    font-weight: 600;
  }
  p {
    font-size: 0.875rem;
    margin-bottom: 5px;
  }
  a {
    text-decoration-line: underline;
    color: #3f8dff;
  }
  b,
  strong {
    font-weight: 600;
  }
  li {
  }
  code {
    font-size: 0.8rem;
    background-color: #edf1f5;
    padding: 0.2em 0.4em;
    border-radius: 6px;
    white-space: break-spaces;
    font-weight: 500;
  }
`;
