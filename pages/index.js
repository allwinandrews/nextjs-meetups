import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Dartmoor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/View_to_Sharpitor_from_Meavy.JPG/1280px-View_to_Sharpitor_from_Meavy.JPG",
    address: "Dartmoor National Park",
    description:
      "Dartmoor is an upland area in southern Devon, England. The moorland and surrounding land has been protected by National Park status since 1951. Dartmoor National Park covers 954 km2 (368 sq mi).",
  },
  {
    id: "m2",
    title: "Malham Cove",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Malham_Cove.jpg/1280px-Malham_Cove.jpg",
    address: "Malham, North Yorkshire",
    description:
      "Malham Cove is a large curved limestone formation 0.6 miles (1 km) north of the village of Malham, North Yorkshire, England. It was formed by a waterfall carrying meltwater from glaciers at the end of the last Ice Age more than 12,000 years ago. Today it is a well-known beauty spot within the Yorkshire Dales National Park. A large limestone pavement is above the cove. ",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// only runs in server
// Pre generated for every incoming request
// Need to be generated for every request
// When revalidate won't help
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from api

  return {
    props: { meetups: DUMMY_MEETUPS },
  };
}

// If you don't need access to the request object use getStaticProps
// Simply is faster when you don't need every change
// export async function getStaticProps() {
//   // fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }

export default HomePage;
