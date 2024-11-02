import { Link } from 'react-router-dom'
import './card.scss'
import React from 'react'

export default function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.images[0]} alt="" />
      </Link>
      <div className='textContainer'>
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/images/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">Rs. {item.price}</p>

        <div className="bottom">

          <div className="features">
            <div className="feature">
              <img src="/images/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/images/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src="/images/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/images/chat.png" alt="" />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}


// import { Link } from 'react-router-dom';
// import './card.scss';
// import React from 'react';

// export default function Card({ item }) {
//   // Check if item and item.images exist before rendering
//   if (!item || !item.images || item.images.length === 0) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="card">
//       <Link to={`/${item.id}`} className='imageContainer'>
//         <img src={item.images[0]} alt={item.title || 'Image'} />
//       </Link>
//       <div className='textContainer'>
//         <h2 className="title">
//           <Link to={`/${item.id}`}>{item.title}</Link>
//         </h2>
//         <p className="address">
//           <img src="/images/pin.png" alt="Location" />
//           <span>{item.address}</span>
//         </p>
//         <p className="price">Rs. {item.price}</p>

//         <div className="bottom">
//           <div className="features">
//             <div className="feature">
//               <img src="/images/bed.png" alt="Bedrooms" />
//               <span>{item.bedroom} bedroom</span>
//             </div>
//             <div className="feature">
//               <img src="/images/bath.png" alt="Bathrooms" />
//               <span>{item.bathroom} bathroom</span>
//             </div>
//           </div>

//           <div className="icons">
//             <div className="icon">
//               <img src="/images/save.png" alt="Save" />
//             </div>
//             <div className="icon">
//               <img src="/images/chat.png" alt="Chat" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
