import React from "react";
import { TermsAndCondition } from "../../constants/termsConditions";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <div >
      <div style={{ padding: '5%' }}>
        <p style={{ fontSize: "30px", textAlign: "center", color: "black" }}>Privacy Policy</p>
        {
          TermsAndCondition.map((item: any) =>
            <div key={item.title}>
              <p style={{ marginBottom: '20px', color: 'black', fontSize: '20px' }}>{item.title}</p>
              <p style={{ marginBottom: "15px" }}>{item.content}</p>
            </div>
          )
        }
      </div>
      <div>
        <Link href="/">
          <button className="btn btn-primary has-before has-after"
            style={{ margin: "auto", marginBottom: "10px", alignItems: 'center' }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
export default TermsConditions;