import "../css/CustomOrder.css";

const CustomOrder = () => {
  return (
    <section className="custom-order-page">
      <div className="order-container">

        {/* LEFT CONTENT */}
        <div className="order-info">
          <span className="order-badge">Get in Touch</span>
          <h2>Ready to Order?</h2>
          <p>
            Whether it's a custom cake for a special occasion or a weekly bread
            subscription, we're here to make your baked dreams come true.
          </p>

          <div className="contact">
            <div className="contact-item">
              <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#eadfce"><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/></svg></span>
              <span>(+63) 912 345 6789</span>
            </div>

            <div className="contact-item">
              <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#eadfce"><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z"/></svg></span>
              <span>sweethomebakery@gmail.com</span>
            </div>
          </div>

          <ul className="order-features">
            <li><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#eadfce"><path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67t237.17-96.16Q813.33-339 813.33-480q0-26-3.66-51-3.67-25-11-48.67L851-632q14.33 35.33 21.67 73.33 7.33 38 7.33 78.67 0 84.33-31.17 157.33-31.16 73-85.16 127t-127 84.84Q563.67-80 480-80Zm-58-217.33L255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z"/></svg> Custom designs available</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#eadfce"><path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67t237.17-96.16Q813.33-339 813.33-480q0-26-3.66-51-3.67-25-11-48.67L851-632q14.33 35.33 21.67 73.33 7.33 38 7.33 78.67 0 84.33-31.17 157.33-31.16 73-85.16 127t-127 84.84Q563.67-80 480-80Zm-58-217.33L255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z"/></svg> Dietary options offered</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#eadfce"><path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67t237.17-96.16Q813.33-339 813.33-480q0-26-3.66-51-3.67-25-11-48.67L851-632q14.33 35.33 21.67 73.33 7.33 38 7.33 78.67 0 84.33-31.17 157.33-31.16 73-85.16 127t-127 84.84Q563.67-80 480-80Zm-58-217.33L255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z"/></svg> 48-hour notice preferred</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#eadfce"><path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67t237.17-96.16Q813.33-339 813.33-480q0-26-3.66-51-3.67-25-11-48.67L851-632q14.33 35.33 21.67 73.33 7.33 38 7.33 78.67 0 84.33-31.17 157.33-31.16 73-85.16 127t-127 84.84Q563.67-80 480-80Zm-58-217.33L255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z"/></svg> Same-day rush available</li>
          </ul>
        </div>

        {/* FORM CARD */}
        <div className="order-form-card">
          <h3>Place a Custom Order</h3>

          <form className="order-form">
            <div className="form-row">
              <div>
                <label>Your Name</label>
                <input type="text" placeholder="Juan Dela Cruz" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="(+63) 912 345 6789" />
              </div>
            </div>

            <label>Email Address</label>
            <input type="email" placeholder="juandelacruz@example.com" />

            <label>Order Type</label>
            <select>
              <option>Select order type</option>
              <option>Custom Cake</option>
              <option>Pastries</option>
              <option>Bread</option>
              <option>Cookies</option>
              <option>Bulk Order</option>
            </select>

            <label>Tell Us About Your Order</label>
            <textarea
              placeholder="Describe your dream baked goods – flavors, design, quantity, and date needed..."
            ></textarea>

            <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eadfce"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg> Submit Order Request</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default CustomOrder;
