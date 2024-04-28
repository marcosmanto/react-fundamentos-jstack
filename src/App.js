import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const [posts, setPosts] = useState([
    {
      id: crypto.randomUUID(),
      title: "Title #01",
      subtitle: "Sub #01",
      likes: 10,
      read: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Title #02",
      subtitle: "Sub #02",
      likes: 20,
      read: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Title #03",
      subtitle: "Sub #03",
      likes: 30,
      read: false,
    },
  ]);

  //console.log(posts);

  function handleToggleTheme() {
    setTheme((prevState) => {
      const newTheme = prevState === "dark" ? "light" : "dark";
      document.body.className = newTheme;
      return newTheme;
    });
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        title: `Title #${String(prevState.length + 1).padStart(2, "0")}`,
        subtitle: `Sub #${String(prevState.length + 1).padStart(2, "0")}`,
        likes: (prevState.length + 1) * 10,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
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
      <Header
        title="Blog do JStack"
        onToggleTheme={handleToggleTheme}
        theme={theme}
      >
        <h2>
          Posts da semana &nbsp;
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
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
