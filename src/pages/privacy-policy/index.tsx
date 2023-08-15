import React from 'react';
import { PrivacyPolicy } from '../../constants/privacyPolicy';

const Privacy = () => {
  return (
    <div >
      <div style={{ padding: '5%' }}>
        <p style={{ fontSize: "30px", textAlign: "center", color: "black" }}>Privacy Policy</p>
        {
          PrivacyPolicy.map((item: any) =>
            <div>
              <p style={{ marginBottom: '20px', color: 'black', fontSize: '20px' }}>{item.title}</p>
              <p style={{ marginBottom: "15px" }}>{item.content}</p>
            </div>
          )
        }
      </div>
      <div>
        <a href="/" className="btn btn-primary" style={{ margin: "auto", marginBottom: "10px" }}>
          Back to Home
        </a>
      </div>
    </div>
  )
}
export default Privacy;