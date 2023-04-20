import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8TGFrc2hhZHdlZXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          heading="Trip to Lakshadweep"
          text="Formerly known as Laccadive Islands, Lakshadweep translates to 'one hundred thousand islands' in Malayalam. Home to a few of the most beautiful and exotic islands and beaches of India, Lakshadweep lies 400km off the southwest coast of the Arabian Sea. The smallest union territory of India has only 36 islands having a total area of 32 sq. kilometres. It's made up of 12 atolls, 3 reefs and 5 submerged banks out of which ten Islands are inhabited."
        />

        <TripData
          image="https://img.freepik.com/premium-photo/beach-restaurant-shacks-sunbeds-arambol-beach-north-goa-india_78361-9591.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=sph"
          heading="Trip to Goa"
          text="Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or a beach getaway, and one of the only few destinations that is open 24x7. The laid-backness (susegad) of Goa attracts as many international tourists as it does Indians, or even more so."
        />

        <TripData
          image="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Suntemple-Konark.jpg"
          heading="Trip to Konark"
          text="Konark is a hub of ancient art and sculpture and the best Odisha destinations. The carvings of the Konark Sun Temple, one of the seven wonders of India, attract large flocks of tourists throughout the year. Along with the marvellous temples, the city has a serene beach and an engrossing archaeological museum to explore. Discovering the finest artwork & sculptures of the Konark Sun Temple is surely one of the primary reasons to visit Odisha, especially for art lovers."
        />
      </div>
    </div>
  );
}

export default Trip;
