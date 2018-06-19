import React from "react";
import styled from "styled-components";

const isServerSideRendering = typeof window === "undefined";
const GreenContent = styled.div`
  background: palegreen;
`;

export default () =>
  isServerSideRendering ? (
    <GreenContent>SSR Rendering</GreenContent>
  ) : (
    <div>
      Rehydration<br />This shouldn't be inside a green box
    </div>
  );
