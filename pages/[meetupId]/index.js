import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/View_to_Sharpitor_from_Meavy.JPG/1280px-View_to_Sharpitor_from_Meavy.JPG"
      title="A 1st meetup"
      description="Meetup Description"
      address="Some street"
    />
  );
}

export async function getStaticPaths() {
  return {
    // fallback false only when all the data is loaded
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  // only executes in developer server, not in browser console
  //   console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/View_to_Sharpitor_from_Meavy.JPG/1280px-View_to_Sharpitor_from_Meavy.JPG",
        id: meetupId,
        title: "A 1st meetup",
        description: "Meetup Description",
        address: "Some street",
      },
    },
  };
}
