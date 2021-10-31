import styled from "@emotion/native"
import { TextInput } from "react-native-paper"

export const TextInputStyled = styled(TextInput)`
    margin: 10px;
`

TextInputStyled.defaultProps = {
    mode: "outlined"
}