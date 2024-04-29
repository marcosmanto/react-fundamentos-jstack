import React, { useState, useContext } from "react";

import Post from "../Post";
import Header from "../Header";
import { ThemeContext } from "../../providers/ThemeContext";
import { Title } from "./styles";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const [posts, setPosts] = useState([
    {
      id: crypto.randomUUID(),
      title: "Title #01",
      subtitle: "Sub #01",
      likes: 10,
      read: false,
      removed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Title #02",
      subtitle: "Sub #02",
      likes: 20,
      read: true,
      removed: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Title #03",
      subtitle: "Sub #03",
      likes: 30,
      read: false,
      removed: false,
    },
  ]);

  //console.log(posts);

  function handleRefresh() {
    setPosts((prevState) => {
      const nextId =
        Math.max(
          ...prevState.map((e) => Number(e.title.match(/#(\d+)$/)?.pop())),
        ) + 1;

      return [
        ...prevState,
        {
          id: crypto.randomUUID(),
          title: `Title #${String(nextId).padStart(2, "0")}`,
          subtitle: `Sub #${String(nextId).padStart(2, "0")}`,
          likes: (prevState.length + 1) * 10,
          read: false,
          removed: false,
        },
      ];
    });
  }

  function handleRemovePost(postId) {
    // -- Remove post from state --
    //setPosts((prevState) => prevState.filter((post) => post.id !== postId));

    // -- Change removed status only --
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post,
      ),
    );
  }

  function handleToggleMarkAsRead(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, read: !post.read } : post,
      ),
    );
  }

  return (
    <>
      <Header title="Blog do JStack">
        <Title as="h2" inputcolor={theme === "light" ? "black" : "lime"}>
          Posts da semana &nbsp;
          <button onClick={handleRefresh}>Adicionar Post</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          onToggleMarkAsRead={handleToggleMarkAsRead}
          post={post}
        />
      ))}
    </>
  );
}
