import { Feature } from "../../components/featured/feature"
import { List } from "../../components/list/list"
import { Navbar } from "../../components/navbar/navbar"
import "./home.scss"


export const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Feature type={'home'}/>
      <List/>
      
    </div>
  )
}
