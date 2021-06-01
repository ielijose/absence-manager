import styled, { keyframes } from 'styled-components';

export const Card = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  border-width: 1px;
  border-color: #f3f4f6;
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
`;
export const Table = styled.table`
  border-collapse: collapse;
  font-family: sans-serif;
  width: 100%;
`;

export const THead = styled.thead`
  background-color: #f9fafb;
  color: #1f2937;
  text-align: left;
`;

export const Th = styled.th`
  padding: 1rem 2rem;
`;
export const Td = styled.td`
  font-size: 0.875rem;
  font-size: 0.875rem;
  padding: 1rem 2rem;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #f3f4f6;
  height: 3rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  color: #1f2937;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const MemberImage = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 50%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

// Loader

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`;

export const Loader = styled.div`
  width: 6rem;
  background-color: #e5e7eb;
  height: 1rem;
  border-radius: 0.25rem;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const LoaderXL = styled(Loader)`
  width: 12rem;
`;
