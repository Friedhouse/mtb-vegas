import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import TrailCard from './TrailsCard';
import { selectAllTrails } from './TrailsSlice';
import Error from '../components/Error';
import Loading from '../components/Loading';

const TrailsList = () => {
    const trails = useSelector(selectAllTrails);

    console.log('trails:', trails);

    const isLoading = useSelector((state) => state.trails.isLoading);
    const errMsg = useSelector((state) => state.trails.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className='ms-auto'>
            {trails.map((trail) => {
                return (
                    <Col md='5' className='m-4' key={trail.id}>
                        <TrailCard trail={trail} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default TrailsList;
