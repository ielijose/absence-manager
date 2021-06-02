import styled from 'styled-components';

type FlexProps = {
  justifyContent?: string;
  alignItems?: string;
  direction?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;

  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
`;
