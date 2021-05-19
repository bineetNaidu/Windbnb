import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Navbar />
      <h1>Hello Windbnb</h1>
    </Container>
  );
}
