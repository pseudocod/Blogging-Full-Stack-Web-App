import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     img: "https://images.unsplash.com/photo-1518605125802-006dcc629439?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     img: "https://images.unsplash.com/photo-1555862124-94036092ab14?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     img: "https://images.unsplash.com/photo-1612387050703-685c779375d4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem tenetur",
  //     img: "https://images.unsplash.com/photo-1643796903573-68834ffadcb6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/?cat=${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
