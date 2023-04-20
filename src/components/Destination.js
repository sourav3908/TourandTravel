import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Experience the world, one adventure at a time.</p>

      <DestinationData
        className="first-des"
        heading="Manali, Himachal Pradesh"
        text="With spectacular valleys, breathtaking views, snowcapped mountains,
      and lush forests of oak, deodar, and pine, Manali is a magical hill
      station at the northern end of Kullu valley in Himachal Pradesh.
      Gifted to the world by the mighty Himalayas, it is known to be one
      of the most popular destinations for Honeymooners. Manali offers
      magnificent views of the Pir Panjal and the Dhauladhar ranges,
      covered in a thick blanket of snow for most of the year."
        img1="https://img.freepik.com/free-photo/vertical-shot-lochawa-la-khang-monastery-kalpa-himachal-pradesh-during-cold-winter_181624-23562.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=sph"
        img2="https://images.unsplash.com/photo-1590667046100-2e0fd9a5b31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Leh Ladakh"
        text="Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir. Ladakh is an adventure playground for rafting and high-altitude trekking. Note that Leh Ladakh is inaccessible by road outside the summer months. The route passes close altogether from around October to May, and the only way to reach is by air. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert."
        img1="https://img.freepik.com/free-photo/indian-travel-destination-beautiful-attractive_53876-23226.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=ais"
        img2="https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVoJTIwbGFkYWtofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />

      <DestinationData
        className="first-des"
        heading="Coorg, Karnataka"
        text="Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality."
        img1="https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning-nature-background_335224-956.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=sph"
        img2="https://img.freepik.com/free-photo/beautiful-shot-waterfall-coming-down-from-mountains_181624-1282.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=sph"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Andaman"
        text="Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country and with various tourist islands via multiple daily ferries. Havelock and Neil Islands are popular among tourists for their white sandy beaches and excellent diving options."
        img1="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=sph"
        img2="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg?size=626&ext=jpg&ga=GA1.2.390173768.1666948102&semt=sph"
      />
    </div>
  );
};

export default Destination;
