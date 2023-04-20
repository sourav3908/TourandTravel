import React from "react";
// import React, {useState} from "react";
import styled from "styled-components";
import Destination1 from "../assets/puri.avif";
import Destination2 from "../assets/similipal.avif";
import Destination3 from "../assets/daringbadi.avif";
import Destination4 from "../assets/chilika.avif";
import Destination5 from "../assets/konark.avif";
import Destination6 from "../assets/hirakud.avif";
import info1 from "../components/info1.png";
import info2 from "../components/info2.png";
import info3 from "../components/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Jagannath Temple, Puri",
      subTitle:
        "Puri in Odisha is one of the four must-visit pilgrimage sites for Hindus because of Jagannath Temple that forms the part of Char Dham in India. Puri is a beach city located on the coast of Bay of Bengal which is one of the favourites among people of West Bengal for a short trip.",
      cost: "3,999/-",
      distance: "900km",
      duration: "Approx 2 night trip"
    },
    {
      image: Destination2,
      title: "Similipal National Park, Baripada",
      subTitle:
        "Reflecting the natural beauty of an era gone by, Simlipal National Park is in a beautiful and scenic town in Odisha. Situated in Mayurbhanj, it once used to be a hunting ground for the rulers of the province. Simlipal is the largest wildlife sanctuary in India and is also considered as one of the principal tiger projects in India.",
      cost: "4,999/-",
      distance: "1250km",
      duration: "Approx 2 night trip"
    },
    {
      image: Destination3,
      title: "Daringbadi, Phulbani",
      subTitle:
        "Daringbadi is a hilly town in Odisha. Hidden a state famous for beaches and temples, this hill station lies peacefully at an elevation of 3000 feet waiting to be explored. Replete with pine trees, coffee gardens and splendid valleys, Daringbadi is known as the “Kashmir of Odisha”.",
      cost: "2,999/-",
      distance: "650km",
      duration: "Approx 2 night trip"
    },
    {
      image: Destination4,
      title: "Chilika Lake, Lagoon",
      subTitle:
        "Chilika Lake is the largest internal salt water lake in Asia, it is a paradise on earth for bird watchers and nature lovers. The pear-shaped lake is dotted with a few small islands and has fisheries and salt pans around its shore.",
      cost: "2,999/-",
      distance: "1500km",
      duration: "Approx 1 night trip"
    },
    {
      image: Destination5,
      title: "Konark Sun Temple",
      subTitle:
        "Konark, in the state of Orissa is renowned world over for the Sun Temple which is also a UNESCO World Heritage Site, the Annual dance festival and its beautiful sandy beaches.Konark's Sun Temple is an architectural marvel and is one of the most beautiful monuments of India.",
      cost: "5,999/-",
      distance: "1100km",
      duration: "Approx 2 night trip"
    },
    {
      image: Destination6,
      title: "Hirakud Dam, Sambalpur",
      subTitle:
        "Constructed across the Mahanadi River in Sambalpur, Odisha the Hirakud Dam is hailed as the longest human-made dams in India. Astonishingly, it is over 56km long and is the top pick among the locals as well as tourists to enjoy a refreshing day out.",
      cost: "3,999/-",
      distance: "850km",
      duration: "Approx 3 night trip"
    }
  ];

  // const packages = [
  //   "The Weekend Break",
  //   "The Package Holiday",
  //   "The Group Tour",
  //   "Long Term Slow Travel"
  // ];

  // const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Famous Destinations in Odisha</h2>
      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {data.map((desti) => {
          return (
            <div className="desti">
              <img src={desti.image} alt="" />
              <h3>{desti.title}</h3>
              <p>{desti.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{desti.cost}</h4>
              </div>
              <div className="distance">
                <span>{desti.distance}</span>
                <span>{desti.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .desti {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
