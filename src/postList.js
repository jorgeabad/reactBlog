import { Link } from "react-router-dom";
import './App.css';
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";

/*const PostsList = ({ posts }) => {
  return (
    <div>
        
      {posts.map((post) => (
        
        <div key={post._id}>
          <Link
            to= {`/blogs/${post._id}`}
              state={post} 
        
          >
            <h2>{post.titulo}</h2>
            <p>Escrito por {post.autor}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};*/

const modulos = function (posts) {
  console.log(posts);
  const nombres = posts.map(function (post) {
    return post.modulo;
  });
  console.log(nombres);
  return nombres.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
};

const temas = function (posts) {
  console.log(posts);
  const nombres = posts.map(function (post) {
    return post.tema;
  });
  console.log(nombres);
  return nombres.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
};

const PostsPorModulo = function (posts, nombreModulo) {
  console.log("postpormodulo", posts);
  return posts.filter((post) => post.modulo === nombreModulo);
};

const PostsPorTema = function (posts, nombreTema) {
  console.log("postpormodulo", posts);
  return posts.filter((post) => post.tema === nombreTema);
};

function listaPorTemas(url, posts, tema) {
  return PostsPorTema(posts, tema).map(function (post) {
    console.log(tema);
    console.log(post.titulo);
    let img=post.img?post.img:'/img/inicio.jpg'
    return (
      <Col>
      <Card key={post._id} style={{ width: "18rem" }}>
        <Link to={`/blogs/${post._id}`} state={post}>
          <Card.Img variant="top" src={"https://jorge-abad.es" + img} />
          <Card.Body>
            <Card.Title>{post.titulo}</Card.Title>
            <Card.Text>{post.descripcion}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
      </Col>
    );
  });
}


/**<CardGroup> {listaPorTemas(url, postEnmodulo,t)}</CardGroup> */

const PostsList = ({ url, posts }) => {
  return (
    <Container>
         
      {modulos(posts).map(function (m) {
        const postEnmodulo = PostsPorModulo(posts, m);
        return (
          <div key={m}>
            <h2>Modulo: {m}</h2>
            {temas(postEnmodulo).map(function (t) {
              return (
                <div key={t}>
                  <h3>Tema: {t}</h3>
                  <Row xs={1} md={4} className="g-4">
                    {listaPorTemas(url, postEnmodulo,t)}
                  </Row>
                </div>
              );
            })}
          </div>
        );
      })}
    
    </Container>

  );
};

/*
const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map(function (post) {
        let nm = false;

        if (modulo !== post.modulo) {
          modulo = post.modulo;
          nm = true;
          console.log(modulo);
        } else {
          nm = false;
        }
        return (
          
          <div>
            {nm && <div>{modulo}</div>}
  

            <div key={post._id}>
              <Link to={`/blogs/${post._id}`} state={post}>
                <h2>{post.titulo}</h2>
                <p>Escrito por {post.autor}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};*/

export default PostsList;
