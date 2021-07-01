import SinglePost from './SinglePost';
import SlideRight from './../components/SlideRight';
import "./../assets/sass/Single.scss";

export default function Single() {
    return (
        <div className="SingleContainer">
            <SinglePost/>            
            <SlideRight/>            
        </div>
    )
}
