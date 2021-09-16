import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
const meetups = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        address: ' this is addresss',
        description: 'this is a first meetup'
    },
    {
        id: 'm2',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        address: ' this is addresss',
        description: 'this is a first meetup'
    },
    {
        id: 'm3',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        address: ' this is addresss',
        description: 'this is a first meetup'
    }
]

function HomePage(props) {
    return (
        <div>
            <Head><title>React Meetups</title>
                <meta name="desccription" content="Browse a huge list of  React meetups " />
            </Head>
            <Layout>
                <MeetupList meetups={meetups} />
            </Layout>
        </div>
    )
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    return {
        props: {

        }
    }
}

// these codes only run on server and user will not be able to see it 
// export async function getStaticProps() {
//     return {
//         props: {
//             meetups: meetups
//         },
//         revalidate: 10
//will change evry 10 seconds
//     }
// }

export default HomePage
