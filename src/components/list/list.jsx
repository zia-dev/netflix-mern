import { ListItem } from '../listItem/listItem'
import './list.scss'

export const List = () => {
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
        <i class="fa-sharp fa-solid fa-caret-left"></i>
        <div className="container">
            <ListItem/>
        </div>
        <i class="fa-sharp fa-solid fa-caret-right"></i>
        </div>

    </div>
  )
}
