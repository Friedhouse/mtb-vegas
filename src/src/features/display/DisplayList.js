import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedTrail } from '../trails/TrailsSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import Error from '../components/Error';
import Loading from '../components/Error';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedTrail(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);

    console.log('display items:', items);

    return (
        <Row>
            {items.map((item, idx) => {
                const { featuredItem, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                if (featuredItem) {
                    return (
                        item && (
                            <Col md className='m-1' key={idx}>
                                <AnimatedDisplayCard item={featuredItem} />
                            </Col>
                        )
                    );
                }
                return null;
            })}
        </Row>
    );
};

export default DisplayList;
