import styled from 'styled-components'

export const Icon = styled.span`
    svg {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height || '100%'};
        opacity: ${(props) => props.opacity || '1'};
        circle {
            fill: ${(props) => props.fill || '#999AAD'};
        }
    }
`