import { Container } from './styles';
import { Summary } from '../Summary';
import { TransationTable } from '../TransactionTable';

export function Dashboard(){
  return (
    <Container>
    <Summary />
    <TransationTable/>
    </Container>
  );
};