import "./Map.css";


function Map(){
  return (
    <div id="map_container">
    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.17497155167!2d76.65758911415044!3d30.516091103094293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665165713194!5m2!1sen!2sin" id="map" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}


export default Map;