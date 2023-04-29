import '../App.css'
import ButtonAppBar from './header'
import HeroCenter from './hero'

const HomePage = () => {
    return (
        <div>
            <ButtonAppBar/>
            <HeroCenter/>
            <a href="/comments" target="_blank" rel="noopener noreferrer">
              <button type="submit" >View Feedback</button>
        </a>
        </div>
    )
}

export default HomePage