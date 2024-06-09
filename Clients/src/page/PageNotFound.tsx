import styled from "styled-components"
import Heading from "../Components/layout/Header/Heading";
import Button from "../Components/UI/Button/Button";
import { useMoveBack } from '../hooks/useMoveBack';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-gray-500);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  
  background-color: var(--color-gray-0);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--border-radius-md);

  & h1 {
    margin-bottom: 3.2rem;
  }
`;


export default function PageNotFound() {
  const moveBack = useMoveBack

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
        The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  )
}
