function MyMap() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102529.01836516598!2d2.17636192402961!3d36.577450921807326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12857596e17edc63%3A0x2d668152c97d6a04!2sCherchell!5e0!3m2!1sfr!2sdz!4v1667900443065!5m2!1sfr!2sdz"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MyMap;
