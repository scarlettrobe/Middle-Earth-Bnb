
import "./SpotList.css"

//here we need to get the users with the review.userId

export const SpotListReview = ({ review }) => {
    return (
        <>
            <div className='single-review'>
                <h2 className='review-names'>{review.User?.firstName}</h2>
                <p className='no-space'>{new Date(review.createdAt).toLocaleDateString()}</p>
                <div className='review'>
                    <p>{review.review}</p>
                </div>
            </div>
        </>
    )
}
