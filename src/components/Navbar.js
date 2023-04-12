import React from 'react';
import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div style={{backgroundColor : "#eeeeee", padding : "30px", fontFamily: "Arial", }} >
//             <Link to={'/'}>Home</Link> |  {' '}
//             <Link to={'/about'}>About</Link> | {' '}
//             <Link to = {'/experience'}>Experience</Link> | {' '}
//             <Link to={'/skill'}>Skill</Link> | {' '}
//             <Link to={'/interest'}>Interest</Link> | {' '}
//            <Link to={'/awards'}>Awards</Link> | {' '}
//         </div>
//     );
// };

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="nav navbar-dark dg-dark">
            <li>
              {' '}
              <Link to={'/about'} style={{ textDecoration: 'none' }}>
                About
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to={'/Education'} style={{ textDecoration: 'none' }}>
                Education
              </Link>{' '}
            </li>
            <li>
              <Link to={'/experience'} style={{ textDecoration: 'none' }}>
                Experience
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to={'/skill'} style={{ textDecoration: 'none' }}>
                Skill
              </Link>{' '}
            </li>
            {/* <li> <Link to={'/interest'} style={{textDecoration :'none'}} >Interest</Link>  {' '}</li>
                       <li><Link to={'/awards'} style={{textDecoration :'none'}}>Awards</Link> {' '}</li> */}
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
