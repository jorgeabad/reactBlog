import PostsList from './postList';
import useRequestApi from './requestApi';

const Home = () => {
    const {data: posts} = useRequestApi('https://jorge-abad.es/publicaciones/categoria/tutorialNode');
    console.log(posts);

    return ( 
        <div>
            <PostsList posts={ posts} title="Todos los Posts"/>
        </div>
     );
}

export default Home;