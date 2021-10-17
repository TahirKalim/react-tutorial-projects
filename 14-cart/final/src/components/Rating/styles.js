  import styled from 'styled-components';

  export const Rate = styled.div`
    
  `
  export const StarOuter = styled.div`
    position: relative;
    display: inline-block;
    &::before{
      content: "\f005 \f005 \f005 \f005 \f005";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color: #ccc;
    }
  `

  export const StarInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    &::before{
      content: "\f005 \f005 \f005 \f005 \f005";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color: #f8ce0b;
    }
  `