import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const DeleteButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
background: transparent;
border: none;

img{
    width: 21px;
    filter: opacity(0.6);
    margin: 0 auto;
    transition: filter 0.2s;
&:hover{
    filter: opacity(1);

}
// Switch to rows on large devices
@media ${device.mobileL} {
    flex-direction: row;
  }
`

export const TableData = styled.td`

// Switch to rows on large devices
@media ${device.mobileL} {
    flex-direction: row;
  }
`