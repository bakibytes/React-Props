import '../App.css'
export default function Card({ icon, name, date, role, tag1, tag2, income, location }) {
  return (
      <div className='card'>
        <div className="top">
          <div className='top-left'><img src={icon} alt="Amazon logo" /></div>

          <div className=' top-right'>
            <p>Save</p>
            <span><img src="bookmark.png" alt="bookmark image" /></span>
          </div>
        </div>

        <div className="center">
          <div className='center-top'>
            <p>{name}</p>
            <span>{date}</span>
          </div>
          <div className='center-middle'>
            <h3>{role}</h3>
          </div>
          <div className='center-bottom'>
            <div >{tag1}</div>
            <div >{tag2}</div>
          </div>
        </div>

        <div className="bottom">

          <div className='bottom-left'>
            <p> {income}</p>
            <p>{location}</p>
          </div>
          <div className='bottom-right'>Apply now</div>
        </div>
      </div>  
  )
}
