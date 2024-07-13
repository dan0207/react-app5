
import Proptypes from 'prop-types'

function Card({cardTitle, cardContent}) {
    return (
        <>
            <div className="card mb-3 text-center shadow-lg bg-light-subtle">
                <div className="card-header bg-primary text-light">{cardTitle}</div>
                <div className="card-body">
                    {cardContent}
                </div>
            </div>
        </>
    )
}

Card.propTypes ={
    cardTitle: Proptypes.string,
    cardContent: Proptypes.object
}

export default Card