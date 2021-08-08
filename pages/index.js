import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FooterMobile from '../components/FooterMobile';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      <main className="sm:max-w-7xl sm:mx-auto px-8 pb-10">
        <section className="pt-14 ">
          <h2 className="text-4xl text-black font-semibold pb-5">
            Explore nearby
          </h2>
          <div className="overflow-scroll scrollbar-hide pb-8 sm:space-y-6">
            <div className="sm:grid sm:grid-cols-4 ">
              {exploreData &&
                exploreData
                  ?.slice(0, 4)
                  .map(({ img, distance, location }) => (
                    <SmallCard
                      key={img}
                      img={img}
                      distance={distance}
                      location={location}
                    />
                  ))}
            </div>
            <div className="sm:grid sm:grid-cols-4 ">
              {exploreData &&
                exploreData
                  ?.slice(4)
                  .map(({ img, distance, location }) => (
                    <SmallCard
                      key={img}
                      img={img}
                      distance={distance}
                      location={location}
                    />
                  ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-6 overflow-scroll scrollbar-hide p-3">
            {cardsData &&
              cardsData.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
          </div>
        </section>
        <LargeCard
          img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560"
          title="Try Hosting"
          description="Wishlists curated by Airbnb"
          buttonText="Learn more"
        />
      </main>
      <Footer />

      <FooterMobile />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
