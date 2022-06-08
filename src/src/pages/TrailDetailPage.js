import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectTrailsById } from '../features/trails/TrailsSlice';
import TrailsDetail from '../features/trails/TrailsDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../features/components/SubHeader';
import Error from '../features/components/Error';
import Loading from '../features/components/Loading';

const TrailDetailPage = () => {
    const { trailId } = useParams();
    const trail = useSelector(selectTrailsById(trailId));
    console.log('trail', trail);

    const isLoading = useSelector((state) => state.trails.isLoading);
    const errMsg = useSelector((state) => state.trails.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <TrailsDetail trail={trail} />
                <CommentsList trailId={trailId} />
            </>
        );
    }

    return (
        <Container>
            {trail && <SubHeader current={trail.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default TrailDetailPage;
