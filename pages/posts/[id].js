import { useRouter } from 'next/router'

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map((post) => {
        return {
            params: { id: post.id.toString() }
        }
    });

    return {
        paths, fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

    const data = await res.json();

    return {
        props: {
            details: data
        }
    }

}


const Details = ({ details }) => {

    const { query } = useRouter();
    return (
        <div>
            {query.id}
            <h1>{details.name}</h1>
            <p>{details.email}</p>
            <p>{details.website}</p>
            <p>{details.address.city}</p>
        </div>
    );
}

export default Details;