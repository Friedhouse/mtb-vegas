import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByTrailId } from './commentsSlice';

const CommentsList = ({ trailId }) => {
    const comments = useSelector(selectCommentsByTrailId(trailId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm trailId={trailId} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this trail yet.
        </Col>
    );
};

export default CommentsList;
