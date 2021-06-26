import { connect } from "react-redux";


let Loading  =({loading}) => (
    loading?  <div>Loading ....</div> : null
)

const mapStateToProps = (state)=> ({loading: state.isLoading});

Loading = connect(mapStateToProps,null)(Loading);

export default  Loading;