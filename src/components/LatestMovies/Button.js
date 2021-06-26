import { connect} from 'react-redux';
import { getLatestMovies} from '../../actions';

let Button = ({getLatestMovies})=>(
    <div>
        <button onClick={getLatestMovies}>Get Latest Movies</button>
    </div>
)

const mapDispatchToProps = {
    getLatestMovies : getLatestMovies
}

Button = connect(null,mapDispatchToProps)(Button);
export default Button;