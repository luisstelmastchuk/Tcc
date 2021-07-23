import styled, { css } from 'styled-components'

export const PartituraStyle = styled.div`
  background-color: white;
  position: relative;
  height: 180px;
  width: 800px;
  padding: 35px 50px 35px 50px;
  border: 2px solid black;
`
export const PartituraInterno = styled.div`
  background-color: white;
  position: relative;
  height: 20px;
  width: 700px;
  border-top: 2px solid black;
`
interface INota {
  isActived?: string
}

export const C0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 20px;
  top: 9px;
  ${(props) => {
    if (props.isActived == 'C0' || props.isActived == 'DF0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const C01 = styled.div<INota>`
  position: relative;
  width: 35px;
  height: 2px;
  top: 8px;
  left: -5px;
  ${(props) => {
    if (props.isActived == 'C0' || props.isActived == 'DF0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const D0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 60px;
  top: -20px;
  ${(props) => {
    if (props.isActived == 'D0' || props.isActived == 'EF0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const E0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 100px;
  top: -45px;
  ${(props) => {
    if (props.isActived == 'E0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const F0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 140px;
  ${(props) => {
    if (props.isActived == 'F0' || props.isActived == 'GF0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const G0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 180px;
  top: -27px;
  ${(props) => {
    if (props.isActived == 'G0' || props.isActived == 'AF0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const A0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 220px;
  ${(props) => {
    if (props.isActived == 'A0' || props.isActived == 'BF0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const B0 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 260px;
  top: -27px;
  ${(props) => {
    if (props.isActived == 'B0') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const C1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 300px;
  ${(props) => {
    if (props.isActived == 'C1' || props.isActived == 'DF1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const D1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 340px;
  top: -27px;
  ${(props) => {
    if (props.isActived == 'D1' || props.isActived == 'EF1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const E1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 380px;
  ${(props) => {
    if (props.isActived == 'E1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const F1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 420px;
  top: -27px;
  ${(props) => {
    if (props.isActived == 'F1' || props.isActived == 'GF1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const G1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 460px;
  ${(props) => {
    if (props.isActived == 'G1' || props.isActived == 'AF1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const A1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 500px;
  top: -27px;
  ${(props) => {
    if (props.isActived == 'A1' || props.isActived == 'BF1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const B1 = styled.div<INota>`
  position: relative;
  width: 25px;
  height: 18px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 25px;
  left: 540px;
  top: -55px;
  ${(props) => {
    if (props.isActived == 'B1') {
      return css`
        background-color: black;
      `
    }
  }};
`
export const DF0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'DF0') {
      return css`
        color: black;
      `
    }
  }};
`
export const EF0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'EF0') {
      return css`
        color: black;
      `
    }
  }};
`
export const GF0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'GF0') {
      return css`
        color: black;
      `
    }
  }};
`
export const AF0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'AF0') {
      return css`
        color: black;
      `
    }
  }};
`
export const BF0 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'BF0') {
      return css`
        color: black;
      `
    }
  }};
`
export const DF1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'DF1') {
      return css`
        color: black;
      `
    }
  }};
`
export const EF1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -10px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'EF1') {
      return css`
        color: black;
      `
    }
  }};
`
export const GF1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'GF1') {
      return css`
        color: black;
      `
    }
  }};
`
export const AF1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'AF1') {
      return css`
        color: black;
      `
    }
  }};
`
export const BF1 = styled.h3<INota>`
  position: relative;
  text-align: center;
  left: -18px;
  top: -7px;
  color: transparent;
  ${(props) => {
    if (props.isActived == 'BF1') {
      return css`
        color: black;
      `
    }
  }};
`
