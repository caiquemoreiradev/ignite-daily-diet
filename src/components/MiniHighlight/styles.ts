import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

type MiniHighlightTypeStyleProps = {
    type: 'DEFAULT' | 'PRIMARY' | 'SECONDARY';
}

type Props = MiniHighlightTypeStyleProps;

const padding = 44;

const Container = styled.View<Props>`
    width: 100%;
    height: 124px;
    padding: ${padding}px;
    background-color: ${
        ({ theme, type }) => type === 'DEFAULT' ?
        theme.COLORS.BASE.GRAY_5 : type === 'PRIMARY' ?
        theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT
    };
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `}
    text-align: center;
`

const Icon = styled(MaterialIcons).attrs<Props>(({ theme }) => ({
    name: 'arrow-back',
    size: 24,
    color: theme.COLORS.BASE.GRAY_2
}))`
    position: absolute;
    bottom: ${padding}px;
    left: ${padding - 20}px; /* 20px is how much the screen's Container is on top of the MiniHighlight Container */
`;

export { MiniHighlightTypeStyleProps, Container, Title, Icon };