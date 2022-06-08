import { Container } from 'reactstrap';
import TrailsList from '../features/trails/TrailsList';
import SubHeader from '../features/components/SubHeader';

const TrailsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Trails' />
            <TrailsList />
        </Container>
    );
};

export default TrailsDirectoryPage;
