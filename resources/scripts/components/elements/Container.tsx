import styled, { css } from 'styled-components/macro'
import tw from 'twin.macro'

interface ContainerProps {
    content?: boolean
}

const ContainerStyle = styled.div<ContainerProps>`
    ${
        (props) => props.content && css`${tw`flex flex-col items-center justify-center`}`
    }
`

type ComponentProps = Omit<JSX.IntrinsicElements['div'], 'ref'> & ContainerProps

const Container = ({ children, ...props }: ComponentProps) => {
    return <ContainerStyle {...props}>{children}</ContainerStyle>
}

export default Container